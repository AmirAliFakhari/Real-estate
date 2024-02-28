import supabase from "../services/supabase"

export default async function cartInfo() {
    const { data, error } = await supabase.from("infoCart").select("*");

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }

    return data;
}



