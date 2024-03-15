import { useMutation } from "@tanstack/react-query";
import login from "../../../services/Auth/login";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useGetUser from "../../../services/Auth/useGetUser";
import { useDispatch } from "react-redux";
import { isAuthendticated, userEmail } from "../authSlice";

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
            toast.success("درست زدي سيد")
            navigate("/")
            dispatch(userEmail(data.user.email))
            dispatch(isAuthendticated(data.user.role))


        }
        ,
        onError: () => {
            toast.error("اشتب زدی سید")
        }
    });

    return { singIn, data, isPending };
}
