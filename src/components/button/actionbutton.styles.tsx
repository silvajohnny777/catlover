import styled from 'styled-components'

export const ActionButton = styled.div<{type?: string}>`
    display: flex;
    align-items: center;
    border: ${props => props.type === 'danger' ? '1px solid #fe5068' : '1px solid #22baff'};
    padding: 5px;
    border-radius: 6px;
    color: ${props => props.type === 'danger' ? '#fe5068' : '#22baff'};
    cursor: pointer;
    width: fit-content; 
    margin-bottom: 10px;

    img {
        margin-right: 5px;
    }

    &:hover {
        font-weight: bold;
        border: ${props => props.type === 'danger' ? '3px solid #fe5068' : '3px solid #22baff'};
    }

`