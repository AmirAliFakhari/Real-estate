import { useMutation } from "@tanstack/react-query";
import login from "../../../services/Auth/login";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
    const navigate = useNavigate()
    const {
        mutate: singIn,
        data,
        isPending
    } = useMutation({
        mutationFn: (password, email) => login(password, email),

        onSuccess: (data) => {
            toast.success("درست زدي سيد")
            localStorage.setItem("id", data.user.id)
            navigate("/")
        }
        ,
        onError: (err) => {
            toast.error("اشتب زدی سید")
        }
    });

    return { singIn, data, isPending };
}
