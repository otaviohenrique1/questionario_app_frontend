import { Form, Formik, FormikProps } from 'formik';
import React from 'react'
import { ButtonGroup } from 'reactstrap';
import { Button } from '../components/Button';
import { Center } from '../components/Center'
import { FormInput } from '../components/Input';
import * as Yup from "yup";
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

interface FormUserTypes {
  email: string;
  senha: string;
}


const validationSchema = Yup.object().shape({
  email: Yup
    .string()
    .required("Campo email vazio")
    .email("Email invalido"),
  senha: Yup
    .string()
    .required("Campo senha vazio")
    .min(8, "Mínimo 8 caracteres"),
});

const initialValues: FormUserTypes = {
  email: "",
  senha: "",
};

export function Login() {
  const navigate = useNavigate();

  function handleSubmit(values: FormUserTypes) {
    console.log(values);
    navigate('/novo_usuario');
  }

  return (
    <Center>
      <FormContainer className="d-flex flex-column">
        <h1>Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps: FormikProps<FormUserTypes>) => {
            const { errors, touched, values } = formikProps;

            return (
              <Form className="d-flex flex-column">
                <FormInput
                  name="email"
                  value={values.email}
                  placeholder="E-mail"
                  type="email"
                  className={`form-control ${(errors.email && touched.email) ? "rounded-0 rounded-top" : ""}`}
                  containerPaddingMarginProps={{
                    margin_bottom: "10px"
                  }}
                />
                <FormInput
                  name="email"
                  value={values.email}
                  placeholder="E-mail"
                  type="email"
                  className={`form-control ${(errors.email && touched.email) ? "rounded-0 rounded-top" : ""}`}
                  containerPaddingMarginProps={{
                    margin_bottom: "10px"
                  }}
                />
                <Button
                  color="link"
                  className="mt-2"
                  type="button"
                >Recuperar senha</Button>
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
                </ButtonGroup>
                <Link
                  to="/novo_usuario"
                  className="btn btn-link"
                >Novo Cadastro</Link>
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
