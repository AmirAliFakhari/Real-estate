// import { useDispatch } from "react-redux";
import supabase from "../supabase";

export default async function getUser() {
    // const dispatch = useDispatch()

    const { data: { user } } = await supabase.auth.getUser()
    console.log(user)

    return user;

}