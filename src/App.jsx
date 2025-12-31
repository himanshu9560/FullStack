import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from "./components/theme-provider"
import './App.css'
import AppLayout from"./Layout/app-layout"
import LandingPage from"./Pages/landing"
import Onboarding from"./Pages/onboarding"
import JobListing from"./Pages/job-listing"
import JobPages from"./Pages/job"
import PostJob from"./Pages/post-job"
import SavedJob from"./Pages/saved-job"
import MyJob from"./Pages/my-job"
import ProtectedRoute from './components/protected-route';
// import { Button } from "./components/ui/button";
// import MyJob from './Pages/my-job';
const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<LandingPage />
      },
      {
        path:'/onboarding',
        element:(
        <ProtectedRoute>
        <Onboarding />
        </ProtectedRoute>
        ),
      },
      {
        path:'/job-listing',
        element:(
        <ProtectedRoute>
        <JobListing />
        </ProtectedRoute>
        ),
      },
      {
        path:"/job",
        element:(
        <ProtectedRoute>
        <JobPages />
        </ProtectedRoute>
        ),
      },
      {
        path:'/post-job',
        element:(
        <ProtectedRoute>
        <PostJob />
        </ProtectedRoute>
        ),
      },
        {
        path:'/saved-job',
        element:(
        <ProtectedRoute>
        <SavedJob />
        </ProtectedRoute>
        ),
      },
        {
        path:'/my-job',             
        element:(
        <ProtectedRoute>
        <MyJob />
        </ProtectedRoute>
        ),
      },
    ]
  }
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
