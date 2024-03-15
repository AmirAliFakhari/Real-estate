import supabase from "../supabase";

export default async function getUser({ userd }) {

    const { data: { user } } = await supabase.auth.getUser(localStorage.getItem(userd))

    return user;

}