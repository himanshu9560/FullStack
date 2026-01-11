import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { BarLoader } from 'react-spinners';
import CreatedApplications from '../components/created-applications';
import CreatedJobs from '../components/created-jobs';

const MyJob = () => {
  const {user, isLoading } = useUser();
  if(isLoading) {
   return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
  }
  return (
  <div>
    <h1 className='bg-gradient-to-br from-gray-500 via-gray-200 to-white gradient text-transparent bg-clip-text text-5xl sm:text-7xl font-extrabold tracking-tight text-center pb-8'>
          {user?.unsafeMetadata?.role === "candidate"
          ? "My Applications"
          : "My Job"
          }
    </h1>
          {user?.unsafeMetadata?.role === "candidate" ? (
            <CreatedApplications />
          ) : (
            <CreatedJobs />
          )}
  </div>

  )
}

export default MyJob
