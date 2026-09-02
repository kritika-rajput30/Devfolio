import { Email, GitHub, LinkedIn } from "@mui/icons-material";
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
    <div
      data-band="night"
      className="relative flex justify-center gap-4 items-center p-4 bg-cream text-night border-t-2 border-night"
    >
      <div>
        <p className="font-bold md:text-xl text-sm">kritikarajput@2025</p>
      </div>
      <div className="bg-night h-8 w-[2px]"></div>
      <div className="contact p-2">
        <ul className="list-none flex my-4 gap-2">
          {contacts.map((link) => (
            <a
              href={link.url}
              key={link.id}
              target="_blank"
              rel="noreferrer"
              className="text-night hover:text-night/50 transition-colors rounded-full p-1 gap-2 font-medium cursor-pointer"
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
