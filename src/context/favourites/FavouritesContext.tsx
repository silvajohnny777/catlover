import React, { useState, createContext } from 'react';
import { FavouritesContextType, FavouritesType } from '../../@types/favourites';
import { getCookie } from 'cookies-next';
import axios from 'axios'

type FavouritesProviderProps = {
    children: React.ReactNode
}

export const FavouritesContext = createContext<FavouritesContextType>({} as FavouritesContextType);

const FavouritesProvider = ({ children, }: FavouritesProviderProps) => {
    

    const [ favourites, setFavourites ] = useState<FavouritesType[]>([])
    const [ loadingFavourites, setloadingFavourites ] = useState<boolean>(false)
    const userId = getCookie('user_id');

    const getFavourites = async () => {
        setloadingFavourites(true)
        axios.defaults.headers.common['x-api-key'] = `live_Iw0EKv3C31KhWIDVbG9xA4ozBiW6264RpMW1rUHgnIFjQBAxJfWhreIjzvj8BGno`;
        const response = await axios.get(`https://api.thecatapi.com/v1/favourites?limit=20&sub_id=${userId}&order=DESC`)
        if(response.status === 200) {
            setFavourites(response.data)
            setloadingFavourites(false)
        } else {
            alert('erro na api')
            setloadingFavourites(false)
        }    
    }

    const removeFavourite = async (id: number) => {

        const favouritesHandler = [...favourites]
        const favouritesBackUp = [...favourites]
        setFavourites(favouritesHandler.filter((favourite: FavouritesType) => favourite.id !== id))

        const response = await axios.delete(`https://api.thecatapi.com/v1/favourites/${id}`)

        if(response.status === 200) {   
            console.log('deleted > ', response)
        } else {
            setFavourites(favouritesBackUp)
            alert('erro na api ao deletar')
        }

    }
  
  return <FavouritesContext.Provider value={{ getFavourites, loadingFavourites, favourites, removeFavourite }}>{children}</FavouritesContext.Provider>;
};

export default FavouritesProvider;