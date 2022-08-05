import { ReactNode } from 'react';
import { Label, LabelProps } from 'reactstrap';
import { Input, InputProps } from './Input';

export type CheckboxProps = {
  label_texto: ReactNode;
  label_props: LabelProps;
  input_props: InputProps;
};

export function Checkbox(props: CheckboxProps) {
  return (
    <Label {...props.label_props}>
      <Input {...props.input_props} />
      {props.label_texto}
    </Label>
  )
}
