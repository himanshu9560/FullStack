import { getJobs } from "@/api/apiJobs";
import useFetch from "../Hooks/use-fetch";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";


const JobListing = () => {


  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");
  const { isLoaded } = useUser();


  const {
    fn: fnJobs, 
    data: dataJobs, 
    loading: loadingJobs 
  } = useFetch(getJobs, {
    location,
    company_id,
    searchQuery,
  });


  useEffect(() => {
    if (isLoaded) fnJobs();
  },[isLoaded, location, company_id, searchQuery]);

 if(!isLoaded){
  return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
}

  return (
  <div>
    <h1 className="bg-gradient-to-br from-gray-500 via-gray-200 to-white gradient text-transparent bg-clip-text font-extrabold text-6xl sm:text-7xl text-center pb-8">Latest Job</h1>
  </div>

  )
}

export default JobListing
