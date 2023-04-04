import { FeedContext } from '@/context/feed/FeedContext'
import React, { useContext, useEffect, useState } from 'react'
import { FeedContainer, CatCardContainer, CatCard, FeedContent, CatActions, Action, CatCardAction, CatCardInformation, FeedHeader, HeaderNav, HeaderIcon } from '../../styles/feed.styles'
import { actionButtonsType, catObjectType } from '@/@types/feed'
import Image from 'next/image';
import Like from '../../../public/like.svg'
import Favourite from '../../../public/star-outline.svg'
import Dislike from '../../../public/cross-sign.svg'
import { useRouter } from 'next/navigation';
import AppActionButton from '@/components/button/ActionButton';
import { AuthContext } from '@/context/auth/AuthContext';
import ActionButton from './actionButton';

const Feed: React.FC = () => {
    const { cats, loadingCats, handleClickAction, getCats } = useContext(FeedContext)
    const { signOut } = useContext(AuthContext)
    useEffect(() => { 
        cats.length === 0 && getCats()
    }, [])
    const { push } = useRouter();
    const [ actionButtons ] = useState<actionButtonsType[]>(
        [
            {
                id: 0,
                title: 'dislike',
                action: 'dislike',
                image: Dislike,
                height: 25,
                width: 25
            },
            /*
            {
                id: 1,
                title: 'favourite',
                action: 'favourite',
                image: Favourite,
                height: 30,
                width: 30
            },
            */
            {
                id: 1,
                title: 'like',
                action: 'like',
                image: Like,
                height: 30,
                width: 30
            },
        ]
    )
    return (
        <FeedContainer>
            <FeedHeader>
                <AppActionButton value={`My favourites`} clickFunction={() => push('/favourites')}></AppActionButton>
                <AppActionButton value={`Log out`} type={`danger`} clickFunction={signOut}></AppActionButton>
            </FeedHeader>
            <FeedContent>
                {
                
                    loadingCats && cats.length === 0 ? 

                        <>
                            <CatCard backgroundImage={''} loadingCats />
                            <CatActions>
                                <Action action={`dislike`}><Image src={Dislike} alt={'dislike'} height={25} width={25} /></Action>
                                <Action action={`like`}><Image src={Like} alt={'like'} height={30} width={30} /></Action>
                            </CatActions>
                        </>
                        
                    : 

                        cats.map((cat: catObjectType, index: number) => { return (
                            <React.Fragment key={cat.id + index}>
                                <CatCardContainer action={cat.action}>
                                    <CatCard backgroundImage={cat.url}>
                                        <CatCardAction action={cat.action}>{cat.action?.toUpperCase() === 'LIKE' ? cat.action.toUpperCase() : 'NOPE'}</CatCardAction>
                                        <CatCardInformation>{cat.id}</CatCardInformation>
                                    </CatCard>
                                </CatCardContainer>
                                <CatActions>
                                    {
                                        actionButtons.map((action: actionButtonsType) => { return (

                                            <ActionButton 
                                                key={action.id}
                                                handleClickFunction={handleClickAction}
                                                id={cat.id}
                                                action={action.action}
                                                imageSrc={action.image}
                                                imgAlt={action.action}
                                                height={action.height}
                                                width={action.width}
                                            />

                                        ) })
                                    }
                                </CatActions>
                            </ React.Fragment>
                        )})
                    
                }
            </FeedContent>
        </FeedContainer>
    )
}

export default Feed