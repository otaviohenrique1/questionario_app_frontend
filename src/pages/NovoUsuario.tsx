import { ErrorMessage, Form, Formik, FormikProps } from 'formik';
import { ButtonGroup, Label } from 'reactstrap';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import * as Yup from "yup";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Flex } from '../components/Containers/Flex';
import { valida_nome, valida_email, valida_senha, valida_confirmacao_senha, valida_usuario, valida_telefone, valida_data_nascimento, valida_cpf } from '../utils/ValidationSchemas';

interface FormUserTypes {
  nome: string;
  email: string;
  senha: string;
  confirmacao_senha: string;
  usuario: string;
  dataNascimento: string;
  telefone: string;
  cpf: string;
}

const validationSchema = Yup.object().shape({
  nome: valida_nome,
  email: valida_email,
  senha: valida_senha,
  confirmacao_senha: valida_confirmacao_senha,
  usuario: valida_usuario,
  telefone: valida_telefone,
  dataNascimento: valida_data_nascimento,
  cpf: valida_cpf,
});

const initialValues: FormUserTypes = {
  nome: "",
  email: "",
  senha: "",
  confirmacao_senha: "",
  usuario: "",
  dataNascimento: "",
  telefone: "",
  cpf: "",
};

export function NovoUsuario() {
  const navigate = useNavigate();

  function handleSubmit(values: FormUserTypes) {
    console.log(values);
    navigate('/');
  }

  return (
    <Flex
      justifyContent="center"
      paddingTop="1em"
    >
      <FormContainer className="d-flex flex-column">
        <h1 className="text-center mb-5">Novo usuário</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps: FormikProps<FormUserTypes>) => {
            const { errors, touched, values } = formikProps;

            const campos_formulario = [
              {
                name: "nome",
                value: values.nome,
                id: "nome",
                label: "Nome",
                placeholder: "Digite a nome",
                type: "text",
                className: `form-control ${(errors.nome && touched.nome) ? "rounded-0 rounded-top" : ""}`,
              },
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
              {
                name: "confirmacao_senha",
                value: values.confirmacao_senha,
                id: "confirmacao_senha",
                label: "Confirmação da senha",
                placeholder: "Digite a senha novamente",
                type: "password",
                className: `form-control ${(errors.confirmacao_senha && touched.confirmacao_senha) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "usuario",
                value: values.usuario,
                id: "usuario",
                label: "Usuário",
                placeholder: "Digite o usuario",
                type: "text",
                className: `form-control ${(errors.usuario && touched.usuario) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "dataNascimento",
                value: values.dataNascimento,
                id: "dataNascimento",
                label: "Data de nascimento",
                placeholder: "Digite a data de nascimento",
                type: "date",
                className: `form-control ${(errors.dataNascimento && touched.dataNascimento) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "telefone",
                value: values.telefone,
                id: "telefone",
                label: "Telefone",
                placeholder: "Digite o numero telefone",
                type: "tel",
                className: `form-control ${(errors.telefone && touched.telefone) ? "rounded-0 rounded-top" : ""}`,
              },
              {
                name: "cpf",
                value: values.cpf,
                id: "cpf",
                label: "CPF",
                placeholder: "Digite o CPF",
                type: "number",
                className: `form-control ${(errors.cpf && touched.cpf) ? "rounded-0 rounded-top" : ""}`,
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
                <ButtonGroup className="pb-3">
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
    </Flex>
  )
}

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
`;
