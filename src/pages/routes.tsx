import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import { Login } from "./Login";
import { NovoUsuario } from "./NovoUsuario";

export function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/novo_usuario" element={<NovoUsuario />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
