import GlobalStyle from '../styles/global'
import type { AppProps } from 'next/app'
import AuthProvider from '@/context/auth/AuthContext'
import FeedProvider from '@/context/feed/FeedContext'
import FavouritesProvider from '@/context/favourites/FavouritesContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <FeedProvider>
        <FavouritesProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </FavouritesProvider>
      </FeedProvider>
    </AuthProvider>
  )
}
