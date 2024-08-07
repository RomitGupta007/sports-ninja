import React, { useEffect, useState } from 'react'
import Data from '../../shared/data'
import { useRouter } from 'next/router'
export default function GameList() {
  const [games,setGames] = useState([])
  
  
  useEffect(()=>{
    setGames(Data.Gamelist)
    
  },[])
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 mt-4">
      {games.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center cursor-pointer hover:animate-pulse transition-all duration-75"
          
          onClick={console.log("hi")}
        >
          <img src={item.image} width={45} height={45}/>
          <h2 className="text-[14px] text-center">{item.name}</h2>
        </div>
      ))}
    </div>
  );
}
