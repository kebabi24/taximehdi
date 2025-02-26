import React from "react";
import NavbarCustomized from "../components/NavbarCustomized";
import BookInfo from "../components/BookInfo";
import BookInfoTimeLine from "../components/BookInfoTimeLine";
import { useLocation } from "react-router-dom";
import NavbarProfile from "../components/NavbarProfile";

const Book: React.FC = () => {
  const { state } = useLocation();
  const objUser = localStorage.getItem("user");
  const userLoggedIn = objUser ? JSON.parse(objUser) : null;
  console.log(state);
  return (
    <div>
      <div className="flex flex-col h-full bg-neutralDGrey">
        <NavbarProfile></NavbarProfile>
        <BookInfo state={state}></BookInfo>
      </div>
    </div>
  );
};

export default Book;
