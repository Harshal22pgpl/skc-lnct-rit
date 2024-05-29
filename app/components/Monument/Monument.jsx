"use client";

import Image from "next/image";
import React, { useState } from "react";

const Monument = () => {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    {
      id: 1,
      title: "Vision",
      content:
        "Our vision at LNCT Indore is to emerge as a premier institution of higher education known for its commitment to excellence, innovation, and inclusivity. We aspire to create a vibrant learning community where diversity is celebrated, creativity is encouraged, and intellectual curiosity thrives. By fostering a culture of collaboration, critical thinking, and lifelong learning, we seek to empower our students to become leaders in their respective fields, driving positive change and making a meaningful impact on the world.",
      img: "/cp-1.jpg",
    },
    {
      id: 2,
      title: "Mission",
      content:
        "At LNCT Indore, our mission is to provide a transformative learning experience that empowers our students to excel in their chosen fields and become responsible global citizens. We are committed to fostering academic excellence, innovation, and ethical values. Through rigorous curriculum, experiential learning opportunities, and holistic development programs, we aim to nurture individuals who are well-equipped to meet the challenges of the ever-evolving world and contribute positively to society.",
      img: "/cp-2.jpg",
    },
    {
      id: 3,
      title: "Guiding Principles",
      content: "Content for Section 3",
      img: "/rules.jpg",
    },
  ];

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (

    <div className=" w-11/12 mx-auto ">
    <div className="flex flex-col mt-5" style={{ height: "calc(100vh - 130px)" }}>
      <div className="flex px-4 text-xl  justify-center gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleSectionClick(section.id)}
            className={`px-8 py-3  rounded-t-lg hover:scale-[.98] transition-all hover:transform duration-500 ${
              activeSection === section.id
                ? "bg-blue-700 text-white"
                : "bg-blue-400"
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>
      <div className="flex flex-grow p-5 gap-6 transition-all duration-700">
        <div className="w-1/3 py-4 ">
          <div className="relative h-full overflow-hidden rounded-lg -z-10">
            <Image
              src={sections[activeSection - 1].img}
              alt="foddiesssss"
              layout="fill"
              objectFit="cover"
              className=" z-20"
            />
          </div>
        </div>
        <div className="w-2/3 mx-auto p-5 text-justify ">
          <p>{sections[activeSection - 1].content}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Monument;
