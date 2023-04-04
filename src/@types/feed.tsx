export interface FeedContextType {
    cats: catObjectType[]
    getCats: Function
    loadingCats: boolean
    handleClickAction: Function
}

export interface actionButtonsType {
    id: number
    title: string
    action: string
    image: string
    height: number,
    width: number,
}

export interface catObjectType {
    id: string,
    url: string,
    width: number,
    height: number,
    isFavourite: boolean,
    action: string
}

export interface catFavouritingActionType {
    id: number
    message: string
}

export interface actionButtonProps {
    handleClickFunction: Function
    id: string
    action: string
    imageSrc: string
    imgAlt: string
    height: number
    width: number
}