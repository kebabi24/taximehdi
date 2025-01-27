import React from "react";
import NavbarCustomized from "../components/NavbarCustomized";
import BookInfo from "../components/BookInfo";
import BookInfoTimeLine from "../components/BookInfoTimeLine";
import { useLocation } from "react-router-dom";

const Book: React.FC = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <div className="flex flex-col h-full bg-neutralDGrey">
        <NavbarCustomized></NavbarCustomized>
        <BookInfo state={state}></BookInfo>
      </div>
    </div>
  );
};

export default Book;
