import React from 'react'
import { Action } from '../../styles/feed.styles'
import { actionButtonProps } from '@/@types/feed'
import Image from 'next/image';

const ActionButton: React.FC<actionButtonProps> = (props) => {
    const { handleClickFunction, id, action, imageSrc, imgAlt, height, width } = props
    return (
        <Action onClick={() => handleClickFunction(`${action}`, id)} action={action}><Image src={imageSrc} alt={imgAlt} height={height} width={width} /></Action>
    )
}

export default ActionButton