import { Form, Formik, FormikProps } from 'formik';
import React from 'react'
import { ButtonGroup } from 'reactstrap';
import { Button } from '../components/Button';
import { Center } from '../components/Center'
import { FormInput, FormInputProps } from '../components/Input';
import * as Yup from "yup";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface FormUserTypes {
  nome: string;
  email: string;
  senha: string;
  dataNascimento: string;
  telefone: string;
  cpf: string;
}

const validationSchema = Yup.object().shape({
  nome: Yup
    .string()
    .required("Campo nome vazio"),
  email: Yup
    .string()
    .required("Campo email vazio")
    .email("Email invalido"),
  senha: Yup
    .string()
    .required("Campo senha vazio")
    .min(8, "Mínimo 8 caracteres"),
  telefone: Yup
    .string()
    .required("Campo telefone vazio")
    .max(11, "Máximo 11 caracteres"),
});

const initialValues: FormUserTypes = {
  nome: '',
  email: "",
  senha: "",
  dataNascimento: '',
  telefone: '',
  cpf: '',
};

export function NovoUsuario() {
  const navigate = useNavigate();

  function handleSubmit(values: FormUserTypes) {
    console.log(values);
    navigate('/');
  }

  return (
    <Center>
      <FormContainer className="d-flex flex-column">
        <h1>NovoUsuario</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps: FormikProps<FormUserTypes>) => {
            const { errors, touched, values } = formikProps;

            const campos_formulario: FormInputProps[] = [
              {
                name: "nome",
                value: values.nome,
                placeholder: "Nome",
                type: "text",
                className: `form-control ${(errors.nome && touched.nome) ? "rounded-0 rounded-top" : ""}`,
                containerPaddingMarginProps: {
                  margin_bottom: "10px"
                }
              },
              {
                name: "email",
                value: values.email,
                placeholder: "E-mail",
                type: "email",
                className: `form-control ${(errors.email && touched.email) ? "rounded-0 rounded-top" : ""}`,
                containerPaddingMarginProps: {
                  margin_bottom: "10px"
                }
              },
              {
                name: "senha",
                value: values.senha,
                placeholder: "Senha",
                type: "password",
                className: `form-control ${(errors.senha && touched.senha) ? "rounded-0 rounded-top" : ""}`,
                containerPaddingMarginProps: {
                  margin_bottom: "10px"
                }
              },
              {
                name: "dataNascimento",
                value: values.dataNascimento,
                placeholder: "Data de nascimento",
                type: "date",
                className: `form-control ${(errors.dataNascimento && touched.dataNascimento) ? "rounded-0 rounded-top" : ""}`,
                containerPaddingMarginProps: {
                  margin_bottom: "10px"
                }
              },
              {
                name: "telefone",
                value: values.telefone,
                placeholder: "telefone",
                type: "tel",
                className: `form-control ${(errors.telefone && touched.telefone) ? "rounded-0 rounded-top" : ""}`,
                containerPaddingMarginProps: {
                  margin_bottom: "10px"
                }
              },
              {
                name: "cpf",
                value: values.cpf,
                placeholder: "CPF",
                type: "number",
                className: `form-control ${(errors.cpf && touched.cpf) ? "rounded-0 rounded-top" : ""}`,
                containerPaddingMarginProps: {
                  margin_bottom: "10px"
                }
              },
            ];

            return (
              <Form className="d-flex flex-column">
                {campos_formulario.map((item, index) => (
                  <FormInput
                    key={index}
                    name={item.name}
                    value={item.value}
                    placeholder={item.placeholder}
                    type={item.type}
                    className={item.className}
                    containerPaddingMarginProps={item.containerPaddingMarginProps}
                  />
                ))}
                <ButtonGroup>
                  <Button
                    color="primary"
                    className="mt-2"
                    type="submit"
                  >Entrar</Button>
                  <Button
                    color="danger"
                    className="mt-2"
                    type="reset"
                  >Limpar</Button>
                  <Button
                    color="secondary"
                    className="mt-2"
                    type="button"
                    onClick={() => navigate("/")}
                  >Voltar</Button>
                </ButtonGroup>
              </Form>
            );
          }}
        </Formik>
      </FormContainer>
    </Center>
  )
}

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;
