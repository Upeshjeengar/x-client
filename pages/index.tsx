import Image from "next/image";
import { BsBell, BsTwitterX } from "react-icons/bs";
import { MdHomeFilled } from "react-icons/md";
import { link } from "fs";
import { CiSearch } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";


interface TwitterSidebarButton{
  title:string;
  icon:React.ReactNode;
}

const SideBarMenuItems: TwitterSidebarButton[]=[
  {
    title:'Home',
    icon:<MdHomeFilled />
  },
  {
    title:'Explore',
    icon:<CiSearch />
  },
  {
    title:'Notifications',
    icon:<BsBell/>
  },
  {
    title:'Messages',
    icon:<FaRegEnvelope />
  },
  {
    title:'Grok',
    icon:<FaRegMinusSquare />
  },
  {
    title:'BookMarks',
    icon:<CiBookmark />
  },
  {
    title:'Premium',
    icon: <BsTwitterX />
  },
  {
    title:'Profile',
    icon:<CgProfile />
  },
  {
    title:'More',
    icon:<SlOptions />
  }
]

export default function Home() {
  const handleLoginwithGoogle=useCallback((cred:CredentialResponse)=>{
    
  },[]);

  return (
  <div >
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      {/* SideBar */}
      <div className="col-span-2 pt-2 ml-30">
        <div className="w-12 h-12 flex items-center justify-center text-3xl hover:bg-gray-600 rounded-full cursor-pointer transition-all">
          <BsTwitterX />
        </div>
        
        <div className="mt-6 size-4 text-1xl font-semibold pr-4">
        <ul>
          {SideBarMenuItems.map((item) => (
            <li className="flex mt-4 justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-2 py-2 w-fit cursor-pointer"key={item.title}>
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>

        {/* twitter post button */}
        
          <button className="mt-5 mx-4 items-center px-10 bg-[#1d9bf0] p-2 rounded-full ">Post</button>

      </div>

      </div>

      {/* Feed */}
      <div className="col-span-7 border-r-[1px] border-l-[1px] border border-gray-900">
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
      </div>

      <div className="col-span-3">
        <div className="border p-5 bg-slate-700 rounded-lg">
          <h1 className="my-2 text-2xl">New to X?</h1>
          <GoogleLogin onSuccess={(cred)=>console.log(cred)}/>
        </div>
      </div>
      {/* Right Side Bar */}
      <div className="col-span-3"></div>
    </div>
  </div>
  )
}
