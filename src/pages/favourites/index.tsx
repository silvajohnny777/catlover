import React, { useContext, useEffect } from 'react'
import { FavouritesContext } from '@/context/favourites/FavouritesContext'
import { FavouriteAction, FavouritesCard, FavouritesCardContainer, FavouritesContainer, FavouritesContent, FavouritesHeader, FavouritesMessage, Message } from '../../styles/favourites.styles'
import { useRouter } from 'next/router'
import { FavouritesType } from '@/@types/favourites'
import Remove from '../../../public/cross-sign.svg'
import Image from 'next/image'
import AppActionButton from '@/components/button/ActionButton'

const Favourites: React.FC = () => {

    const { getFavourites, loadingFavourites, favourites, removeFavourite } = useContext(FavouritesContext)
    const { push } = useRouter();

    useEffect(() => {

        getFavourites()
        
    }, [])
    
    return (
        
        <FavouritesContainer>
            <FavouritesContent>
                <FavouritesHeader>
                    <AppActionButton value={`Back to feed`} clickFunction={() => push('/feed')}></AppActionButton>
                </FavouritesHeader>
                <FavouritesCardContainer>

                    {
                        loadingFavourites ? 

                            <>
                                <FavouritesCard />
                                <FavouritesCard />
                            </>

                        :

                            favourites.length === 0 ?

                                <FavouritesMessage>
                                    <Message>Você ainda não favoritou nenhum gatinho!</Message>
                                    <AppActionButton value={`Procurar!`} clickFunction={() => push('/feed')}></AppActionButton>
                                </FavouritesMessage>

                            :
                        
                                favourites.map((favourite: FavouritesType, index: number) => { return (

                                    <FavouritesCard key={favourite.id} backgroundImage={favourite.image.url}>
                                        <FavouriteAction onClick={() => removeFavourite(favourite.id)}><Image src={Remove} alt={'l'} height={25} width={25} /></FavouriteAction>
                                    </FavouritesCard>

                                ) })

                    }

                </FavouritesCardContainer>
            </FavouritesContent>
        </FavouritesContainer>

    )

}

export default Favourites;