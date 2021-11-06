// Library
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import classnames from "classnames";

// Icons
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";

function MobileTabs() {
  const [allTypes, setAllTypes] = useState([
    {
      id: "delivery",
      icon: <RiShoppingBag3Line />,
      name: "Delivery",
    },
    {
      id: "dining",
      icon: <IoFastFoodOutline />,
      name: "Dining Out",
    },
    {
      id: "night",
      icon: <BiDrink />,
      name: "Night Life",
    },
    {
      id: "nutri",
      icon: <IoNutritionOutline />,
      name: "Nutrition",
    },
  ]);

  const { type } = useParams();

  return (
    <>
      <div className="lg:hidden bg-white shadow-lg px-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
        {allTypes.map((items) => (
          <Link to={`/${items.id}`} key={items.id} className="w-1/4">
            <div
              className={
                type === items.id
                  ? "flex flex-col items-center text-xl text-zomato-400"
                  : "flex flex-col items-center text-xl"
              }
            >
              <div
                className={
                  type === items.id
                    ? "flex justify-center items-center flex-col w-full py-3 border-t-2 border-zomato-400"
                    : "flex justify-center items-center flex-col py-3 border-t-2 border-white"
                }
              >
                {items.icon}
                <h5 className="text-sm">{items.name}</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

function LargeTabs() {
  const [allTypes, setAllTypes] = useState([
    {
      id: "delivery",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      name: "Delivery",
      activeColor: "yellow",
    },
    {
      id: "dining",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      activeColor: "blue",

      name: "Dining Out",
    },
    {
      id: `night`,
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      activeColor: "purple",

      name: "Night life",
    },
    {
      id: `nutri`,
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
      activeColor: "yellow",

      name: "Nutrition",
    },
  ]);

  const { type } = useParams();

  return (
    <>
      <div className="hidden lg:flex gap-14 container px-20 my-8 mx-auto">
        {allTypes.map((items) => (
          <Link to={`/${items.id}`} key={items.id}>
            <div
              className={classnames(
                "flex items-center gap-3 pb-2 transition duration-700 ease-in-out",
                { "border-b-2 border-zomato-400": type === items.id }
              )}
            >
              <div
                className={classnames(
                  "w-16 h-16 bg-gray-100 p-4 rounded-full",
                  { [`bg-${items.activeColor}-100`]: type === items.id }
                )}
              >
                <img
                  src={
                    type === items.id ? items.imageActive : items.imageDefault
                  }
                  alt="options"
                  className="w-full h-full"
                />
              </div>
              <h3
                className={
                  type === items.id
                    ? "text-xl text-zomato-400"
                    : "text-xl text-zomato-700"
                }
              >
                {items.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

function FoodTab() {
  return (
    <div>
      <MobileTabs />
      <LargeTabs />
    </div>
  );
}

export default FoodTab;
