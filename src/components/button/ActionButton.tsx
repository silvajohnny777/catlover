import React from 'react'
import { ActionButton } from './actionbutton.styles'
import Image from 'next/image'

interface AppActionButtonPropsType {
    value: string
    clickFunction: Function
    isLoading?: boolean
    type?: string
}

const AppActionButton = (props: AppActionButtonPropsType) => {
    const { value, clickFunction, type } = props
    return (
        <ActionButton type={type} onClick={() => clickFunction()}>{value}</ActionButton>
    )
}

export default AppActionButton