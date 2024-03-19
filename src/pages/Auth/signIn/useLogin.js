import { useMutation } from "@tanstack/react-query";
import login from "../../../services/Auth/login";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import useGetUser from "../../../services/Auth/useGetUser";
import { useDispatch } from "react-redux";

export default function useLogin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        mutate: singIn,
        data,
        isPending
    } = useMutation({
        mutationFn: (password, email) => login(password, email),

        onSuccess: (data) => {
            console.log(data)
            localStorage.setItem("username", data.user.user_metadata.firstname)
            toast.success("درست زدي سيد")
            navigate("/")
        }
        ,
        onError: () => {
            toast.error("اشتب زدی سید")
        }
    });

    return { singIn, data, isPending };
}
