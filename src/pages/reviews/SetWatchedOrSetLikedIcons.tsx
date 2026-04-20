'use client';

import { EyeIcon, HeartIcon } from "lucide-react";

export default function SetWatchedOrSetLiked(){
    return(
        <div className="flex justify-center gap-6 mt-4 text-gray-700 mb-5">
            <EyeIcon className="w-6 h-6 cursor-pointer hover:text-green-500" />
            <HeartIcon className="w-6 h-6 cursor-pointer hover:text-red-500" />
        </div>
    )
}