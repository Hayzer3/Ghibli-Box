"use client;"

import { HeartIcon, MessageSquare } from "lucide-react"

export default function setLikeOrSetComment(){
    return(
          <div className="flex justify-center gap-6 mt-4 text-gray-700 mb-5">
            <MessageSquare className="w-6 h-6 cursor-pointer hover:text-black" />
            <HeartIcon className="w-6 h-6 cursor-pointer hover:text-red-500" />
        </div>    
    )
}