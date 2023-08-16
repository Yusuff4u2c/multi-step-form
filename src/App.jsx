import { useState } from "react";
import "./App.css";
import Stepone from "./step-one";
import Steptwo from "./step-two";
import Stepthree from "./step-three";
import Stepper from "./components/stepper";
import StepFour from "./step-four";
import ThankYouPage from "./thank-you";

function App() {
  const totalSteps = 4;
  const [currentStep, setCurrentStep] = useState(1);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleNext() {
    if (currentStep === totalSteps) {
      setRegistrationComplete(true);
      return;
    }

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
    <div className="bg-[#bfe2fd] flex justify-center items-center h-screen">
      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white gap-10 w-full lg:w-[85%] xl:w-[65%] max-w-5xl rounded-xl h-screen lg:h-[600px] py-0 lg:py-4 lg:px-4">
        {/* left box */}
        <div className="h-[30%] lg:h-full w-full  lg:w-2/6 relative">
          {/* background image container */}
          <div className="w-full h-full lg:rounded-xl overflow-hidden">
            <img
              src="/src/assets/images/bg-sidebar-desktop.svg"
              className="hidden lg:block object-cover w-full h-full"
            />
            <img
              src="/src/assets/images/bg-sidebar-mobile.svg"
              className="object-cover w-full h-full lg:hidden"
            />
          </div>

          {/* steps wrapper */}
          <div className="flex lg:flex-col justify-center gap-6 p-8 absolute top-0 w-full">
            <Stepper
              stepIndex={1}
              currentStep={currentStep}
              title={"Your Info"}
            />
            <Stepper
              stepIndex={2}
              currentStep={currentStep}
              title={"Select Plan"}
            />
            <Stepper
              stepIndex={3}
              currentStep={currentStep}
              title={"Add-ons"}
            />
            <Stepper
              stepIndex={4}
              currentStep={currentStep}
              title={"Summary"}
            />
          </div>
        </div>

        {/* right box */}
        <div className="flex flex-col lg:bg-transparents h-fit lg:h-full lg:mr-20 w-[90%] rounded-xl px-6 lg:px-0 py-10 lg:py-0 lg:pt-0 -mt-28 lg:mt-0 z-10 lg:w-4/6 bg-white">
          {!registrationComplete ? (
            <>
              <div className="flex-grow">
                {currentStep === 1 && <Stepone />}
                {currentStep === 2 && <Steptwo />}
                {currentStep === 3 && <Stepthree />}
                {currentStep === 4 && <StepFour />}
              </div>

              <div className="lg:flex justify-between hidden">
                <button
                  className={`mt-10 p-4 rounded-lg text-[#9699ab] font-bold bg-white ${
                    currentStep === 1 ? "hidden" : ""
                  }`}
                  type="submit"
                  onClick={handleBack}
                >
                  Go Back
                </button>
                <button
                  className={`mt-10 p-4 rounded-lg text-white sm-float-right font-bold ${
                    currentStep === 4 ? "bg-[#473dff]" : "bg-[#02295a]"
                  }`}
                  type="submit"
                  onClick={handleNext}
                >
                  {currentStep === 4 ? "Confirm" : "Next Step"}
                </button>
              </div>
            </>
          ) : (
            <ThankYouPage />
          )}
        </div>

        <div className="w-full h-full flex flex-grow lg:hidden"></div>

        {!registrationComplete && (
          <div className="flex justify-between bg-white w-full py-4 px-6 lg:hidden">
            <button
              className={`p-4 rounded-lg text-[#9699ab] font-bold bg-white ${
                currentStep === 1 ? "hidden" : ""
              }`}
              type="submit"
              onClick={handleBack}
            >
              Go Back
            </button>
            <button
              className={`p-4 rounded-lg text-white ml-auto font-bold ${
                currentStep === 4 ? "bg-[#473dff]" : "bg-[#02295a]"
              }`}
              type="submit"
              onClick={handleNext}
            >
              {currentStep === 4 ? "Confirm" : "Next Step"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
