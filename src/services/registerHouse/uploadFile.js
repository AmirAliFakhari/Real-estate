import supabase from "../supabase";

export default async function uploadFile({ pictures }) {
    console.log(pictures)
    let random = Math.random()
    console.log(random)
    const { data, error } = await supabase
        .storage
        .from('apartments')
        .upload(`${random}-registerHouse.png`, pictures[0], {
            cacheControl: '3600',
            upsert: true
        })

    if (error) {
        console.error(error);
        throw new Error(" could not be loaded");
    }

    return data;
}
