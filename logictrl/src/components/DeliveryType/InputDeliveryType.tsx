import { TextInput, TextInputProps } from "react-native"

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={{
        height: 45,
        width: 160,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "#999",
        paddingHorizontal: 10,
        textAlign: 'left',
        flexShrink: 1,
      }}
      {...rest}
    />
  )
}