import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";

const BookInfoTimeLine = () => {
  const [isShowMore1, setIsShowMore1] = useState(false);
  const [isShowMore2, setIsShowMore2] = useState(false);
  const [isShowMore3, setIsShowMore3] = useState(false);
  const [isShowMore4, setIsShowMore4] = useState(false);
  const [isShowMore5, setIsShowMore5] = useState(false);
  const [isShowMore6, setIsShowMore6] = useState(false);
  const [isShowMore7, setIsShowMore7] = useState(false);
  const solutions = [
    {
      id: 1,
      name: "ECONOMY CLASS",

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",
      state: isShowMore1,
      toggle: (key: boolean) => toggleReadMoreLess1(key),
    },
    {
      id: 2,
      name: "STANDARD CLASS",

      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",
      state: isShowMore2,
      toggle: (key: boolean) => toggleReadMoreLess2(key),
    },
  ];

  const toggleReadMoreLess1 = (state: boolean) => {
    setIsShowMore1(!state);
  };
  const toggleReadMoreLess2 = (state: boolean) => {
    setIsShowMore2(!state);
  };
  const toggleReadMoreLess3 = (state: boolean) => {
    setIsShowMore3(!state);
  };

  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 bg-white">
      <div className="row-span-12 bg-yellow">01</div>
      <div className="row-span-2 bg-bgGreen">02</div>
      <div className="row-span-2 bg-bgGreen">02</div>
      <div className="row-span-2 bg-bgGreen">02</div>
      <div className="row-span-2 bg-bgGreen">02</div>
    </div>
  );
};

export default BookInfoTimeLine;
