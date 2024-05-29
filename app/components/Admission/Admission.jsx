"use client";
import Image from "next/image";
import React from "react";
import DeptCounter from "../DeptCounter/DeptCounter";
import AdmissionForm from "../AdmissionForm/AdmissionForm";

export default function Admission() {
  return (
    <>
      <div>
        <div
          className=" w-full h-80"
          style={{
            backgroundImage: "url('/crystal.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        
      >
        <h1 className="text-white text-4xl text-center pt-20 ">ADMISSION PROCESS</h1>
        <h1 className="text-white  text-center ">2024-25</h1>
      </div>
        <div className=" p-10 ">
          <h1 className="text-4xl text-center w-[350px] mx-auto font-semibold ">
            ABOUT SKC LNCT
          </h1>
          <div className="w-full mx-auto pt-5 ml-15">
            <div className="flex  mx-auto justify-center  items-center shadow-[0_20px_50px_rgba(0,_0,_0,_0.3)]">
              <div className="bg-white w-[750px]   h-[360px] text-black  p-2 px-10 translate-x-[5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">
                <h1 className="text-3xl pb-2">About</h1>
                <p>
                  Our Training and Placement Cell not only onboards companies
                  for campus placements but also strives to bridge the gap
                  between the institute and industry through various
                  initiatives. We organize regular workshops, seminars, and
                  expert sessions to help students stay up-to-date with the
                 
                  closely with industry experts to develop and update our
                  curriculum to ensure that it meets the evolving needs of the
                  industry. Furthermore, we provide students with opportunities
                  for internships, live projects, and industrial visits, which
                  help them gain practical experience and prepare them for their
                  future careers. These initiatives have yielded measurable
                  outcomes, as evidenced by our students high placement rates
                  and successful careers after graduation.
                </p>
              </div>
              <div className="">
                <Image
                  src="/audi1.jpeg"
                  alt="asdfghjk"
                  width={700}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto    mt-5">
        <div className="w-full mx-auto grid grid-cols-3 gap-5 ">
          <div className="  w-80  flex-col flex  items-center p-2 ">
            <h1 className="p-1 font-semibold">Step 1</h1>
            <Image src="/pc1.png" alt="" width={100} height={100} />
            <p className="p-2">STUDENT REGISTRATION</p>
          </div>

          <div className="  w-80  flex-col flex  items-center p-2 ">
            <h1 className="p-1 font-semibold">Step 2</h1>
            <Image src="/pc1.png" alt="" width={100} height={100} />
            <p className="p-2"> APPLICATION</p>
          </div>

          <div className="  w-80  flex-col flex  items-center p-2 ">
            <h1 className="p-1 font-semibold">Step 3</h1>
            <Image src="/pc1.png" alt="" width={100} height={100} />
            <p className="p-2">SUMMIT DOCUMENT</p>
          </div>

          <div className="  w-80  flex-col flex  items-center p-2 ">
            <h1 className="p-1 font-semibold">Step 4</h1>
            <Image src="/pc6.png" alt="" width={100} height={100} />
            <p className="p-2">VERIFY</p>
          </div>

          <div className="  w-80  flex-col flex  items-center p-2 ">
            <h1 className="p-1 font-semibold">Step 5</h1>
            <Image src="/pc6.png" alt="" width={100} height={100} />
            <p className="p-2">PAY</p>
          </div>
          <div className="  w-80  flex-col flex  items-center p-2 ">
            <h1 className="p-1 font-semibold">Step 6</h1>
            <Image src="/pc6.png" alt="" width={100} height={100} />
            <p className="p-2">THANK YOU</p>
          </div>
        </div>
      </div>
      <AdmissionForm/>
    </>
  );
}
