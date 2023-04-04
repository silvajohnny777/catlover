import styled from 'styled-components'

export const Button = styled.div<{isLoading?: boolean}>`
    height: 40px;
    margin-top: 20px;
    width: fit-content;
    min-width: 250px;
    border-radius: 6px;
    background-color: white;
    border: 1px solid purple;
    color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${props => props.isLoading ? 'wait' : 'pointer'};
    transition: .1s;

    &:hover {
        background-color: purple;
        color: #fff;
    }

`;