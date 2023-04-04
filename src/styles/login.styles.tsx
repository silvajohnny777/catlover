import styled from 'styled-components'

export const Title = styled.h1`
    margin-bottom: 35px;
    font-weight: 100;
    font-size: 40px;

    @media (max-width: 1100px) {
        font-size: 32px;
    }

`

export const InputContainer = styled.div`

`

export const Label = styled.div`
    margin-Bottom: 5px;
    font-weight: bold;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('https://images.pexels.com/photos/1202481/pexels-photo-1202481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    background-color: #fff;
    width: 500px;
    padding: 20px;
    border-radius: 6px;

    @media (max-width: 1100px) {
        width: 90%;
    }

`