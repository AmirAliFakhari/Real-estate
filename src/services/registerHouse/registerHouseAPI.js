import supabase from "../supabase";

export default async function registerHouseAPI({ userData, ...d }) {
    // console.log(d)
    const { data, error } = await supabase
        .from('registerHouse')
        .insert([
            { userData, ...d },
        ])
        .select();

    if (error) {
        console.error(error);
        throw new Error(" could not be loaded");
    }

    return data;
}
