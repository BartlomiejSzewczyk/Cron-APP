import { render, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { useHeader } from "../hooks/useHeader";

const InnerTestComponent = () => {
  const { cron } = useHeader();
  return <div data-testid="cron">{cron}</div>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TestComponent = ({ defaultValues }: { defaultValues: any }) => {
  const methods = useForm({ defaultValues });

  return (
    <FormProvider {...methods}>
      <InnerTestComponent />
    </FormProvider>
  );
};

describe("useHeader", () => {
  it("returns correct cron for specific minutes and specific hours", () => {
    const defaultValues = {
      minuteOption: "specificMinutes",
      hourOption: "specificHours",
      monthDayOption: "everyMonthDay",
      monthsOption: "everyMonth",
      weekDaysOption: "everyWeekDay",
      specificMinutes: ["5", "10"],
      specificHours: ["2", "14"],
    };

    render(<TestComponent defaultValues={defaultValues} />);

    const cronOutput = screen.getByTestId("cron").textContent;
    expect(cronOutput).toBe("5,10 2,14 * * *");
  });

  it("returns correct cron for everyXMinutes and everyHourBetween", () => {
    const defaultValues = {
      minuteOption: "everyXMinutes",
      hourOption: "everyHourBetween",
      monthDayOption: "everyMonthDay",
      monthsOption: "everyMonth",
      weekDaysOption: "everyWeekDay",
      everyXMinutes: "15",
      minHourBetween: 2,
      maxHourBetween: 10,
    };

    render(<TestComponent defaultValues={defaultValues} />);

    const cronOutput = screen.getByTestId("cron").textContent;
    expect(cronOutput).toBe("*/15 2-10 * * *");
  });

  it("returns correct cron when options are set to 'every*'", () => {
    const defaultValues = {
      minuteOption: "everyMinute",
      hourOption: "everyHour",
      monthDayOption: "everyMonthDay",
      monthsOption: "everyMonth",
      weekDaysOption: "everyWeekDay",
    };

    render(<TestComponent defaultValues={defaultValues} />);

    const cronOutput = screen.getByTestId("cron").textContent;
    expect(cronOutput).toBe("* * * * *");
  });

  it("returns empty when only min is set in everyHourBetween", () => {
    const defaultValues = {
      hourOption: "everyHourBetween",
      minHourBetween: 5,
      maxHourBetween: null,
      minuteOption: "everyMinute",
      monthDayOption: "everyMonthDay",
      monthsOption: "everyMonth",
      weekDaysOption: "everyWeekDay",
    };

    render(<TestComponent defaultValues={defaultValues} />);

    const cronOutput = screen.getByTestId("cron").textContent;
    expect(cronOutput).toBe("*  * * *");
  });

  it("falls back to '*' when option is undefined", () => {
    const defaultValues = {
      hourOption: "everyHour",
      monthDayOption: "everyMonthDay",
      monthsOption: "everyMonth",
      weekDaysOption: "everyWeekDay",
    };

    render(<TestComponent defaultValues={defaultValues} />);

    const cronOutput = screen.getByTestId("cron").textContent;
    expect(cronOutput).toBe("* * * * *");
  });

  it("returns correct cron when using a combination of options", () => {
    const defaultValues = {
      minuteOption: "specificMinutes",
      specificMinutes: ["0", "30"],
      hourOption: "everyXHours",
      everyXHours: "6",
      monthDayOption: "specificMonthDays",
      specificMonthDays: ["1", "15"],
      monthsOption: "specificMonths",
      specificMonths: ["1", "12"],
      weekDaysOption: "specificWeekDays",
      specificWeekDays: ["1", "5"],
    };

    render(<TestComponent defaultValues={defaultValues} />);

    const cronOutput = screen.getByTestId("cron").textContent;
    expect(cronOutput).toBe("0,30 */6 1,15 1,12 1,5");
  });
});
