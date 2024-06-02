import React from "react";
import NavbarCustomized from "../components/NavbarCustomized";
import BookInfo from "../components/BookInfo";
import BookInfoTimeLine from "../components/BookInfoTimeLine";

const book = () => {
  return (
    <div>
      <NavbarCustomized></NavbarCustomized>
      <div className="flex flex-col h-full bg-neutralDGrey ">
        <BookInfo></BookInfo>
      </div>
    </div>
  );
};

export default book;
