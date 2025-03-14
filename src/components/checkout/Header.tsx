import React from "react";
import IconSearch from "@/assets/icons/IconSearch";
import IconUser from "@/assets/icons/IconUser";
import IconCart from "@/assets/icons/IconCart";

const Header: React.FC = () => {
  return (
    <header className="flex items-center bg-[#D9D9D9] px-10 py-5 border-b-[#969191] border-b border-solid max-sm:flex-col max-sm:gap-5 max-sm:p-[15px]">
      <div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b8dbc7631fab6eea50048ea1ed482dfa6a7f6ae"
          alt="Organic Fiber Logo"
          className="w-[180px] h-auto"
        />
      </div>
      <nav className="flex gap-12 mx-auto my-0 max-md:gap-6 max-sm:hidden">
        <a
          href="#"
          className="text-[#1D2939] text-base font-medium no-underline"
        >
          HOME
        </a>
        <a
          href="#"
          className="text-[#1D2939] text-base font-medium no-underline"
        >
          ABOUT US
        </a>
        <a
          href="#"
          className="text-[#1D2939] text-base font-medium no-underline"
        >
          PRODUCTS
        </a>
        <a
          href="#"
          className="text-[#1D2939] text-base font-medium no-underline"
        >
          SALE
        </a>
        <a
          href="#"
          className="text-[#1D2939] text-base font-medium no-underline"
        >
          BLOG
        </a>
      </nav>
      <div className="flex gap-4 items-center max-sm:w-full max-sm:justify-between">
        <div className="flex items-center gap-3 px-4 py-2 rounded-[83px] border-[1.5px] border-solid border-[#090909] max-sm:flex-1">
          <IconSearch />
          <input
            type="text"
            placeholder="Search Product"
            className="border-none bg-transparent text-base text-[#667085] w-full outline-none"
          />
        </div>
        <button className="flex justify-center items-center w-10 h-10 cursor-pointer rounded-[100px] border-[1.5px] border-solid border-[#090909]">
          <IconUser />
        </button>
        <button className="flex justify-center items-center w-10 h-10 cursor-pointer rounded-[100px] border-[1.5px] border-solid border-[#090909]">
          <IconCart />
        </button>
      </div>
    </header>
  );
};

export default Header;
