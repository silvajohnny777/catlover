export interface FavouritesContextType {
    getFavourites: Function
    loadingFavourites: boolean
    favourites: FavouritesType[]
    removeFavourite: Function
}

export interface FavouritesType {
    created_at: string,
    id: number,
    image: FavouritesImagesType,
    image_id: string,
    sub_id: string,
    user_id: string  
}

export interface FavouritesImagesType {
    id: string,
    url: string
}