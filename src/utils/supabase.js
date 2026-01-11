// import { getSupabaseClient } from "../utils/supabase";
import { createClient } from "@supabase/supabase-js";


export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey =
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

    export const getSupabaseClient = (clerkToken) => {
  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        Authorization: `Bearer ${clerkToken}`,
      },
    },
  });
};
export default createClient;


// import { createClient } from '@supabase/supabase-js';

// export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

// const getSupabaseClient = async(supabaseAccessToken)=>{
//     const supabase = createClient(supabaseUrl, supabaseKey,{
//         global:{
//             headers:{
//                 Authorization:`Bearer ${supabaseAccessToken}`,
//             },
//         },
//     });
//     return supabase;
// };

// export default createClient;
        