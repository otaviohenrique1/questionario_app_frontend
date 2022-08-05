import { ErrorMessage, Field } from 'formik'
import React, { HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react'
import { Label, LabelProps } from 'reactstrap';
import styled from 'styled-components';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return (
    <Field {...props} />
  )
}

export type FormInputProps = InputProps & {
  containerPaddingMarginProps?: FormInputContainerStyledProps;
};

export function FormInput(props: FormInputProps) {
  return (
    <FormInputContainer
      className="d-flex flex-column"
      {...props.containerPaddingMarginProps}
    >
      <Input {...props} />
      <ErrorMessage
        name={props.name || ""}
        component="span"
        className="alert alert-danger rounded-0 rounded-bottom"
      />
    </FormInputContainer>
  )
}

type FormInputContainerProps = HTMLAttributes<HTMLDivElement> & FormInputContainerStyledProps;

export function FormInputContainer(props: FormInputContainerProps) {
  return (
    <FormInputContainerStyled {...props} />
  )
}

type FormInputContainerStyledProps = {
  padding_top?: string;
  padding_bottom?: string;
  padding_left?: string;
  padding_right?: string;
  margin_top?: string;
  margin_bottom?: string;
  margin_left?: string;
  margin_right?: string;
};

const FormInputContainerStyled = styled.div<FormInputContainerProps>`
  padding-top: ${(props) => props.padding_top || "0"};
  padding-bottom: ${(props) => props.padding_bottom || "0"};
  padding-left: ${(props) => props.padding_left || "0"};
  padding-right: ${(props) => props.padding_right || "0"};
  margin-top: ${(props) => props.margin_top || "0"};
  margin-bottom: ${(props) => props.margin_bottom || "0"};
  margin-left: ${(props) => props.margin_left || "0"};
  margin-right: ${(props) => props.margin_right || "0"};
`;

export type CheckboxProps = {
  label_texto: ReactNode;
  label_props: LabelProps;
  input_props: InputProps;
};

export function Checkbox(props: CheckboxProps) {
  return (
    <Label {...props.label_props}>
      <Input {...props.input_props} type="checkbox" />
      {props.label_texto}
    </Label>
  )
}

export type RadioProps = {
  label_texto: ReactNode;
  label_props: LabelProps;
  input_props: InputProps;
};

export function Radio(props: RadioProps) {
  return (
    <Label {...props.label_props}>
      <Input {...props.input_props} type="radio" />
      {props.label_texto}
    </Label>
  )
}
