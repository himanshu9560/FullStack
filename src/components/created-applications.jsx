import { useUser } from '@clerk/clerk-react'
import useFetch from '../Hooks/use-fetch';
import { getApplications } from '../api/apiApplications';
import { useEffect } from 'react';
import ApplicationCard from './application-card';
import { BarLoader } from 'react-spinners';

const CreatedApplications = () => {

    const { user } =useUser();

    const {
    loading: loadingApplications,
    data: applications,
    fn: fnApplications,
  } = useFetch(getApplications, {
    user_id: user.id,
  });

  useEffect(() => {
    fnApplications();
  },[]);

  if(loadingApplications ) {
  return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
}

  return (
    <div className='flex flex-col gap-2'>
         {applications.map(() =>{
          return (
          <ApplicationCard key={application.id} application={application} isCandidate />
        )
         })}
    </div>
  )
}

export default CreatedApplications
