import supabase from "../supabase";

export default async function houseAPI() {
    const { data, error } = await supabase.from("houses").select("*");

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }

    return data;
}



