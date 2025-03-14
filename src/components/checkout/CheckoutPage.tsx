import React from "react";
import PromoBar from "./PromoBar";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

const CheckoutPage: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <PromoBar />
      <Header />
      <main className="max-w-[1200px] mx-auto my-10 px-5 py-0">
        <Breadcrumb />
        <h1 className="text-[40px] text-[rgba(36,36,36,0.95)] mb-10">
          Checkout
        </h1>
        <div className="flex gap-10 max-md:flex-col">
          <CheckoutForm />
          <OrderSummary />
        </div>
      </main>
    </>
  );
};

export default CheckoutPage;
