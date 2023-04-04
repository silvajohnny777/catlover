import React, { useState, useEffect, createContext, useContext } from 'react';
import { FeedContextType, catObjectType, catFavouritingActionType } from '../../@types/feed';
import { getCookie } from 'cookies-next';
import axios from 'axios'

type FeedContextProviderProps = {
    children: React.ReactNode
}

export const FeedContext = createContext<FeedContextType>({} as FeedContextType);

const FeedProvider = ({ children, }: FeedContextProviderProps) => {

    const [ cats, setCats ] = useState<catObjectType[]>([])
    const [ loadingCats, setLoadingCats ] = useState<boolean>(false)
    const userId = getCookie('user_id');

    const getCats = async () => {
        setLoadingCats(true)        
        axios.defaults.headers.common['x-api-key'] = `live_Iw0EKv3C31KhWIDVbG9xA4ozBiW6264RpMW1rUHgnIFjQBAxJfWhreIjzvj8BGno`;
        const response = await axios.get<catObjectType>(
            'https://api.thecatapi.com/v1/images/search?limit=10'
        );
        if(response.status === 200) {
            const catsHandler = [...cats]
            setCats(catsHandler.concat(response.data))
            setLoadingCats(false)
        } else {
            alert('API ERROR')
            setLoadingCats(false)
        }
    };
    
    useEffect(() => {

        if(cats.length === 0 && !loadingCats) {

            getCats()

        }

    }, [cats])

    const handleClickAction = async (action: string, id: string) => {

        switch(action) {
            case('like'):   
                const likedIndex = cats.findIndex((cat: catObjectType) => cat.id === id); 
                const catsHandler = [...cats]
                catsHandler[likedIndex].action = 'like'
                setCats(catsHandler)
                const params = {
                    image_id: id,
                    sub_id: `${userId}`
                }   
                const response = await axios.post<catFavouritingActionType>('https://api.thecatapi.com/v1/favourites', params);
                if(response.data.message = 'SUCCESS') {
                    if (likedIndex > -1) { 
                        setCats(cats.filter((cat: catObjectType) => cat.id !== id))   
                    }              
                } else {

                }
                break;
            case('dislike'):            
                const dislikedIndex = cats.findIndex((cat: catObjectType) => cat.id === id);
                if (dislikedIndex > -1) { 
                    const catsHandler = [...cats]
                    catsHandler[dislikedIndex].action = 'dislike'
                    setCats(catsHandler)
                    setTimeout(() => {          
                        setCats(cats.filter((cat: catObjectType) => cat.id !== id))     
                    }, 400);
                } 
                break;
            case('favourite'):
                alert('u favourited! <3')
                break;
        }

    }
  
    return <FeedContext.Provider value={{ cats, getCats, loadingCats, handleClickAction }}>{children}</FeedContext.Provider>;
};

export default FeedProvider;