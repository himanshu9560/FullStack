// import { createClient } from "@supabase/supabase-js";

// export const createSupabaseClient = (token) => {
//   return createClient(
//     import.meta.env.VITE_SUPABASE_URL,
//     import.meta.env.VITE_SUPABASE_ANON_KEY,
//     {
//       global: {
//         headers: {
//           Authorization: token ? `Bearer ${token}` : "",
//         },
//       },
//     }
//   );
// };



import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

const getSupabaseClient = async(clerkJwt)=>{
    const supabase = createClient(supabaseUrl, supabaseKey,{
        global:{
            headers:{
                Authorization:`Bearer ${clerkJwt}`,
            },
        },
    });
    return supabase;
};

export default supabaseClient;
        