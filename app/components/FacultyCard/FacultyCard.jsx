import Image from "next/image";
import React from "react";

export default function FacultyCard() {
  return (
    <div className="w-full mt-1 mb-5  p-2  rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ">
      <div className="w-full flex gap-6 ">
        <div className="w-48 h-40   relative  overflow-hidden rounded-lg">
          <Image
            src="/welcome.jpeg"
            alt="foddiesssss"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className=" py-4">
          <h1 className="my-2 font-bold text-lg mt-1">Prof. Suparbhat Chouksey</h1>
          <h1 className="text-sm mt-1">Professor</h1>
          <h2 className="text-sm">Director (OFFG) NIT Rourkela: 11 Oct 2021 - 17 Feb 2022</h2>
          <h3 className="text-sm mt-1">Physics</h3>
        </div>
      </div>
    </div>
  );
}
