import { useUser } from '@clerk/clerk-react'
import  { useEffect } from 'react'
import useFetch from '../Hooks/use-fetch';
import { BarLoader } from 'react-spinners';
import JobCard from './job-card';
import { getMyJob } from '../api/apiJobs';

const CreatedJobs = () => {
    const { user } = useUser ();

    const {
    loading: loadingCreatedJobs,
    data: createdJobs,
    fn: fnCreatedJobs,
  } = useFetch(
  async () => {
    const token = await getToken({ template: "supabase" });
    return getMyJob(token, { recruiter_id: user.id });
  }
);

  useEffect(() =>{
    fnCreatedJobs();
  },[])

   if(loadingCreatedJobs ) {
  return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
}

  return ( 
  <div>
    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {createdJobs?.length ? (
          createdJobs.map((job) => {
            return ( 
                  <JobCard 
                    key={job.id}
                    job={job} 
                    onJobSaved={fn}
                    isMyJob
                  />
                 )
          })
        ) :(
          <div>No Jobs found </div>
        )
      }
      </div>
  </div>

  )
    

}

export default CreatedJobs
