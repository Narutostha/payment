import React, { useState } from "react";

const CreditCardForm: React.FC = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and format with spaces every 4 digits
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formattedValue);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Format as MM/YY
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 2) {
      setExpiryDate(value);
    } else {
      setExpiryDate(`${value.slice(0, 2)}/${value.slice(2, 4)}`);
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow up to 3 digits
    const value = e.target.value.replace(/\D/g, "");
    setCvv(value.slice(0, 3));
  };

  return (
    <div className="mb-[30px]">
      <h2 className="text-lg mb-5">Credit card information</h2>
      <div className="flex gap-5 mb-5 max-sm:flex-col max-sm:gap-2.5">
        <input
          type="text"
          placeholder="4860 5432 8744 3789"
          className="border rounded text-base w-full p-3 border-solid border-[#ccc]"
          value={cardNumber}
          onChange={handleCardNumberChange}
          maxLength={19} // 16 digits + 3 spaces
        />
        <div className="flex flex-col gap-2.5">
          <input
            type="text"
            placeholder="MM/YY"
            className="border rounded text-base w-full p-3 border-solid border-[#ccc]"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            maxLength={5} // MM/YY format
          />
          <input
            type="text"
            placeholder="CVV"
            className="border rounded text-base w-full p-3 border-solid border-[#ccc]"
            value={cvv}
            onChange={handleCvvChange}
            maxLength={3}
          />
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
