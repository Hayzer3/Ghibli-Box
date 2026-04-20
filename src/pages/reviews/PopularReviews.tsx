import Image from "next/image";
import ProfileImage from "../../../public/images/user-profile.jpg"
import { Heart, HeartIcon } from "lucide-react";
import SetLikeOrSetComment from "./SetLikeOrSetComment";

export default function PopularReviews(){
    return(
         <section className="max-w-6xl mx-auto mt-10 p-6 flex flex-col">
            <div>
                <h1 className="font-semibold">POPULAR REVIEWS</h1>
                <div className="border-[0.5px] border-gray-400"></div>
            </div>
            <div className="bg-gray-200 border border-gray-200 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow mt-2 mb-3">
                <div className="flex items-center gap-4">
                    <Image
                        src={ProfileImage}
                        alt="User profile image"
                        width={50}
                        height={50}
                        className=""
                    />
                    <h3 className="font-medium text-gray-700 hover:underline cursor-pointer">Reviewed by User</h3>

                    <div className="ml-auto">
                        <SetLikeOrSetComment />
                    </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-[15px] mt-4 pl-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repudiandae dolor! Eos autem laudantium nobis deserunt quos fugiat aut expedita atque, iure commodi inventore accusamus labore sed voluptate sit aliquid!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore at doloribus nam officiis molestiae perspiciatis neque est expedita consequatur laborum facere, repellendus ipsam, necessitatibus, quis fuga numquam natus voluptates voluptate!
                </p>
                <div className="flex items-center gap-2 mt-4 text-gray-600">
                    <HeartIcon className="w-5 h-5" />
                    <p className="text-gray-800  text-sm">310 likes</p>
                 </div>
            </div>
            <div className="border-[0.5px] border-gray-400"></div>
         </section>
            
    )
}