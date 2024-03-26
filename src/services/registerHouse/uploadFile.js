import supabase from "../supabase";

export default async function uploadFile(image_id2, picture) {
    const { data, error } = await supabase
        .storage
        .from('apartments')
        .upload(`${image_id2}-registerHouse.png`, picture)

    if (error) {
        throw new Error(" could not be loaded");
    }

    return data;
}

