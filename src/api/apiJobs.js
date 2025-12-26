import supabaseClient from "@supabase/supabase-js";

export async function getJobs(token, {location, company_id, searchQuery }) {
    const supabase = await supabaseClient(token);

    let query = supabase.from("jobs").select("*");

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