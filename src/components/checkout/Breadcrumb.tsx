import React from "react";

const Breadcrumb: React.FC = () => {
  return (
    <div className="flex items-center gap-2 mb-5 max-sm:flex-wrap">
      <a href="#" className="text-[#969191] text-base no-underline">
        Home
      </a>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="769:930" layer-name="Vector" width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="breadcrumb-arrow" style="width: 7px; height: 13px"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.232896 0.30146C0.529772 0.0311481 0.996079 0.0457607 1.27442 0.334091L6.80072 6.05891C7.06643 6.33416 7.06643 6.7625 6.80072 7.03776L1.27442 12.7626C0.996079 13.0509 0.529772 13.0655 0.232896 12.7952C-0.0639947 12.5248 -0.0790411 12.072 0.199296 11.7838L5.25319 6.54833L0.199296 1.31295C-0.0790411 1.02462 -0.0639947 0.571757 0.232896 0.30146Z" fill="#969191"></path> </svg>',
          }}
        />
      </div>
      <a href="#" className="text-[#969191] text-base no-underline">
        Cart
      </a>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="769:931" layer-name="Vector" width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="breadcrumb-arrow" style="width: 7px; height: 13px"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.232896 1.01337C0.529772 0.743062 0.996079 0.757675 1.27442 1.04601L6.80072 6.77082C7.06643 7.04607 7.06643 7.47441 6.80072 7.74968L1.27442 13.4745C0.996079 13.7629 0.529772 13.7775 0.232896 13.5071C-0.0639947 13.2367 -0.0790411 12.7839 0.199296 12.4957L5.25319 7.26025L0.199296 2.02486C-0.0790411 1.73653 -0.0639947 1.28367 0.232896 1.01337Z" fill="black"></path> </svg>',
          }}
        />
      </div>
      <span className="text-black text-base">Checkout</span>
    </div>
  );
};

export default Breadcrumb;
