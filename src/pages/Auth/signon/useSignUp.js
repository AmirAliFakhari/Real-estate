import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import signUp from "../../../services/Auth/signUp";
import { useDispatch } from "react-redux";
import { isAuthendticated, userEmail } from "../authSlice";

export default function useSignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {
        mutate: singUpUser,
        data,
        isPending
    } = useMutation({
        mutationFn: (password, firstname, lastname, email) => signUp(password, firstname, lastname, email),

        onSuccess: (data) => {
            console.log(data)
            toast.success("ثبت نام شدی سید")
            localStorage.setItem("id", data.user.id)
            dispatch(userEmail(data.user.email))
            dispatch(isAuthendticated(data.user.role))
            navigate("/")
        }
        ,
        onError: (err) => {
            console.log(err)
            toast.error("ثبت نام نشدی سید")
        }
    });

    return { singUpUser, data, isPending };
}
