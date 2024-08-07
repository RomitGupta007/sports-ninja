import React, { useEffect, useState } from 'react'
import Data from '../../shared/data'
import { useSession } from 'next-auth/react';
import app from './../../shared/FirebaseConfig'
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Toast from '../Toast';
import { useRouter } from 'next/router';
export default function Form() {
    const [input,setInput] = useState({});
    const [file, setFile] = useState();
    const [showToast, setShowToast] = useState(false);
    const [submit, setSubmit] = useState(false);
    const router = useRouter()

    const {data:session} = useSession()

    const db = getFirestore(app)
    const storage = getStorage(app)

    useEffect(()=>{
      if(session)
      {
        setInput((values)=>({...values,userName:session.user.name}))
        setInput((values)=>({...values,userImage:session.user.image}))
        setInput((values)=>({...values,email:session.user.email}))
      }
    },[session])

    useEffect(()=>{
        if(submit === true)
        {

            savePost()
            console.log("hi"); 
        }
    },[submit])

    const handleChange=(e)=>{
       const name = e.target.name;
       const value = e.target.value;
       setInput((values)=>({...values,[name]:value}))
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
       setShowToast(true)
        const storageRef = ref(storage, "sports-ninja-app/" + file?.name);
        uploadBytes(storageRef, file).then((snapshot) => {
          console.log("Uploaded a blob or file!");
        }).then(resp=>{
            getDownloadURL(storageRef).then(async(url)=>{
                setInput((values)=>({...values,image:url}))
                setSubmit(true)
            })
        })
  
        
    }

    const savePost = async()=>{
        await setDoc(doc(db,"posts",Date.now().toString()),input)
         console.log(input);
    }
  return (
    <div className="w-96 ml-5">
      {showToast ? (
        <div className="absolute top-10 right-10">
          <Toast
            msg={"Post Created Successfully"}
            closeToast={() => {setShowToast(false);router.push('/');window.location.reload()}}
          />
        </div>
      ) : null}
      <h1 className="text-4xl mb-5">Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          className="w-full mb-4 border-[1px] p-2 rounded-md"
          onChange={handleChange}
        />
        <textarea
          name="desc"
          className="w-full mb-4 
        outline-blue-400 border-[1px] 
        p-2 rounded-md"
          required
          placeholder="Write Description here"
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          required
          className="w-full mb-4 border-[1px] p-2 rounded-md"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          required
          className="w-full mb-4 border-[1px] p-2 rounded-md"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Zip"
          name="zip"
          required
          className="w-full mb-4 border-[1px] p-2 rounded-md"
          onChange={handleChange}
        />
        <select
          name="game"
          required
          className="w-full mb-4 border-[1px] p-2 rounded-md"
          onChange={handleChange}
        >
          <option disabled defaultValue selected>
            Select Game
          </option>
          {Data.Gamelist.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          accept="image/gif, image/jpeg, image/png, image/avif"
          className="mb-5 border-[1px] w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 w-24 p-1 
rounded-md text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
