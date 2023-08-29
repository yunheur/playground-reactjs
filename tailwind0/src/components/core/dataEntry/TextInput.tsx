import React from "react";

export type TextInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  onChangeText?: (value: string) => void;
};
export function TextInput({
  onChange,
  onChangeText,
  ...props
}: TextInputProps) {
  return (
    <input
      {...props}
      onChange={(e) => {
        if (onChange) {
          onChange(e);
        }
        if (onChangeText) {
          onChangeText(e.target.value);
        }
      }}
    />
  );
}
