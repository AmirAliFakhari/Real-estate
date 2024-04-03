import getUser from "../Auth/getUser";
import supabase from "../supabase";

export default async function myAddAPI() {
    const user = await getUser()
    const userID = user.id
    const { data, error } = await supabase
        .from('registerHouse')
        .select()
        .eq("userID", userID)

    if (error) {
        console.error(error);
        throw new Error(" could not be loaded");
    }

    return data;
}