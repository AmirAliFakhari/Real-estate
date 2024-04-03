import supabase from "../supabase";

export default async function houseRealtor({ image_id }) {
    const { data, error } = await supabase
        .from('registerHouse')
        .select()
        .eq("image_id", image_id)

    if (error) {
        console.error(error);
        throw new Error(" could not be loaded");
    }

    return data;
}


export async function houseRealtorImg({ userID }) {
    console.log(userID)
    const { data, error } = await supabase
        .from('userAvatar')
        .select()
        .eq("userID", userID)

    if (error) {
        console.error(error);
        throw new Error(" could not be loaded");
    }

    return data[0].avatar;
}