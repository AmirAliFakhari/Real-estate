import supabase from "../supabase";

export default async function login({ password, email }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    if (error) throw new Error("there is a error!")

    return data;

}