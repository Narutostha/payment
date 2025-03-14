import React from "react";

const PromoBar: React.FC = () => {
  return (
    <div className="text-center text-white text-sm font-semibold uppercase bg-[#1A432E] p-3">
      <div className="max-w-[1170px] mx-auto my-0">
        <span>Get up to 35% OFF today!</span>{" "}
        <a href="#" className="text-white underline">
          GET NOW
        </a>
      </div>
    </div>
  );
};

export default PromoBar;
