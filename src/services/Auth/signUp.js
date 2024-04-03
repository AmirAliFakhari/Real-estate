import supabase from "../supabase";

export default async function signUp({ password, firstname, lastname, email, phone }) {
    let { data, error } = await supabase.auth.signUp({
        password: password,
        email: email,
        phone: "123",
        options: {
            data: {
                firstname,
                lastname,
                phone
            }

        }
    })

    if (error) throw new Error(error)

    return data;

}