import { Email, GitHub, LinkedIn, X } from "@mui/icons-material";
import React from "react";
const Footer = () => {
  const contacts = [
    {
      id: "linkdin",
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/kritika-rajput/",
      icon: <LinkedIn />,
    },
    {
      id: "github",
      title: "GitHub",
      url: "https://github.com/kritikaVijaysinghRajput",
      icon: <GitHub />,
    },
    {
      id: "email",
      title: "Gmail",
      url: "kritikarajput203@gmailcom",
      icon: <Email />,
    },
  ];
  return (
    <div className="relative flex justify-center gap-4 items-center p-2">
      <div>
        <p className="font-bold md:text-xl text-sm happy-font">
          kritikarajput@2025
        </p>
      </div>
      <div className="bg-current h-8 p-1"></div>
      <div className="contact p-2 ">
        <ul className="list-none flex my-4 gap-2">
          {contacts.map((link) => (
            <a
              href={link.url}
              key={link.id}
              target="_blank"
              className={` shadow-2xl rounded-full p-1  gap-2 font-medium cursor-pointer transition-transform transform rotate-x-51 rotate-z-43 hover:translate-y-[-16px] hover:rotate-x-51 hover:rotate-z-43 hover:shadow-md border-rounded-md`}
            >
              {link.icon}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
