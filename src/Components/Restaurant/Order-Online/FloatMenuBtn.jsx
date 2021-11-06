import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import MenuListContainer from "./MenuListContainer";

function FloatMenuBtn(props) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleMenu = () => setIsClicked((prev) => !prev);

  return (
    <>
      <div className="fixed z-30 w-8/12 flex flex-col items-end bottom-2 right-2 md:hidden">
        {isClicked && (
          <div className="p-3 bg-white h-48 overflow-y-scroll">
            {props.menu.map((item) => (
              <MenuListContainer
                {...item}
                key={item._id}
                onClickHandler={props.onClickHandler}
                selected={props.selected}
              />
            ))}
          </div>
        )}
        <button
          onClick={toggleMenu}
          className="text-white flex items-center gap-2 bg-yellow-900 px-3 py-2 rounded-full md:hidden"
        >
          {isClicked ? <MdClose /> : <HiMenu />} Menu
        </button>
      </div>
    </>
  );
}

export default FloatMenuBtn;
