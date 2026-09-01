import React from "react";

const SubHeroSection = () => {
  return (
    <div className="sub-hero">
      <div className="content absolute top-44 w-full md:top-48 ml-[-100px]">
        <div className="content__container">
          <ul className="content__container__list">
            <li className="content__container__list__item text-2xl md:text-5xl">
              <p className="font-bold">WEB DEVELOPER</p>
            </li>
            <li className="content__container__list__item text-2xl md:text-5xl">
              <p className="font-bold">KRITIKA RAJPUT</p>
            </li>
            <li className="content__container__list__item text-2xl md:text-5xl">
              <p className="font-bold">APP DEVELOPER</p>
            </li>
            <li className="content__container__list__item text-2xl md:text-5xl">
              <p className="font-bold">UI/UX DESIGNER</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubHeroSection;
