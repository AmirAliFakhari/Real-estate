import supabase from "../supabase";

export default async function signUp({ password, firstname, lastname, email, phone }) {
    console.log(phone)
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
    console.log(data)

    if (error) throw new Error(error)

    return data;

}