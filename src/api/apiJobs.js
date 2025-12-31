import { createClient } from '@supabase/supabase-js'
// import getSupabaseClient from "../utils/supabase.js"

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
                 console.error("Error Deleting Saved Job", error);
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