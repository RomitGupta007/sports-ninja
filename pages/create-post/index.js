import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Form from '../../components/CreatePost/Form';

export default function CreatePost() {
    const {data:session} = useSession()
    const router = useRouter();
    useEffect(()=>{
        if(!session)
        {
            router.push('/')
        }
    },[])
  return (
    <Form/>
  );
}
