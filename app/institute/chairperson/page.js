import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <div
        className="w-full h-96 flex justify-center  items-center"
        style={{
          backgroundImage: "url('/logo1.png')",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" uppercase font-bold text-5xl">chairperson</h1>
      </div>
      <div className="w-full  border-2 p-20 ">
        <div className=" flex  rounded-xl bg-sky-100">
          <div className="w-1/3 flex flex-col gap-2 bg-blue-300">
            <div className="w-full h-72 border-2 relative overflow-hidden">
                <Image
                src="/baggi.jpg"
                alt="chairman"
                width="500"
                height="500"

                />
            </div>
            <div>
              <h1  className="py-2 px-10 font-bold text-2xl">Chairperson Name</h1>
              <h2 className="py-2 px-10 text-lg">Post or position</h2>
              <h3 className="py-2 px-10 ">Some other post</h3>
            </div>
          </div>
          <div className="w-2/3 p-10">
            <p className="text-sm mb-3">
              Shri S. N. Subrahmanyan is the Chairman and Managing Director of
              Larsen & Toubro and serves on the board of directors of this
              multi-billion dollar conglomerate.
            </p>
            <p className="text-sm mb-3">
              He is also Vice Chairman on the boards of LTIMindtree and L&T
              Technology Services, Chairman of L&T Metro Rail (Hyderabad)
              Limited, and Director and Chairperson of L&T Finance Holdings Ltd.
            </p>
            <p className="text-sm mb-3">
              Before taking over the reins as CEO & MD in July 2017, Shri
              Subrahmanyan, in his capacity as Deputy MD & President, led L&T’s
              infrastructure business to its position as the country’s largest
              construction organization and amongst the biggest in the world.
            </p>
            <p className="text-sm mb-3">
              Hailing from Chennai, India, he commenced his professional journey
              with L&T in 1984 as a project planning engineer with a civil
              engineering degree and a post-graduation in business management.
              Mentored by stalwarts, he took on roles of increasing
              responsibility across business verticals. He was extremely
              successful in the HITEC City project in Hyderabad and the
              Bangalore International Airport, forging deals in the process
              without precedent in the construction space. He had successfully
              set up the Ready Mix business in India for the first time. He had
              implemented many other famous projects under L&T and rode to the
              highest position.
            </p>
            <p className="text-sm mb-3">
              He was ranked 11th in the Construction Week Power 100 Ranking for
              2021, which had previously recognized him as the Infrastructure
              Person of the Year for 2012. In 2020, Shri Subrahmanyan was ranked
              as the Top CEO (Sell Side) and the 3rd Best CEO (Overall) in the
              All-Asia Executive Team Survey conducted by Institutional Investor
              and recognized as the CEO of the Year by the leading Indian news
              channel, CNBC-Awaaz. He was also awarded the Leading Engineering
              Personality award by the Institution of Engineers (India) in 2014.
              In March 2022, he was recognized as the winner in the
              Infrastructure & Engineering category of the Business Today-PwC
              India’s Best CEOs ranking. Shri Subrahmanyan has assumed the
              charge of Chairperson, Board of Governors, NIT Rourkela from 25th
              August 2023.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
