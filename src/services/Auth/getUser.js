import supabase from "../supabase";

export default async function getUser() {
    // const dispatch = useDispatch()

    const { data: { user } } = await supabase.auth.getUser()
    localStorage.setItem("userEmail", user.email)
    localStorage.setItem("userFirstname", user.user_metadata.firstname)
    localStorage.setItem("userLastname", user.user_metadata.lastname)
    localStorage.setItem("userPhone", user.user_metadata.phone)
    localStorage.setItem("userID", user.id)

    return user;

}

