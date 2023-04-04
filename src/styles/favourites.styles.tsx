import styled from 'styled-components'

export const FavouritesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #f3f5f9;
`

export const FavouritesContent = styled.div`
    width: 90%;
    max-width: 300px;
    height: 600px;
`

export const FavouritesHeader = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 300px;
`

export const FavouritesCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-y: auto;
    height: 100%;
`

export const FavouritesMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
`

export const Message = styled.h2 `
    text-align: center;
    margin-bottom: 15px;
`

export const FavouritesCard = styled.div<{backgroundImage?: string}>`
    background-image: url('${props => props.backgroundImage ? props.backgroundImage : 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921'}');
    background-color: #fafafa;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;    
    height: 200px;
    width: 140px;
    border-radius: 6px;
    margin-bottom: 5px;
    position: relative;

    @media (min-width: 1100px) {    
        img {
            opacity: 0
        }
    
        &:hover {
            img {
                opacity: 1
            }
        }
    }

`

export const FavouriteAction = styled.div`
    position: absolute;
    bottom: 5px;
    right: 5px;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .4s;

    @media (max-width: 1100px) {
        background-color: #fff;
    }

    img {
        transition: .4s;
    }

    &:hover {
        background-color: #fff;

        img {
            transform: rotate(360deg);
        }

    }

`