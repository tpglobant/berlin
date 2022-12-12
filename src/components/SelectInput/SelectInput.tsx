import { useState } from "react";
import { Select } from "@mantine/core";
import { IconArrowsSort } from "@tabler/icons";

type SelectProps = {
  data: Array<{ value: string; label: string }>;
  onSortChange: React.Dispatch<React.SetStateAction<string>>;
};

const SelectInput = ({ data, onSortChange }: SelectProps) => {
  const [value, setValue] = useState<string | null>(null);

  const onChange = (selection: string) => {
    setValue(selection);
    onSortChange(selection);
  };

  return (
    <Select
      data-testid="selectInput"
      clearable
      zIndex="1"
      value={value}
      onChange={onChange}
      icon={<IconArrowsSort size={14} />}
      placeholder="Sort"
      data={data}
    />
  );
};

export default SelectInput;
