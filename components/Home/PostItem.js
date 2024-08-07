import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { MdDateRange } from "react-icons/md";
export default function PostItem({post}) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg w-full h-[180px]" src={post.image} alt="" />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {post.desc}
        </p>
        <div className="flex items-center text-red-500 gap-2 mb-2">
          <MdDateRange className="text-[20px]" />
          {post.date}
        </div>
        <div className="flex items-center text-yellow-400 gap-2 mb-2">
          <SlLocationPin />

          {post.location}
        </div>
        <div>
          <span className="font-bold text-green-500">Posted By:</span>
          <br></br>
          <div className="flex gap-3 mt-3 items-center">
            <img src={post.userImage} width={40} className="rounded-3xl" />
            {post.email}
          </div>
        </div>
      </div>
    </div>
  );
}
