import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";

export function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
