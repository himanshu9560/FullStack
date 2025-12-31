import { StrictMode } from 'react'
import React from "react";
  import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import './index.css'
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App.jsx";
  import { shadesOfPurple } from '@clerk/themes'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
    appearance={{
      baseTheme:shadesOfPurple,
    }}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
);


// import { StrictMode } from 'react'
//   import { createRoot } from 'react-dom/client'
//   import './index.css'
//   import App from './App.jsx'
//   import { ClerkProvider } from '@clerk/clerk-react'
//   import { shadesOfPurple } from '@clerk/themes'

//   // Import your Publishable Key
//   const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

//   if (!PUBLISHABLE_KEY) {
//     throw new Error('Add your Clerk Publishable Key to the .env file')
//   }

//   createRoot(document.getElementById('root')).render(
//     <StrictMode>
//       <ClerkProvider 
//       appearance={{
//          baseTheme:shadesOfPurple,
//       }}
//       publishableKey={PUBLISHABLE_KEY}>
//         <App />
//       </ClerkProvider>
//     </StrictMode>,
//   )