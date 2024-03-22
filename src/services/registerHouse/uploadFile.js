import supabase from "../supabase";

export default async function uploadFile({ pictures }) {
    let random = Math.random()

    const { data, error } = await supabase
        .storage
        .from('apartments')
        .upload(`${random}-registerHouse.png`, pictures, {
            cacheControl: '3600',
        })

    if (error) {
        throw new Error(" could not be loaded");
    }

    return data;
}

