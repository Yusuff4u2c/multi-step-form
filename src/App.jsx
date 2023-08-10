import { useState } from "react";
import "./App.css";
import Stepone from "/src/step-one";
import Steptwo from "/src/step-two";
import Stepthree from "/src/step-three";

function App() {
  const totalSteps = 4;
  const [currentStep, setCurrentStep] = useState(1);
  const [isError, setIsError] = useState(false);

  function handleNext() {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  }

  function handleBack() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  return (
    <div className="bg-[#fafbff] flex justify-center items-center h-screen">
      <div className="flex bg-[#ffffff]items-center gap-10 w-[65%] max-w-7xl rounded-xl">
        <div className="m-4 bg-[url('/src/assets/images/bg-sidebar-desktop.svg')] h-[600px] bg-no-repeat w-1/4">
          <div className="imgwrapper flex flex-col gap-6 p-8">
            <div className="flex gap-2 items-center">
              <div className="">
                <div
                  className={`h-10 w-10 flex justify-center items-center border-2 rounded-full ${
                    currentStep === 1 ? "bg-[#bfe2fd]" : "bg-transparent"
                  }`}
                >
                  1
                </div>
              </div>
              <div>
                <h1 className="text-2x1">STEP 1</h1>
                <h1 className="text-lg font-bold text-[#fafbff]">YOUR INFO</h1>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="">
                <div
                  className={`h-10 w-10 flex justify-center items-center border-2 rounded-full ${
                    currentStep === 2 ? "bg-[#bfe2fd]" : "bg-transparent"
                  }`}
                >
                  2
                </div>
              </div>
              <div>
                <h1 className="text-2x1">STEP 2</h1>
                <h1 className="text-lg font-bold text-[#fafbff]">
                  SELECT PLAN
                </h1>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="">
                <div
                  className={`h-10 w-10 flex justify-center items-center border-2 rounded-full ${
                    currentStep === 3 ? "bg-[#bfe2fd]" : "bg-transparent"
                  }`}
                >
                  3
                </div>
              </div>
              <div>
                <h1 className="text-2x1">STEP 3</h1>
                <h1 className="text-lg font-bold text-[#fafbff]">ADD-ONS</h1>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="">
                <div
                  className={`h-10 w-10 flex justify-center items-center border-2 rounded-full ${
                    currentStep === 4 ? "bg-[#bfe2fd]" : "bg-transparent"
                  }`}
                >
                  4
                </div>
              </div>
              <div>
                <h1 className="text-2x1">STEP 4</h1>
                <h1 className="text-lg font-bold text-[#fafbff]">SUMMARY</h1>
              </div>
            </div>
          </div>
          <div>{currentStep}</div>
        </div>

        <div className="mr-20 w-3/4">
          {currentStep === 1 && <Stepone />}
          {currentStep === 2 && <Steptwo />}
          {currentStep === 3 && <Stepthree />}
          <button
            className={`float-left mt-10 p-4 rounded-lg text-[#9699ab] font-bold bg-white ${
              currentStep === 1 ? "hidden" : ""
            }`}
            type="submit"
            onClick={handleBack}
          >
            Go Back
          </button>
          <button
            className={`float-right mt-10 p-4 rounded-lg text-white font-bold bg-[#02295a] `}
            type="submit"
            onClick={handleNext}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
