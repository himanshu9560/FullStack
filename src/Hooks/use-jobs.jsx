import { useAuth } from "@clerk/clerk-react";
import { getJobs } from "../api/apiJobs";

export function useJobs() {
  const { getToken } = useAuth();

  const fetchJobs = async (filters) => {
    const token = await getToken({ template: "supabase" });
    return await getJobs(token, filters);
  };

  return { fetchJobs };
}
