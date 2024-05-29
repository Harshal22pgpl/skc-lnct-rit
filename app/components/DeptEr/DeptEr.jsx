"use client";
import React from "react";
import SliderMain from "../SliderMain/SliderMain";
import Image from "next/image";
import Counter from "@/app/components/Counter";
import DeptCounter from "../DeptCounter/DeptCounter";
import ProgramCard from "../ProgramCard/ProgramCard";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Slider from "../Slider/Slider";

export default function DeptEr({ dept }) {
  const images = ["/ar-3.jpg"];
  const counter = [
    {
      title: "undergraduate students",
      value: "120",
      textColor: "text-red-600",
      color: "bg-red-500",
      speed: "40",
    },
    {
      title: "postgraduate students",
      value: "60",
      textColor: "text-red-600",
      color: "bg-purple-500",
      speed: "35",
    },
    {
      title: "doctoral students",
      value: "30",
      textColor: "text-red-600",
      color: "bg-pink-500",
      speed: "30",
    },
    {
      title: "recent job offers",
      value: "300",
      textColor: "text-red-600",
      color: "bg-yellow-500",
      speed: "30",
    },
    {
      title: "faculties",
      value: "60",
      textColor: "text-red-600",
      color: "bg-teal-500",
      speed: "30",
    },
  ];

  switch (dept) {
    case "ae":
      dept = "Automobile Engineering";
      break;
    case "cse":
      dept = "Computer Science & Engineering";
      break;
    case "ece":
      dept = "Electronics & Communication Engineering";
      break;
    case "eet":
      dept = "Electrical & Electronics Engineering";
      break;
    case "it":
      dept = "Information Technology";
      break;

    default:
      break;
  }

  return (
    <div>
      <SliderMain images={images} heading={dept} />
      <div className="w-full   ">
        <div className="w-full flex px-20 py-10  gap-7">
          <div className="w-2/3 ">
            <div className="p-10">
              <h2 className=" text-4xl text-blue-700 my-5">
                About the Department
              </h2>
              <div className="w-full   mt-5">
                <div className="w-full grid grid-cols-3 gap-5 ">
                  {counter.map((count) => (
                    <DeptCounter
                      key={count.title}
                      initialValue={3}
                      targetValue={count.value}
                      speed={count.speed}
                      textColor={count.textColor}
                      text={count.title}
                      color={count.color}
                    />
                  ))}
                </div>
              </div>

              <p className=" mt-5 font-extralight text-sm  text-justify  h-[160px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore totam nesciunt illum, voluptatem obcaecati ut iure
                accusamus illo reiciendis, commodi quam? Veniam asperiores
                maiores distinctio consectetur, ratione eius, sunt voluptatum,
                voluptatem tempore ipsa iusto dignissimos voluptates eum
                commodi? Eius nobis odio doloribus ipsa, ducimus quos vitae
                mollitia. Recusandae, mollitia omnis? Quasi, amet numquam
                voluptatum culpa in voluptas cumque laborum atque iste qui quo
                harum quis, sed praesentium eius tempore? Perferendis beatae
                nostrum debitis ad, tempora iusto iure dicta provident illum
                doloremque aesentium iusto natus aut laudantium animi eligendi
                veritatis architecto suscipit? Expedita voluptates quae placeat,
                sed libero, recusandae sequi assumenda est impedit, suscipit aut
                quisquam animi fugit! Libero ducimus ipsa non, nemo laboriosam
                minima distinctio doloribus ratione
              </p>
            </div>
          </div>
          <div className="w-1/3  p-4">
            <div className="relative h-full">
              <Image
                src="/welcome.jpeg"
                alt="foddiesssss"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex px-20 py-4 gap-7">
          <div className="w-3/5 h-[580px]">
            <div className="relative h-full">
              <Image
                src="/dept-m-v.jpg"
                alt="foddiesssss"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-2/5  flex flex-col gap-10 py-20 justify-between ">
            <div className="w-11/12 mx-auto  flex flex-col gap-4">
              <div className="flex  items-center gap-2">
                <Image src="/mission-icon.png" width={70} height={20} alt="h" />{" "}
                <h1 className="text-2xl font-bold">Mission</h1>
              </div>
              <div>
                <p className="text-sm font-extralight">
                  To impart knowledge and equip students with skills for
                  generating quality civil engineering professionals with high
                  ethical standards; carry out innovative research and
                  consultancy projects to design, build and maintain civil
                  engineering infrastructure ensuring environmental health and
                  quality life.
                </p>
              </div>
            </div>
            <div className="w-11/12 mx-auto  flex flex-col gap-4">
              <div className="flex  items-center gap-2">
                <Image src="/vision-icon.png" width={70} height={20} alt="h" />{" "}
                <h1 className="text-2xl font-bold">Vision</h1>
              </div>
              <div>
                <p className="text-sm font-extralight">
                  To become frontier in civil engineering education and
                  research, which will serve the society with most sustainable
                  infrastructure and superior environmental health.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col px-20 gap-4 py-6">
          <h1 className="text-4xl text-blue-500 font-bold p-2">
            Academic Programmes
          </h1>
          <div className="w-full flex justify-center gap-20 ">
            <ProgramCard
              course={"Undergraduate"}
              bgcolor={"bg-blue-400"}
              admission={"JEE"}
              dept={"civil engineering"}
            />
            <ProgramCard
              course={"Post-Graduate"}
              bgcolor={"bg-blue-600"}
              admission={"JEE"}
              dept={"civil engineering"}
            />
          </div>
        </div>
        <div className="w-full flex flex-col px-20 gap-4 py-6 ">
          <h1 className="font-bold text-4xl text-blue-500">
            Head Of the Department
          </h1>
          <div className="flex justify-between gap-10">
            <div className="w-1/2  flex items-center p-4">
              <div className="w-72 h-72 rounded-full border-2 border-black relative overflow-hidden">
                <Image src="/director.png" fill />
              </div>
              <div className="flex flex-col justify-center  p-10">
                <h1 className=" font-semibold text-2xl">Name of head</h1>
                <h2 className="text-lg mb-2">Positon</h2>
                <h1 className="text-sm  mt-1">
                  <FaPhoneAlt className="inline mr-1" />
                  022-67525656
                </h1>
                <h1 className="text-sm  mt-1">
                  <MdEmail className="inline mr-1" />
                  sns@lntecc.com
                </h1>
              </div>
            </div>
            <div className="w-1/2  flex flex-col justify-center items-center">
              <p className="p-5 text-3xl text-center">
                {" "}
                Lorem, ipsum dolor sit amet cpiditate iste dolores esse, dolorum
                consequuntur praesentium expedita, optio, temporibus mollitia.
              </p>
              <h1 className=" italic  text-2xl">- name of author</h1>
            </div>
          </div>
        </div>
        <div className="w-full p-2"></div>
      </div>
      <div className=" w-10/12 mx-auto p-10">
        <h1 className="py-3 text-center text-3xl text-blue-500 font-bold">
          List of Faculties
        </h1>
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full">
            <thead>
              <tr className=" border-b ">
                <th className="px-2 py-3 text-left">Name</th>
                <th className="px-2 py-3 text-left">Designation</th>
                <th className="px-2 py-3 text-left">Qualification</th>
                <th className="px-2 py-3 text-left">Experience</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-b">
                <td className=" px-2 py-3">John Doe</td>
                <td className=" px-2 py-3">Software Engineer</td>
                <td className=" px-2 py-3">Bachelors in Computer Science</td>
                <td className=" px-2 py-3">5 years</td>
              </tr>

              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
