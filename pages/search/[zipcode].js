import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import app from '../../shared/FirebaseConfig';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import PostItem from '../../components/Home/PostItem';
export default function SearchByZipcode() {
  
  const router = useRouter()
  // console.log(router);
  const ZIP = router.query.zipcode;
  const[searchPosts,setSearchPosts] = useState([])
  
  const db = getFirestore(app);
  
 

  useEffect(()=>{
    getSearchPosts()
    console.log(searchPosts);
  },[])

  

  const getSearchPosts = async()=>{
    
    const q = query(collection(db,"posts"),where("zip","==",ZIP))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc)=>{
      let data = doc.data();
      data.id = doc.id;
      setSearchPosts((userPost) => [...userPost, data]);
    })
    
  }

 

  return (
    <div>
        SearchByZipcode
    </div>
  )
}

