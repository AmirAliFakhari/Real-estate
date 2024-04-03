import supabase from "../supabase";

export default async function updateUser({ password, firstname, lastname, phone }) {

    const { data, error } = await supabase.auth.updateUser({
        password: password,

        data: {
            firstname,
            lastname,
            phone
        }
    })

    if (error) throw new Error(error)
    return data;

}