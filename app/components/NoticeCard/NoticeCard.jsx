import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export default function NoticeCard({
  img,
  content,
  link,
  title,
  description,
  id,
}) {
  return (
    <>
      <div className="w-full h-[440px] border-2 border-blue-500 flex flex-col  items-center rounded-lg overflow-hidden">
        <div className="w-full h-[210px]  relative overflow-hidden">
          <img
            src={img}
            fill
            className=" hover:transform hover:scale-125 duration-500"
          />
        </div>
        <div className=" w-full h-[170px] overflow-hidden text-black ">
          <p className="p-2 text-justify">{title}</p>
        </div>
        <div className=" w-full overflow-hidden text-black ">
          <p className="p-2 text-justify">{description}</p>
        </div>
        <Link
          href={`/detail-news/${id}`}
          className=" h-[60px] w-full  bg-opacity-40 flex justify-between items-center hover:bg-blue-700 hover:text-white text-blue-600 transform transition-all duration-700 border-blue-600 border-t-2"
        >
          <h1 className="p-4 text-xl ">Know More</h1>
          <h1 className="mr-10">
            <IoIosArrowForward size={25} />
          </h1>
        </Link>
      </div>
    </>
  );
}
