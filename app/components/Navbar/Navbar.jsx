"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navlink from "./Navlink";

import { FaChevronDown } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [openSubMenuId, setOpenSubMenuId] = useState(null);
  const [collegeNameIndex, setCollegeNameIndex] = useState(0);
  const menuId = usePathname();

  const collegeNames = ["SKC LNCT ", "एसकेसी एलएनसीटी "];

  const navItems = [
    {
      main: "Institute",
      child: [
        {
          name: "Institute",
          subchild: [
            {
              name: "Welcome to LNCT",
              link: "/institute/welcome",
            },
            {
              name: "Vision and Mission",
              link: "/institute/mission_vision",
            },
            {
              name: "Former Directors",
              link: "/institute/former_directors",
            },
            {
              name: " Campus and Facilities",
              link: "/institute/campus_facilities",
            },
            {
              name: "Contact Us",
              link: "/institute/contact",
            },
          ],
        },
        {
          name: "Administration",
          subchild: [
            {
              name: "Board of Governors",
              link: "/institute/bog",
            },
            {
              name: "The Senate",
              link: "/institute/senate",
            },
            {
              name: "Chairperson",
              link: "/institute/chairperson",
            },
            {
              name: "Director",
              link: "/institute/director",
            },
            {
              name: "Finance Commitee",
              link: "/institute/fc",
            },
            {
              name: "Building and Work Commitee",
              link: "/institute/bwc",
            },
          ],
        },
        {
          name: "Key Documents",
          subchild: [
            {
              name: "Rules and Regulations",
              link: "/students/rules_regulations",
            },

            {
              name: "Annual Reports",
              link: "/institute/annual_reports",
            },
          ],
        },
        {
          name: "Other Important Links",
          subchild: [
            
            {
              name: "Digital Payments",
              link: "https://www.pratibhaglobalschool.com/payments/login/40e032b8-a995-47ab-a854-c3aec4812c0e",
            },

            {
              name: "AICTC Regulations",
              link: "https://forms-rit.vercel.app/Payments",
            },
          ],
        },
      ],
    },
    {
      main: "Academics",
      child: [
        {
          name: "Academic",
          subchild: [
            {
              name: "Academic Overview",
              link: "/academic/overview",
            },
            {
              name: "Academic Programs",
              link: "/academic/programs",
            },
            {
              name: "Academic Regulations",
              link: "/students/rules_regulations",
            },
            {
              name: "Academic Calender",
              link: "/academic/calender",
            },
            {
              name: "Carriculmn and Syllabus",
              link: "/academic/syllabus",
            },
          ],
        },
        {
          name: "Departments",
          subchild: [
            {
              name: "Automobile Engineering",
              link: "/department/ae",
            },
            {
              name: "Computer Science & Engineering",
              link: "/department/cse",
            },
            {
              name: "Electronics & Communication Engineering",
              link: "/department/ece",
            },
            {
              name: "Electrical & Electronics Engineering",
              link: "/department/eet",
            },
            {
              name: "Information Technology",
              link: "/department/it",
            },
          ],
        },
        {
          name: "Facilities",
          subchild: [
            {
              name: "Central Workshop",
              link: "/academic/central-workshop",
            },
            {
              name: "Central Research Facility",
              link: "/academic/central-research",
            },
            {
              name: "High Performace Computing",
              link: "/academic/hfc",
            },
          ],
        },
        {
          name: "Technical Service Units",
          subchild: [
            {
              name: "Health Care",
              link: "/health-center",
            },
            {
              name: "Lawn and Garden",
              link: "/academic/lawn",
            },
          ],
        },
      ],
    },
    {
      main: "Students",
      child: [
        {
          name: "Prospective Students",
          subchild: [
            {
              name: "Why LNCT",
              link: "/why_skclnct",
            },
            {
              name: "Gallary",
              link: "/institute/mission_vision",
            },
            {
              name: "Campus Life",
              link: "/student/campuslife",
            },
            {
              name: "Academic Programs",
              link: "/institute/campus_facilities",
            },
            {
              name: "How to Apply",
              link: "/institute/contact",
            },
            {
              name: "Admission Process",
              link: "/admission",
            },
            {
              name: "FAQs",
              link: "/institute/contact",
            },
          ],
        },

        {
          name: "Existing Students",
          subchild: [
            {
              name: "Rules and Regulations",
              link: "/institute/welcome",
            },
            {
              name: "Academic Calender",
              link: "/institute/mission_vision",
            },
            {
              name: "Time Table",
              link: "/institute/former_directors",
            },
            {
              name: "Holidays",
              link: "/institute/campus_facilities",
            },
            {
              name: "Parent Connect",
              link: "/institute/contact",
            },
            {
              name: "Online Fee Payment",
              link: "/institute/contact",
            },
          ],
        },
        {
          name: "Other Related Link",
          subchild: [
            {
              name: "Internship Programs",
              link: "/institute/welcome",
            },

            {
              name: "Library",
              link: "/institute/library",
            },
            {
              name: "Career Development Cell",
              link: "/institute/campus_facilities",
            },
          ],
        },
      ],
    },
    {
      main: "Faculty and Staff",
      child: [
        {
          name: "Prospective Employee",
          subchild: [
            {
              name: "What is LNCT",
              link: "/institute/welcome",
            },
            {
              name: "Why Join LNCT",
              link: "/institute/mission_vision",
            },
            {
              name: "Job Openings",
              link: "/institute/former_directors",
            },
          ],
        },
        {
          name: "Existing Employee",
          subchild: [
            {
              name: "Faculty Diretory",
              link: "/faculty",
            },
            {
              name: "Officer Directory",
              link: "/institute/mission_vision",
            },
            {
              name: "Staff Directory",
              link: "/institute/former_directors",
            },
            {
              name: "Campus Life",
              link: "/institute/campus_facilities",
            },
            {
              name: "Rules and Regulations",
              link: "/institute/contact",
            },
            {
              name: "Circulers and Notices",
              link: "/institute/contact",
            },
            {
              name: "Official Forms",
              link: "/institute/contact",
            },
          ],
        },
      ],
    },
    {
      main: "Placement",
      child: [
        {
          name: "Overview",
          subchild: [
            {
              name: "Placement Overview",
              link: "/placementview",
            },
            {
              name: "Career Development Cell",
              link: "/cdc",
            },
            {
              name: "Leading Recruiters",
              link: "/leading_recruiters",
            },
            {
              name: "Regular Activities",
              link: "/regular_activite",
            },
            {
              name: "Placement Calender and Process",
              link: "/placementcalender",
            },
          ],
        },
        {
          name: "For Students",
          subchild: [
            {
              name: "Student Testimonial",
              link: "student_testimonial",
            },
          ],
        },
      ],
    },
    {
      main: "Alumni",
      child: [
        {
          name: "Alumni",
          subchild: [
            {

              name: "About Alumni Cell",
              link: "/alumni",

            },
           
            {
              name: "Eminent",
              link: "/eminent",
            },

            {
              name: "Director's Message to Alumni",
              link: "/institute/contact",
            },
          ],
        },
      ],
    },
    {
      main: "Resources",
      child: [
        {
          name: "Resources",
          subchild: [
            {
              name: "  Central Research Facility",
              link: "/crf",
            },
            {
              name: " Centre for Technology Innovation and Industry Relations",
              link: "/relations",
            },
            // {
            //   name: " Foundation for Technology and Business Incubation",
            //   link: "/institute/former_directors",
            // },
            {
              name: "High Performance Computing",
              link: "/highpc",
            },
            {
              name: " Industrial Consultancy",
              link: "/ic",
            },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    setOpenSubMenuId(null);
  }, [menuId]);

  // Function to toggle submenu
  const toggleSubMenu = (submenuId) => {
    setOpenSubMenuId(openSubMenuId === submenuId ? null : submenuId);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCollegeNameIndex((prevIndex) =>
        prevIndex === collegeNames.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" text-white z-50">
      <div className="flex items-center justify-between p-2 bg-blue-900">
        <div className="items-center flex gap-4 ">
          <p>Admissions</p>
          <p>Placement</p>
          <p>Careers</p>
        </div>

        <div className="items-center gap-4 flex w-8 h-8 ">
          <img src="/twitter.png" className="rounded-full"></img>
          <img src="/yt.png" className="rounded-full"></img>
          <img src="/insta.png" className="rounded-full"></img>
        </div>

        {/* Login button */}
        <div className="flex ">
          <Link
            className="text-xs px-4 py-2 leading-none rounded-full hover:bg-green-300 hover:text-black border-2"
            href="\loginPage"
          >
            STAFF LOGIN
          </Link>
        </div>
      </div>
      <div className="bg-gradient-to-r from-indigo-500 to-blue-800">
        <div className=" w-9/12 mx-auto flex items-center justify-between px-4 ">
          {/* Logo and college name */}
          <div className="flex items-center gap-4">
            <div className="w-[100px] h-[100px] relative">
              <Image
                src="/logo1.png"
                layout="fill"
                objectFit="contain"
                alt="Logo"
              />
            </div>
            <h1 className="text-3xl font-semibold">
              {collegeNames[collegeNameIndex]}
            </h1>
            <div className="slogan">An Institute of National Importance</div>
          </div>

          {/* Search box */}
          <div>
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded-full border border-white focus:outline-none focus:border-gray-300"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-blue-900">
        <div className="flex w-full mx-auto gap-4 justify-center bg-blue-900 relative ">

          {navItems.map((item,index) => (
            <div key={index}>
              
              <Link
                href="#"
                className={` text-white font-semibold text-lg hover:text-gray-300 hover:bg-blue-700 flex gap-2 items-center px-3  py-4 ${
                  openSubMenuId == item.main ? "bg-blue-800" : ""
                }`}
                onClick={() => toggleSubMenu(item.main)}
              >
                {item.main}
                <FaChevronDown size={15} />
                <span className="submenu-indicator">
                  <span className="submenu-indicator-chevron border-white"></span>
                </span>
              </Link>

              <div
                className={` absolute top-[60px] left-0 p-3   bg-white nav-submenu w-full  ${
                  openSubMenuId === item.main ? "" : "hidden"
                }`}
              >
                <ul className="flex justify-around list-none">
                  {item.child.map((link,index) => (
                    <li className="p-2" key={index}>
                      <h4 className="text-blue-700 font-bold text-lg">
                        <Link href="#">{link.name}</Link>
                      </h4>
                      <ul className="mt-3">
                        {link.subchild.map((navlink,index) => (
                          <li key={index}>
                            <Navlink name={navlink.name} link={navlink.link} />
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
