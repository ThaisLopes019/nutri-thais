import React, { useState } from 'react'

import {
  Button,
  Container,
  Input,
  Label,
  Resultado,
  Select,
  Titulo,
} from './styled'

export function KM() {
  const [genero, setGenero] = useState('')
  const [kmH, setKmH] = useState('')
  const [tempo, setTempo] = useState('')
  const [peso, setPeso] = useState('')
  const [resultado, setResultado] = useState(0)

  const calcularCaloriasCardio = () => {
    let cardio = 0

    if (genero === 'masculino') {
      cardio = Number(kmH) * Number(peso) * 0.0175 * Number(tempo)
    } else if (genero === 'feminino') {
      cardio = Number(kmH) * Number(peso) * 0.0175 * Number(tempo)
    }

    setResultado(cardio)
  }

  const handleKmHChange = (e: any) => {
    const value = e.target.value.replace(/^0+/, '')
    setKmH(value)
  }

  const handlePesoChange = (e: any) => {
    const value = e.target.value.replace(/^0+/, '')
    setPeso(value)
  }
  const handleTempoChange = (e: any) => {
    const value = e.target.value.replace(/^0+/, '')
    setTempo(value)
  }

  return (
    <Container>
      <Titulo>Calculadora de Gasto Calórico no Cárdio</Titulo>
      <Label>
        Gênero:
        <Select value={genero} onChange={(e) => setGenero(e.target.value)}>
          <option value="">Selecione seu gênero</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </Select>
      </Label>
      <Label>
        KmH:
        <Input type="number" value={kmH} onChange={handleKmHChange} />
      </Label>
      <Label>
        Peso (kg):
        <Input type="number" value={peso} onChange={handlePesoChange} />
      </Label>
      <Label>
        Tempo (min):
        <Input type="number" value={tempo} onChange={handleTempoChange} />
      </Label>
      <Button onClick={calcularCaloriasCardio}>Calcular</Button>
      {resultado > 0 && (
        <Resultado>
          Seu gasto energético é de {resultado.toFixed(2)} calorias.
        </Resultado>
      )}
    </Container>
  )
}
