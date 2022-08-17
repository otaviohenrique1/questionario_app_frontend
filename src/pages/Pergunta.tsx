import React from 'react'
import { Container } from 'reactstrap'
import { Input } from '../components/Input';
import { ListaPerguntas } from '../utils/listas';

export default function Pergunta() {
  return (
    <Container className="d-flex justify-content-center mt-3">
      {ListaPerguntas[0].alternativas.map((item, index) => (
        <Input
          type="radio"
          className="form-check"
          name={`alternativa-${item.identificacao}`}
          id={`alternativa-${item.identificacao}`}
        />
      ))}
    </Container>
  )
}
