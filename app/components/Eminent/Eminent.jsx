import EminmentSlider from "@/app/SliderAlumni/page";
import Image from "next/image";
import React from "react";

export default function Eminent() {
  return (
    <>
     <div className=" w-full h-80 bg-cover capitalize flex justify-center items-center "
                style={{ backgroundImage: `url('/about-banner.jpg')` }}>

                <h2 className="font-bold text-3xl w-4/5 uppercase  text-center text-white" >
                Alumni Cell SKC-LNCT INDORE | Central Indias No. 1 Engineering Institute - indore
                </h2>
                </div>
      <div className=" flex justify-around m-10 p-10 w-11/12 mx-auto">
        <div className=" w-full ">
          <h1 className="  text-blue-600 text-4xl">About</h1>
          <h1 className=" text-2xl">
            We serve as a bridge between the university and the alumni
          </h1>
          <h1 className="">
            The Medi-Caps Alumni Association serves as a bridge between the
            university past, present, and future. Our alumni network is a
            crucial stakeholder, actively contributing to the university
            developmental activities. By fostering closer ties between our
            alumni, students, and the university, we can enrich the student
            experience and expand our university development. Our diverse
            alumni community includes over 20,000 graduates who have gone on to
            work for prestigious companies like Oracle, Microsoft, and IBM, as
            well as serving in various government positions, including IAS, IES,
            IPS officers. We are proud to have established city chapters across
            the country, including in the US, UK, and UAE. At Medi-Caps
            University, we value our alumni and their contributions, and we
            strive to maintain a strong relationship with them.
          </h1>
        </div>
        <div
          className="  w-full"
          style={{
            backgroundImage: "url('/about-banner.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      <div className=" w-11/12 mx-auto flex justify-around items-center mt-10 mb-10 ">
        <div className=" flex flex-col justify-center  items-center w-1/2 h-[300px] ">
          <Image src="/anumin/buildings.svg" alt="" width={80} height={80} />
          <h1 className=" font-semibold mt-2">300+ Cities & 50+ Countries</h1>
          <h1 className="  text-center flex justify-center p-2">
            Find alumni living in your city & connect with them
          </h1>
        </div>
        <div className=" flex flex-col justify-center  items-center w-1/2 h-[300px] ">
          <Image
            src="/anumin/Alumni-directory.svg"
            alt=""
            width={70}
            height={70}
          />
          <h1 className=" font-semibold mt-2">25000+ Members</h1>
          <h1 className="  text-center flex justify-center p-2 ">
            Explore complete alumni directory & connect with alumni with your
            interests & domain.
          </h1>
        </div>
        <div className=" flex flex-col justify-center  items-center w-1/2 h-[300px] ">
          <Image src="/anumin/graduated.svg" alt="" width={70} height={70} />
          <h1 className=" font-semibold mt-2">25+ Interest Groups</h1>
          <h1 className="  text-center flex justify-center p-2">
            Connect with the alumni from same interest groups and grow your
            professional as well as social network!
          </h1>
        </div>
        <div className=" flex flex-col justify-center  items-center w-1/2 h-[300px] ">
          <Image src="/anumin/portraits.svg" alt="" width={70} height={70} />
          <h1 className=" font-semibold mt-2">Your Alumni Profile</h1>
          <h1 className="  text-center flex justify-center p-2 ">
            Create & complete your alumni profile and remain connected with all
            opportunities matching your interest.
          </h1>
        </div>
      </div>
      <EminmentSlider />
      <section
        className=" w-full mx-auto text-black  "
        style={{
          backgroundImage: "url('')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="  font-semibold text-5xl pt-10  text-center ">
          Connect With US
        </h1>
        <p className=" text-center p-10 ">
          Address : Room No 16(A), LNCT Group of Collges +91 7556185388
          alumni@lnct.ac.in
        </p>
        <div className="flex relative  w-9/12 mx-auto">
          <p className=" text-center p-10 ">
            Mr. BHAVESH BHANUSALI (President, Alumni cell) Phone no : –
            7000943185 Email id: Bhaveshbhanusalip884@gmail.com
          </p>
          <p className=" text-center p-10 ">
            Mr. BHAVESH BHANUSALI (President, Alumni cell) Phone no : –
            7000943185 Email id: Bhaveshbhanusalip884@gmail.com
          </p>
          <p className=" text-center p-10 ">
            Mr. BHAVESH BHANUSALI (President, Alumni cell) Phone no : –
            7000943185 Email id: Bhaveshbhanusalip884@gmail.com
          </p>
        </div>
        <div className="flex justify-center gap-2 pt-10  items-center pb-2">
          <div className=" text-white  rounded-xl p-3 bg-blue-500  px-10 hover:bg-blue-400 hover:text-black ">
            Join us
          </div>
          <div className=" bg-white rounded-xl p-3 px-10 hover:bg-pink-500 hover:text-white">
            Call Back
          </div>
        </div>
      </section>
    </>
  );
}
