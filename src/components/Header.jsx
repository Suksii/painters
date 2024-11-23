import React from "react";

const Header = () => {
  const fondLink = "https://fzm.me/v/";
  const fondLogo =
    "https://upload.wikimedia.org/wikipedia/commons/2/23/Coat_of_arms_of_Montenegro.svg";
  const goToFond = () => {
    window.open(fondLink);
  };

  return (
    <div
      className="flex justify-center items-center cursor-pointer px-6"
      onClick={goToFond}
    >
      <div className="flex items-center text-xl justify-center gap-3 my-6">
        <img src={fondLogo} alt={"fond"} className="w-12 h-12" />
        <hr className="h-12 border-r-2 border-black" />
        <p className="w-full">
          <span className="font-semibold">
            Fond za zaštitu i ostvarivanje manjinskih prava{" "}
          </span>
          Crne Gore
        </p>
      </div>
    </div>
  );
};

export default Header;
