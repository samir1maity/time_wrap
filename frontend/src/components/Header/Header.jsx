import React from "react";

export const Header = ({activeItem}) => {
//   console.log("activeState", props);
  return <div className="h-20 w-full bg-red-200">{activeItem}</div>;
};
