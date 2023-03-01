import styled from 'styled-components'

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 50px;

  .back {
    padding: 5px 10px;
    background-color: #008cba;
    color: #fff;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    margin-top: 2rem;
  }
`

export const Titulo = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
`

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #ccc;
`

export const Select = styled.select`
  width: 100%;
  padding: 5px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #ccc;
`

export const Button = styled.button`
  display: block;
  margin-top: 20px;
  padding: 5px 10px;
  background-color: #008cba;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
`
export const Resultado = styled.p`
  margin-top: 20px;
  font-size: 18px;
`
