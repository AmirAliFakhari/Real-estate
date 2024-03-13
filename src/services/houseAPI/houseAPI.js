import supabase from "../supabase";

export default async function lastHouseAPI() {
    const { data, error } = await supabase.from("houses").select("*").limit(4).order('id', { ascending: false })


        ;

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }

    return data;
}



