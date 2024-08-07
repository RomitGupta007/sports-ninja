import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { PiSignInBold } from "react-icons/pi";
import { FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/router";
const USER_IMG ="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg";
export default function Header() {
  const router = useRouter()
  const { data: session } = useSession();
  return (
    <div className="flex justify-between">
      <img src="./images/logo.png" className="h-24 cursor-pointer" alt="logo" onClick={()=>{router.push('/')}}/>
      <div className="flex gap-3">
        {session ? (
          <button
            onClick={() => router.push("/create-post")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 h-10 mt-10"
          >
            <span className="hidden sm:block">CREATE POST</span>
            <HiOutlinePencilAlt className="sm:hidden text-[20px]" />
          </button>
        ) : null}
        {!session ? (
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-4 h-10 mt-10"
            onClick={() => signIn()}
          >
            <span className="hidden sm:block">SIGN IN</span>
            <PiSignInBold className="sm:hidden text-[20px]" />
          </button>
        ) : (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-4 h-10 mt-10"
            onClick={() => { signOut(); router.push('/')}}
          >
            <span className="hidden sm:block">SIGN OUT</span>
            <FaSignOutAlt className="sm:hidden text-[20px]" />
          </button>
        )}
        {
       session?
        <Image
          className="rounded-full h-20 mt-5 cursor-pointer"
          src={session?.user?.image}
          width={80}
          height={10}
          alt="user image"
          onClick={()=>{router.push('/profile')}}
        />:null
        }
      </div>
    </div>
  );
}
