import supabase from "../supabase";

export default async function login({ password, email }) {

    const { data, error } = await supabase.auth.updateUser({
        password: password,
        email: email
    })

    if (error) throw new Error("there is a error!")

    return data;

}