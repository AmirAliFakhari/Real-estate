import supabase from "../supabase";

export default async function login(password, email) {
    const { data } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    console.log(data)

    return data;

}