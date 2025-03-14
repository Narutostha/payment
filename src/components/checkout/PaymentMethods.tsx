import React from "react";

const PaymentMethods: React.FC = () => {
  return (
    <div className="flex justify-between mb-[30px]">
      <div className="flex gap-5 items-center">
        <img src="visa.png" alt="Visa" className="h-10" />
        <img src="mastercard.png" alt="Mastercard" className="h-10" />
        <img src="apple-pay.png" alt="Apple Pay" className="h-10" />
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="769:1050" layer-name="Logotype" width="222" height="180" viewBox="0 0 222 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="stripe-logo" style="height: 43px"> <g filter="url(#filter0_dd_769_1050)"> <rect x="40.5" y="42.5" width="106" height="44" rx="8.5" stroke="#D6DCE5"></rect> <path d="M95.854 56.3129L92.0666 57.1228V54.0634L95.854 53.2686V56.3129Z" fill="#635BFF"></path> <path d="M80.4626 55.008L76.7807 55.7878L76.7657 67.7989C76.7657 70.0182 78.4406 71.6527 80.6738 71.6527C81.9112 71.6527 82.8165 71.4278 83.3145 71.1579V68.1138C82.8316 68.3088 80.4475 68.9985 80.4475 66.7793V61.456H83.3145V58.262H80.4475L80.4626 55.008Z" fill="#635BFF"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M120.767 64.8747C120.767 61.0359 118.896 58.0069 115.319 58.0069C111.728 58.0069 109.555 61.0359 109.555 64.8447C109.555 69.3583 112.12 71.6375 115.802 71.6375C117.598 71.6375 118.956 71.2327 119.982 70.6628V67.6638C118.956 68.1736 117.779 68.4885 116.285 68.4885C114.821 68.4885 113.524 67.9787 113.358 66.2093H120.736C120.736 66.1266 120.742 65.9389 120.748 65.7226L120.748 65.7221L120.748 65.7216L120.748 65.7212C120.757 65.4275 120.767 65.0817 120.767 64.8747ZM113.312 63.4503C113.312 61.7557 114.353 61.0508 115.304 61.0508C116.225 61.0508 117.205 61.7557 117.205 63.4503H113.312Z" fill="#635BFF"></path> <path d="M71.5451 61.2611C70.7453 61.2611 70.2625 61.486 70.2625 62.0709C70.2625 62.7094 71.0935 62.9903 72.1244 63.3387C73.8052 63.9068 76.0173 64.6545 76.0266 67.4241C76.0266 70.1083 73.8688 71.6528 70.7302 71.6528C69.4325 71.6528 68.0141 71.3979 66.6108 70.7981V67.2292C67.8783 67.919 69.4778 68.4288 70.7302 68.4288C71.5752 68.4288 72.1788 68.2039 72.1788 67.5141C72.1788 66.8068 71.278 66.4835 70.1904 66.0933C68.5342 65.4989 66.4448 64.7491 66.4448 62.2508C66.4448 59.5966 68.4819 58.0072 71.5451 58.0072C72.7975 58.0072 74.0348 58.2021 75.2873 58.6969V62.2208C74.1405 61.606 72.6919 61.2611 71.5451 61.2611Z" fill="#635BFF"></path> <path d="M88.0076 59.3715L87.7662 58.2619H84.5069V71.3827H88.2792V62.4905C89.1695 61.3359 90.6784 61.5458 91.1462 61.7108V58.2619C90.6634 58.082 88.8979 57.7521 88.0076 59.3715Z" fill="#635BFF"></path> <path d="M92.0663 58.2621H95.8538V71.3829H92.0663V58.2621Z" fill="#635BFF"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M100.773 59.1765C101.301 58.6967 102.252 58.0069 103.73 58.0069C106.371 58.0069 108.861 60.3761 108.876 64.7248C108.876 69.4782 106.416 71.6375 103.715 71.6375C102.387 71.6375 101.588 71.0827 101.044 70.6928L101.029 74.9365L97.257 75.7312V58.2468H100.577L100.773 59.1765ZM101.045 67.6345C101.407 68.0244 101.935 68.3394 102.825 68.3394C104.213 68.3394 105.149 66.8397 105.149 64.8301C105.149 62.8655 104.198 61.3358 102.825 61.3358C101.965 61.3358 101.422 61.6357 101.029 62.0707L101.045 67.6345Z" fill="#635BFF"></path> </g> <defs> <filter id="filter0_dd_769_1050" x="0" y="0" width="222" height="180" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dy="2"></feOffset> <feGaussianBlur stdDeviation="10"></feGaussianBlur> <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_769_1050"></feBlend> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dy="20"></feOffset> <feGaussianBlur stdDeviation="20"></feGaussianBlur> <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"></feColorMatrix> <feBlend mode="normal" in2="effect1_dropShadow_769_1050" result="effect2_dropShadow_769_1050"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_769_1050" result="shape"></feBlend> </filter> </defs> </svg>',
            }}
          />
        </div>
        <img src="paypal.png" alt="PayPal" className="h-10" />
      </div>
    </div>
  );
};

export default PaymentMethods;
