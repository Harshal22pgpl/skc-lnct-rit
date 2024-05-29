import Image from "next/image";
import React from "react";

export default function AbouttheInstitute() {
  return (
    <>
      <div className="  w-11/12 mx-auto mt-10 justify-around bg-gradient-to-r from-indigo-900 to-blue-900">
        <div className="   ">
          <h1 className="text-4xl pt-10 pb-5 px-10 ">About the Institute</h1>
          <p className="  px-10 pb-4">
            NIT Rourkela is one of the premier national level institutions for
            technical education in the country and is funded by the Government
            of India. The Government of India has elevated the Regional
            Engineering College, Rourkela to a university under the name of
            National Institute of Technology, Rourkela.
          </p>
          <p className="  px-10 pb-5 border-b  ">
            The main objective of the Institute is to produce quality Engineers
            and Scientists in Graduate and Post-Graduate levels in various
            branches of Engineering and Science. The Institute is managed by
            the.
          </p>
          <div className="flex ">
            <div className=" p-10  flex items-start">
              {/* <Image
                src="/mission.png"
                alt="mission img"
                width={80}
                height={80}
              /> */}

              <div>

              <h1 className="text-2xl font-semibold text-center mb-2 ">
                MISSION
              </h1>
              <p className=" p-2 ">
              To become an internationally acclaimed institution of higher
                learning that will serve as a source of knowledge and expertise
                for the society and be a preferred destination for undergraduate
                and graduate studies.
              </p>
              </div>
            </div>
            <div className=" p-10 flex items-start">
              {/* <Image
                src="/vision.png"
                alt="vision img"
                width={80}
                height={80}
              /> */}

             <div>
              <h1 className="text-2xl  font-semibold text-center mb-2">
                VISION
              </h1>
              <p className=" p-2   mb-4">
                To become an internationally acclaimed institution of higher
                learning that will serve as a source of knowledge and expertise
                for the society and be a preferred destination for undergraduate
                and graduate studies.
              </p>
              </div>
            </div>
          </div>
        </div>

          <h1 className="text-4xl  border-t p-4 px-10  ">Message from Director</h1>
        <div className=" flex justify-between items-center w-full">
          <div className=" flex justify-between pt-1 px-10">
            <div className="w-full">
            <p className=" p-2   text-pretty  ">
              To become an internationally acclaimed institution of higher
              learning that will serve as a source of knowledge and expertise
              for the society and be a preferred destination for undergraduate
              and graduate studiesTo become an internationally acclaimed
              institution of higher learning that will serve as a source of
              knowledge and expertise for the society and be .
              and graduate studiesTo become an internationally acclaimed
              institution of higher learning that will serve as a source of
              knowledge and expertise for the society and be .
              and graduate studiesTo become an internationally acclaimed
              institution of higher learning that will serve as a source of
              knowledge and expertise for the society and be .
              and graduate studiesTo become an internationally acclaimed
              institution of higher learning that will serve as a source of
              knowledge and expertise for the society and be .
            </p>
            </div>
            <div className="w-full  flex justify-around items-end ">
            <Image src="/founder.png" alt="" height={230} width={400} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
