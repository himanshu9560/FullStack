// import { getSupabaseClient } from "@utils/supabase";
import { createClient } from "@supabase/supabase-js";

export async function getCompanies(token) {
      const supabase = await getSupabaseClient(token);

         const { data, error } = await supabase
            .from("companies")
            .select("*")
               if (error){
                 console.error("Error Fetching Companies", error);
                return null;
    }
    return data
}