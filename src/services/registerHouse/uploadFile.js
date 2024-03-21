import supabase from "../supabase";

export default async function uploadFile({ pictures }) {
    console.log(pictures)
    const { data, error } = await supabase
        .storage
        .from('apartments')
        .upload('registerHouse.png', pictures[0], {
            cacheControl: '3600',
        })

    if (error) {
        console.error(error);
        throw new Error(" could not be loaded");
    }

    return data;
}
