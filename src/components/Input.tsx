import { ErrorMessage, Field/* , FieldArray */ } from 'formik'
import React, { HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react'
import { /* Col, */ Label, LabelProps/* , Row */ } from 'reactstrap';
import styled from 'styled-components';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return (
    <Field {...props} />
  )
}

export type PaddingMarginStyleProps = {
  containerPaddingMarginProps?: FormInputContainerStyledProps;
};

export type FormInputProps = InputProps & PaddingMarginStyleProps;

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

export type CheckboxProps = PaddingMarginStyleProps & {
  label_texto: ReactNode;
  label_props: LabelProps;
  input_props: InputProps;
};

export function Checkbox(props: CheckboxProps) {
  return (
    <FormInputContainer
      className="d-flex flex-column"
      {...props.containerPaddingMarginProps}
    >
      <Input {...props.input_props} type="checkbox" />
      <Label {...props.label_props}>{props.label_texto}</Label>
    </FormInputContainer>
  )
}

export type RadioProps = PaddingMarginStyleProps & {
  label_texto: ReactNode;
  label_props: LabelProps;
  input_props: InputProps;
};

export function Radio(props: RadioProps) {
  return (
    <FormInputContainer
      className="d-flex flex-column"
      {...props.containerPaddingMarginProps}
    >
      <Input {...props.input_props} type="radio" />
      <Label {...props.label_props} htmlFor={props.input_props.id}>
        {props.label_texto}
      </Label>
    </FormInputContainer>
  )
}

/*
export function Checkbox(props: CheckboxProps) {
  return (
    <Label {...props.label_props}>
      <Input {...props.input_props} type="checkbox" />
      {props.label_texto}
    </Label>
  )
}

export function Radio(props: RadioProps) {
  return (
    <Label {...props.label_props} htmlFor={props.input_props.id}>
      <Input {...props.input_props} type="radio" />
      {props.label_texto}
    </Label>
  )
}
*/

/* export type InputArrayProps = { 
  data: [],
  label_texto: ReactNode;
  label_props: LabelProps;
  input_props: InputProps;
}

export function InputArray(props: InputArrayProps) {
  return (
    <FieldArray name="friends">
      {({ insert, remove, push }) => (
        <div>
          {values.friends.length > 0 &&
            values.friends.map((friend, index) => (
              <Row className="row" key={index}>
                <Col>
                  <Label htmlFor={`friends.${index}.name`}>Name</Label>
                  <Input
                    name={`friends.${index}.name`}
                    placeholder="Jane Doe"
                    type="text"
                  />
                  <ErrorMessage
                    name={`friends.${index}.name`}
                    component="span"
                    className="alert "
                  />
                </Col>
              </Row>
            ))}
          <button
            type="button"
            className="secondary"
            onClick={() => push({ name: '', email: '' })}
          >
            Add Friend
          </button>
        </div>
      )}
    </FieldArray>
  );
} */