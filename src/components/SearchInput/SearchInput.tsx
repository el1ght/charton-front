"use client";

import Input from "../Input/Input";

interface SearchInputProps {
  value: string;
  setValue: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, setValue }) => {
  return (
    <div className={"border section-separator-color-border rounded-xl"}>
      <Input
        placeholder={"What do you want to listen to?"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={""}
      />
    </div>
  );
};

export default SearchInput;
