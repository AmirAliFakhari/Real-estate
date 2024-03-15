import supabase from "../supabase";

export default async function login({ password, email }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,

    })
    console.log(data.raw_user_meta_data)
    if (error) throw new Error("there is a error!")

    return data;

}