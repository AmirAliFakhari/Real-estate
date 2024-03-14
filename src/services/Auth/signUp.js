import supabase from "../supabase";

export default async function signUp({ password, firstname, lastname, email }) {
    let { data, error } = await supabase.auth.signUp({
        password: password,
        email: email,
        options: {
            data: {
                firstname: firstname,
                lastname: lastname
            }
        }
    })

    if (error) throw new Error(error)

    return data;

}