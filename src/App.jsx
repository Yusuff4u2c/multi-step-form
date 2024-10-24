import { useEffect, useRef, useState } from "react";
import "./App.css";
import Stepone from "./step-one";
import Steptwo from "./step-two";
import Stepthree from "./step-three";
import Stepper from "./components/stepper";
import StepFour from "./step-four";
import ThankYouPage from "./thank-you";
import * as Yup from "yup";
import RegisterContext from "./contexts/RegisterContext";
import { FaSpinner } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

const personalInfoSchema = Yup.object().shape({
  full_name: Yup.string().min(5, "not long enough").required(),
  email: Yup.string().email().required(),
  phonenumber: Yup.string().min(11).required(),
});

function App() {
  const totalSteps = 4;
  const [currentStep, setCurrentStep] = useState(1);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [loading, setLoading] = useState(false);

  // validation
  const [validationErrors, setValidationErrors] = useState({});
  // step 1
  const fullName = useRef(null);
  const email = useRef(null);
  const phonenumber = useRef(null);
  // step 2
  const [selectedPlan, setSelectedPlan] = useState();
  const [isYearly, setIsYearly] = useState(false);
  // step 3
  const [selectedAddons, setSelectedAddons] = useState([]);

  const sendInfoToBackend = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const value = Math.random();
        value < 0.5
          ? resolve("Successful")
          : reject(
              "Could not connect to the backend service. Please try again"
            );
      }, 5000); // 5000 milliseconds = 5 seconds
    });
  };

  async function handleNext() {
    // we should validate the data for the current step first
    // if there is no error, we can proceed to the next step

    if (currentStep === 1) {
      try {
        await personalInfoSchema.validate(
          {
            full_name: fullName.current.value,
            email: email.current.value,
            phonenumber: phonenumber.current.value,
          },
          {
            abortEarly: false,
          }
        );
        setValidationErrors(undefined);
      } catch (error) {
        console.log("error:", error);

        const validationErrors = {};
        error.inner.forEach((validationError) => {
          validationErrors[validationError.path] = validationError.message;
        });
        setValidationErrors(validationErrors);
        return;
      }
    } else if (currentStep === 2) {
      if (!selectedPlan) {
        setValidationErrors({ selectedPlan: "You must select a plan" });
        return;
      } else setValidationErrors(undefined);
    } else if (currentStep === 3) {
      // needs no validation
      // all states here are optional
    } else if (currentStep === 4) {
      // not doing any validation
      // its just for confirmation
    }

    if (currentStep === totalSteps) {
      setLoading(true);
      // sending request to server
      try {
        await sendInfoToBackend();
        setRegistrationComplete(true);
        toast.success("Registration complete");
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
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

  function gotoStep(step) {
    if (step > currentStep) return;

    setCurrentStep(step);
  }

  useEffect(() => {
    console.log("fullname is changing...", fullName);
  }, [fullName]);

  return (
    <RegisterContext.Provider
      value={{
        validationErrors,
        selectedPlan,
        isYearly,
        selectedAddons,
        registrationComplete,
        setSelectedPlan,
        setIsYearly,
        setSelectedAddons,
        setRegistrationComplete,
        gotoStep,
      }}
    >
      <div className="bg-[#bfe2fd] flex justify-center items-center py-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start bg-[aliceblue] lg:bg-white gap-0 lg:gap-10 w-full lg:w-[85%] xl:w-[65%] max-w-5xl rounded-xl h-screen lg:h-[550px] py-0 lg:py-4 lg:px-4">
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
          <div className="flex flex-col lg:bg-transparents h-fit lg:h-full lg:mr-20 w-[90%] rounded-xl px-6 lg:px-0 py-10 lg:py-0 lg:pt-0 -mt-12 lg:mt-0 z-10 lg:w-4/6 bg-white shadow-xl lg:shadow-none">
            {!registrationComplete ? (
              <>
                <div className="flex-grow">
                  {currentStep === 1 && (
                    <Stepone ref={{ fullName, email, phonenumber }} />
                  )}
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
                    className={`mt-10 p-4 rounded-lg text-white sm-float-right font-bold flex gap-4 ${
                      currentStep === 4
                        ? "bg-[#473dff] disabled:bg-[#473dff]/40"
                        : "bg-[#02295a] disabled:bg-[#02295a]/40"
                    } disabled:cursor-not-allowed cursor-pointer`}
                    type="submit"
                    disabled={loading}
                    onClick={() => {
                      handleNext();
                    }}
                  >
                    {loading && <FaSpinner className="w-6 h-6 animate-spin" />}
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
                {/* <FaSpinner className="w-6 h-6" /> */}
                {currentStep === 4 ? "Confirm" : "Next Step"}
              </button>
            </div>
          )}
        </div>
        <Toaster />
      </div>
    </RegisterContext.Provider>
  );
}

export default App;
