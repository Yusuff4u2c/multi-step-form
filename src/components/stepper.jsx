/* eslint-disable react/prop-types */
const Stepper = ({ stepIndex, currentStep, title }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="">
        <div
          className={`h-10 w-10 flex justify-center items-center border-2 rounded-full ${
            currentStep === stepIndex ? "bg-[#bfe2fd]" : "bg-transparent"
          }`}
        >
          {stepIndex}
        </div>
      </div>
      <div className="hidden lg:block">
        <h1 className="text-xs text-white/60">STEP {stepIndex}</h1>
        <h1 className="text-sm font-bold text-[#fafbff] uppercase">{title}</h1>
      </div>
    </div>
  );
};

export default Stepper;
