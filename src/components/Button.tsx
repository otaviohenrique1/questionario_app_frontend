import { useNavigate } from "react-router-dom";
import { Button as ButtonReactstrap, ButtonProps as ButtonPropsReactstrap } from "reactstrap";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { MdLogout } from "react-icons/md";

type ButtonProps = ButtonPropsReactstrap & {
  color: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
}

export function Button(props: ButtonProps) {
  return (
    <ButtonReactstrap {...props} />
  )
}

export function ButtonLogout() {
  const navigation = useNavigate();
  const ModalSwal = withReactContent(Swal)

  return (
    <Button
      color="danger"
      onClick={() => {
        ModalSwal.fire({
          title: "Deseja sair da aplicação ?",
          showCancelButton: true,
          confirmButtonText: "Sim",
          confirmButtonColor: "#0d6efd",
          cancelButtonText: "Não",
          cancelButtonColor: "#dc3545",
        }).then((result) => {
          if (result.isConfirmed) {
            navigation("/");
          }
        })
      }}
    >
      Logout <MdLogout className="ms-2" />
    </Button>
  );
}
