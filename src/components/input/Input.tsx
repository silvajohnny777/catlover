import React from 'react'
import { InputStyles } from './input.styles'

interface InputPropsType {
    name: string
    value: string
    changeFunction: Function
    isPasswordInput?: boolean
}

const Input = (props: InputPropsType) => {
    const { name, value, changeFunction, isPasswordInput } = props;

    const type = (value: string) => {
      console.log(value)
    }
    return (
        <InputStyles 
            name={name} 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeFunction(e)} 
            type={isPasswordInput ? `password` : `text`} 
            value={value} 
        />
    )
}

export default Input;