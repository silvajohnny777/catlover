import styled from 'styled-components'

export const FeedContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #f3f5f9;
`

export const FeedContent = styled.div`
    width: 90%;
    max-width: 300px;
    position: relative;
    height: 600px;
`

export const FeedHeader = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 300px;
`

export const HeaderNav = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid #22baff;
    padding: 5px;
    border-radius: 6px;
    color: #22baff;
    cursor: pointer;
    transition: .1s;

    img {
        margin-right: 5px;
    }

    &:hover {
        font-weight: bold;
        border: 3px solid #22baff;
    }

`

export const HeaderIcon = styled.div `

`

export const CatCardContainer = styled.div<{action?: string}>`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    height: 500px;
    width: 100%;
    top: 0;
    transition: .4s;
    translate: ${props => props.action === 'like' ? '40px' : props.action === 'dislike' ? '-40px' : ''};
    transform: ${props => props.action === 'like' ? 'rotate(10deg)' : props.action === 'dislike' ? 'rotate(-10deg)' : ''};
`

export const CatCard = styled.div<{backgroundImage: string, loadingCats?: boolean}>`
    width: 100%;
    height: 500px;
    position: absolute;
    border-radius: 6px;
    background-image: url('${props => props.loadingCats ? 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921' : props.backgroundImage}');
    background-color: #fafafa;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border: 1px solid black;
`

export const CatCardAction = styled.h2<{action: string}>`
    opacity: ${props => props.action ? '1' : '0'};
    min-width: 100px;
    padding: 10px;
    position: absolute;
    right: ${props => props.action === 'dislike' ? '15px' : 'unset'};
    left: ${props => props.action === 'like' ? '15px' : 'unset'};
    border: 2px solid ${props => props.action === 'like' ? '#43e4c0' : props.action === 'dislike' ? '#fe5068' : '#22baff'};
    color: ${props => props.action === 'like' ? '#43e4c0' : props.action === 'dislike' ? '#fe5068' : '#22baff'};
    font-weight: bold;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${props => props.action === 'like' || props.action === 'favourite' ? 'rotate(-10deg);' : 'rotate(10deg);'};
    transition: .4s;
    top: 25px;
`

export const CatCardInformation = styled.div`
    font-size: 21px;
    color: #fff;
    bottom: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, .6);
    width: 100%;
    height: 70px;
    padding: 10px;
`

export const CatActions = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    position: absolute;
    width: 100%;
    bottom: 0;
`

export const Action = styled.div<{action: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;
    background-color: #fff;
    padding: 15px;
    border-radius: 50%;
    border: 1px solid ${props => props.action === 'like' ? '#43e4c0' : props.action === 'favourite' ? '#22baff' : '#fe5068'};
    cursor: pointer;
    transition: .4s;
    img {
        transition: .4s;
    }
    &:hover {
        border: 5px solid ${props => props.action === 'like' ? '#43e4c0' : props.action === 'favourite' ? '#22baff' : '#fe5068'};

        img {
            transform: rotate(360deg);
        }

    }
`