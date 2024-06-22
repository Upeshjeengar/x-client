import React from 'react'
import Image from 'next/image'
import {BiMessageRounded, BiUpload} from "react-icons/bi"
import { FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

const FeedCard: React.FC = () => {
    return (
      <div className="border-gray-600 border p-4 hover:bg-slate-900 transition-all gap-4 cursor-pointer">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-1 flex items-start">
            <Image
              width={50}
              height={50}
              src="https://avatars.githubusercontent.com/u/99462722?s=96&v=4"
              alt="user-image"
            />
          </div>
          <div className="col-span-11">
            <h5 className="font-semibold">Upesh Jeengar</h5>
            <p>
              ResNet-50 is a powerful and versatile convolutional neural network designed to handle the
              challenges of deep learning by using residual learning techniques. Its architecture,
              consisting of multiple layers and residual blocks, allows it to achieve high performance
              on complex tasks while being easier to train compared to traditional deep networks.
            </p>

                {/* tweet options(comment like views etc) */}
            <div className='pr-10 flex justify-between mt-5 items-center text-xl p-2 w-[90%]'>
                <div>
                    <BiMessageRounded/>
                </div>
                <div>
                    <FaRetweet/>
                </div>
                <div>
                    <AiOutlineHeart/>
                </div>
                <div>
                    <BiUpload/>
                </div>

            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default FeedCard;