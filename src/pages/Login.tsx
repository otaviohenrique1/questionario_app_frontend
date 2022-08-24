import { ErrorMessage, Form, Formik, FormikProps } from 'formik';
import React from 'react'
import { ButtonGroup, Label } from 'reactstrap';
import { Button } from '../components/Button';
import { Center } from '../components/Containers/Center'
import { Input } from '../components/Input';
import * as Yup from "yup";
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Flex } from '../components/Containers/Flex';
import { valida_email, valida_senha } from '../utils/ValidationSchemas';

interface FormUserTypes {
  email: string;
  senha: string;
}

const validationSchema = Yup.object().shape({
  email: valida_email,
  senha: valida_senha,
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

            const campos_formulario = [
              {
                name: "email",
                value: values.email,
                id: "email",
                label: "E-mail",
                placeholder: "Digite a e-mail",
                type: "email",
                className: `form-control ${(errors.email && touched.email) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "senha",
                value: values.senha,
                id: "senha",
                label: "Senha",
                placeholder: "Digite a senha",
                type: "password",
                className: `form-control ${(errors.senha && touched.senha) ? "rounded-0 rounded-top" : ""}`,
              },
            ];

            return (
              <Form className="d-flex flex-column">
                {campos_formulario.map((item, index) => (
                  <Flex
                    key={index}
                    marginBottom="10px"
                    flexDirection="column"
                  >
                    <Label
                      htmlFor={item.id}
                      className="form-check-label mb-1"
                    >
                      {item.label}
                    </Label>
                    <Input
                      name={item.name}
                      id={item.id}
                      value={item.value}
                      placeholder={item.placeholder}
                      type={item.type}
                      className={item.className}
                    />
                    <ErrorMessage
                      name={String(item.name)}
                      component="span"
                      className="alert alert-danger rounded-0 rounded-bottom"
                    />
                  </Flex>
                ))}
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
