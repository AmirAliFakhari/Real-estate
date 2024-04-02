// import { useDispatch } from "react-redux";
import supabase from "../supabase";

export default async function getUser() {
    // const dispatch = useDispatch()

    const { data: { user } } = await supabase.auth.getUser()
    localStorage.setItem("userEmail", user.email)
    localStorage.setItem("userFirstname", user.user_metadata.firstname)
    localStorage.setItem("userLastname", user.user_metadata.lastname)
    localStorage.setItem("userPhone", user.phone)
    // console.log
    console.log(user)

    return user;

}

