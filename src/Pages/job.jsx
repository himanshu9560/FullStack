import { useUser } from '@clerk/clerk-react'
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/use-fetch';
import { getSingleJob, updateHiringStatus } from '../api/apiJobs';
import { useEffect } from 'react';
import { Briefcase, DoorClosed, DoorOpen, MapPinIcon } from 'lucide-react';
import MDEditor from '@uiw/react-md-editor';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarLoader } from 'react-spinners';
import ApplyJobDrawer from '../components/apply-job';
import ApplicationCard from '../components/application-card';

const JobPage = () => {
  
  const { isLoaded, user } = useUser();
  const { id } = useParams();

  const {loading: loadingJob, data:job, fn:fnJob } = useFetch(getSingleJob, {
    job_id: id,
  });

  const {loading: loadingHiringStatus, fn: fnHiringStatus } = useFetch(updateHiringStatus, {
    job_id: id,
  })
  
  const handleStatusChange =(value)=> {
    const isOpen = value === "open";
    fnHiringStatus(isOpen).then(()=> fnJob());
  };

  useEffect(() => {
    if (isLoaded) fnJob();
  },[isLoaded]);

  if(!isLoaded || loadingJob){
  return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
}

  return (
    <div className='flex flex-col gap-8 mt-5'>
      <div className='flex flex-col-reverse gap-6 md:flex-row justify-between items-center'>
        <h1 className='bg-linear-to-br from-gray-500 via-gray-200 to-white gradient text-transparent bg-clip-text
        font-extrabold pb-3 text-4x1 sm:text-6x1'>
          {job?.title}
          <img src={job?.company?.logo_url} className='h-12' alt={job?.title} />
        </h1>
      </div>
      <div className='flex justify-between'>
          <div>
            <MapPinIcon />
            {job?.location}
          </div>
          <div className='flex gap-2'>
          <Briefcase />{job?.applications?.length}Applicants
          </div>
          <div className='flex gap-2'>
          {job?.isOpen?(
          <>
          <DoorOpen />Open
          </>
          ) : (
          <>
          <DoorClosed />Closed
          </>
          )}
          </div>
      </div>
      
      {/* Hiring status */}
      {loadingHiringStatus && <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />}
     
      {job?.recuiter_id === user?.id &&( 
      <Select onValueChange={handleStatusChange}>
      <SelectTrigger className={`w-full ${job?.isOpen ? "bg-green-950" : "bg-red-950"}`}>
        <SelectValue placeholder={"Hiring Status" + (job?.isOpen ? "( Open )": "( CLosed )" )} />
      </SelectTrigger>
      <SelectContent>
          <SelectItem value="open">Open</SelectItem>
          <SelectItem value="closed">Closed</SelectItem>
      </SelectContent>
    </Select>
  )}

          <h2 className='text-2x1 sm:text-2x1 font-bold'>About the Job</h2>
          <p className='sm:text-lg'>{job?.description}</p>
          
          <h2 className='text-2x1 sm:text-2x1 font-bold'>What we looking for</h2>
         
          <MDEditor.Markdown 
          source={job?.requirements}
          className='bg-transparent sm:text-lg'
          />
         
         
          {/* render applications */}
          {job?.recuiter_id !== user?.id &&( <ApplyJobDrawer 
          job={job} user={user} fetchJob={fnJob}
          applied={job?.applications?.find((ap) =>ap.candidate_id ===user.id)}
          />)}
          
      {job?.applications?.length > 0 && job?.recuiter_id === user?.id &&(
        <div className='flex flex-col gap-2'>
         <h2 className='text-2x1 sm:text-3x1 font-bold'>Applications</h2>
         {job?.applications.map(() =>{
          return (
          <ApplicationCard key={application.id} application={application} />
        )
         })}
        </div>
      )}
    </div>
  )
  



}

export default JobPage
