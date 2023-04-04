import React, { useState, useContext, useEffect } from 'react'
import { Container, Content, Title, InputContainer, Label } from '../../styles/login.styles'
import PrimaryButton from '@/components/button/PrimaryButton'
import { AuthContext } from '@/context/auth/AuthContext'
import Input from '@/components/input/Input'
import { loginDataType } from '@/@types/auth'
import { useRouter } from 'next/router'

const Login: React.FC = () => {

  const { signIn, loading, loginData, setLoginData, signed } = useContext(AuthContext)
  const { push } = useRouter();

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((pre: loginDataType) => ({
      ...pre, [name]: value
    }))
  }

  useEffect(() => {
    signed && push('/feed')
  }, [signed]);

  return (
    <Container>
      <Content>
        <Title>CatLovers</Title>
        <InputContainer>
          <Label>Id: </Label>
          <Input name={`id`} value={loginData.id} changeFunction={onHandleChange} />
        </InputContainer>
        <InputContainer>
          <Label>Senha: </Label>
          <Input name={`password`} value={loginData.password} changeFunction={onHandleChange} isPasswordInput={true}  />
        </InputContainer>
        <PrimaryButton value={`Login`} clickFunction={signIn} isLoading={loading} />
      </Content>
    </Container>
  )
}

export default Login