import * as Yup from "yup";

export const valida_nome = Yup
  .string()
  .required("Campo nome vazio");

export const valida_email = Yup
  .string()
  .required("Campo email vazio")
  .email("Email invalido");

export const valida_senha = Yup
  .string()
  .required("Campo senha vazio")
  .min(8, "Mínimo de 8 caracteres")
  .max(255, "Máximo de 255 caracteres");

export const valida_confirmacao_senha = Yup
  .string()
  .when("senha", {
    is: (val: string) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("senha")],
      "As senhas não são iguais!"
    )
  })
  .required("Campo confirmação de senha vazio");

export const valida_usuario = Yup
  .string()
  .required("Campo usuario vazio");

export const valida_telefone = Yup
  .string()
  .required("Campo telefone vazio")
  .max(11, "Máximo 11 caracteres");

export const valida_data_nascimento = Yup
  .string()
  .required("Campo data de nascimento vazio");

export const valida_cpf = Yup
  .string()
  .required("Campo cpf vazio");
