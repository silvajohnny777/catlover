import React from 'react'
import { Button } from './button.styles'

interface PrimaryButtonPropsType {
    value: string
    clickFunction: Function
    isLoading?: boolean
}

const PrimaryButton = (props: PrimaryButtonPropsType) => {
    const { value, clickFunction, isLoading } = props
    return (
        <Button isLoading={isLoading} onClick={() => clickFunction()}>{isLoading ? `Carregando...` : value}</Button>
    )
}

export default PrimaryButton