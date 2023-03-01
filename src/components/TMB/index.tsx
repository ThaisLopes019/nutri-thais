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

export function TMB() {
  const [genero, setGenero] = useState('')
  const [idade, setIdade] = useState('')
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [resultado, setResultado] = useState(0)

  const calcularMetabolismo = () => {
    let metabolismo = 0

    if (genero === 'masculino') {
      metabolismo =
        88.36 + 13.4 * Number(peso) + 4.8 * Number(altura) - 5.7 * Number(idade)
    } else if (genero === 'feminino') {
      metabolismo =
        447.6 + 9.2 * Number(peso) + 3.1 * Number(altura) - 4.3 * Number(idade)
    }

    setResultado(metabolismo)
  }

  const handleIdadeChange = (e: any) => {
    const value = e.target.value.replace(/^0+/, '')
    setIdade(value)
  }

  const handleAlturaChange = (e: any) => {
    const value = e.target.value.replace(/^0+/, '')
    setAltura(value)
  }

  const handlePesoChange = (e: any) => {
    const value = e.target.value.replace(/^0+/, '')
    setPeso(value)
  }

  return (
    <Container>
      <Titulo>Calculadora de Metabolismo</Titulo>
      <Label>
        Gênero:
        <Select value={genero} onChange={(e) => setGenero(e.target.value)}>
          <option value="">Selecione seu gênero</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </Select>
      </Label>
      <Label>
        Idade:
        <Input type="number" value={idade} onChange={handleIdadeChange} />
      </Label>
      <Label>
        Altura (cm):
        <Input type="number" value={altura} onChange={handleAlturaChange} />
      </Label>
      <Label>
        Peso (kg):
        <Input type="number" value={peso} onChange={handlePesoChange} />
      </Label>
      <Button onClick={calcularMetabolismo}>Calcular</Button>
      {resultado > 0 && (
        <Resultado>
          Seu metabolismo basal é de {resultado.toFixed(2)} calorias.
        </Resultado>
      )}
    </Container>
  )
}
