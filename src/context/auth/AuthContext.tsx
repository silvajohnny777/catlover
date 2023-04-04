import { useRouter } from 'next/router';
import React, { useState, createContext, useEffect } from 'react';
import { AuthContextType, loginDataType } from '../../@types/auth';
import { setCookie } from 'cookies-next';
import { getCookie } from 'cookies-next';
import { deleteCookie } from 'cookies-next';

type AuthContextProviderProps = {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children, }: AuthContextProviderProps) => {

    const userId = getCookie('user_id');
    const [ user, setUser ] = useState<string>('')
    const [ loginData, setLoginData ] = useState<loginDataType>({
      id: '',
      password: ''
    })
    const [ loading, setLoading ] = useState<boolean>(false)
    const { push } = useRouter();

    const signIn = () => {

        const userId = loginData.id
        setLoading(true)

        setTimeout(() => {
            push('/feed')
            setUser(userId)
            setLoading(false)
            setCookie('user_id', `${userId}`);
            
        }, 2000);

    }

    useEffect(() => {
        
        if(userId) { 
            setUser(String(userId)) 
        } else { 
            signOut()
        }

    }, [userId])

    const signOut = () => {

        deleteCookie('user_id');
        setUser('')
        push('/login')                
        
    }
  
  return <AuthContext.Provider value={{ signed: !!user, signIn, signOut, loading, loginData, setLoginData }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;