import thanks from "./assets/images/icon-thank-you.svg";
const ThankYou = () => {
  return (
    <div className="flex h-full flex-col gap-6 items-center justify-center">
      <img className="w-20" src={thanks} alt="thank you icon" />
      <h1 className="font-bold text-[#02295a] text-3xl">Thank you!</h1>
      <p className="text-[#9699ab] text-lg text-center">
        Thanks for confirming your subscripton! We hope you have fun using our
        platform. If you need support, please feel free to email us at
        support@yusuffgaming.com{" "}
      </p>
    </div>
  );
};

export default ThankYou;
