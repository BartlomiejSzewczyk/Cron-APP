import { FormInput } from "@components/FormInput";
import { useCronInput } from "./hooks/useCronInput";

export const CronInput = () => {
  const { value, setValue } = useCronInput();

  return (
    <FormInput
      label="Harmonogram"
      sx={{ width: "100%" }}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
