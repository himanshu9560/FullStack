// import { getSupabaseClient } from "../utils/supabase";
import { createClient } from "@supabase/supabase-js";

export async function getJobs(token, {location, company_id, searchQuery }) {
    const supabase = await getSupabaseClient(token);

    let query = supabase
    .from("jobs")
    .select("*, comapny:companies(name, logo_url), saved: saved_jobs(id)");

    if(location) {
        query = query.eq("location", location);
    } 

     if(company_id) {
        query = query.eq("company_id", company_id);
    } 

     if(searchQuery) {
        query = query.elike("title", `%${searchQuery}%`);
    } 


    const { data, error } = await query;
    
    if (error){
        console.error("Error Fetching Jobs", error);
        return null;
    }
}

export async function saveJob(token, {alreadySaved }, saveData) {
    const supabase = await getSupabaseClient(token);

    if(alreadySaved){
         const { data, error:deleteError } = await supabase
            .from("saved_jobs")
            .delete()
            .eq("job_id", saveData.job_id);
               if (deleteError){
                 console.error("Error Deleting Saved Job", deleteError);
                return null;
    }
    return data;
    }else{
          const { data, error:inserError } = await supabase
            .from("saved_jobs")
            .insert([saveData])
            .select()
             if (inserError){
        console.error("Error Fetching Jobs", inserError);
        return null;
    }
    return data
    }
}

export async function getSingleJob(token, {job_id}) {
      const supabase = await getSupabaseClient(token);

         const { data, error } = await supabase
            .from("jobs")
            .select("*, comapny:companies(name, logo_url, applications: applications(*)")
            .eq("id", job_id)
            .single()

               if (error){
                 console.error("Error Fetching Job", error);
                return null;
    }
    return data
}

export async function updateHiringStatus(token, {job_id}, isOpen) {
      const supabase = await getSupabaseClient(token);

         const { data, error } = await supabase
            .from("jobs")
            .update({isOpen})
            .eq("id", job_id)
            .select()

               if (error){
                 console.error("Error Updating Job", error);
                return null;
    }
    return data
}



    export async function addNewJob(token, _, jobData) {
      const supabase = await getSupabaseClient(token);

         const { data, error } = await supabase
            .from("jobs")
            .insert([jobData])
            .select()

               if (error){
                 console.error("Error Creating Job", error);
                return null;
    }
    return data
}


export async function getMyJob(token, { recruiter_id }) {
      const supabase = await getSupabaseClient(token);

         const { data, error } = await supabase
            .from("jobs")
            .select("*, company:companies(name, logo_url)")
            .eq("recruiter_id", recruiter_id);

               if (error){
                 console.error("Error Fetching Jobs:", error);
                return null;
    }
    return data
}
export async function deleteJob(token, { job_id }) {
      const supabase = await getSupabaseClient(token);

         const { data, error } = await supabase
            .from("jobs")
            .delete()
            .eq("id", job_id)
            select();

               if (error){
                 console.error("Error Deleting Job:", error);
                return null;
    }
    return data
}