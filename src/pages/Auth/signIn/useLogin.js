import { useMutation } from "@tanstack/react-query";
import login from "../../../services/Auth/login";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import useGetUser from "../../../services/Auth/useGetUser";
import { useDispatch } from "react-redux";
import { userData, userRole } from "../authSlice";
import getUser from "../../../services/Auth/getUser";

export default function useLogin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        mutate: singIn,
        data,
        isPending
    } = useMutation({
        mutationFn: (password, email) => login(password, email),

        onSuccess: () => {
            // localStorage.setItem("username", data.user.user_metadata.firstname)
            async function someFunction() {
                try {
                    const userD = await getUser();
                    dispatch(userData(userD));
                    dispatch(userRole(userD.role));
                    navigate("/")
                } catch (error) {
                    console.error("Not Authenticated", error);
                }
            }
            someFunction()
            toast.success("درست زدي سيد")
        }
        ,
        onError: () => {
            toast.error("اشتب زدی سید")
        }
    });

    return { singIn, data, isPending };
}
