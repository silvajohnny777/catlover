import React from 'react'
import { useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/auth/AuthContext';

export const Home= () => {
  const { push } = useRouter();
  const { signed } = useContext(AuthContext)

  useEffect(() => {
    signed ? push('/feed') : push('/login')
  }, [signed]);
  return <p></p>;
};

export default Home