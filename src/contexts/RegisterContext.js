import { createContext } from "react";

const RegisterContext = createContext({});
export default RegisterContext;

// Step 1. Create a context
// Step 2. Wrap your rooot component with RegisterContext.Provider
// Step 3. Get value from your context with useContext hook