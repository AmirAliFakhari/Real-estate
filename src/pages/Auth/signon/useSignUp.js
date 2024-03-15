import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userData } from "../authSlice";
import signUp from "../../../services/Auth/signUp";

export default function useSignUp() {
    const navigate = useNavigate()
    const {
        mutate: singUpUser,
        data,
        isPending
    } = useMutation({
        mutationFn: (password, firstname, lastname, email) => signUp(password, firstname, lastname, email),

        onSuccess: (data) => {
            toast.success("ثبت نام شدی سید")
            localStorage.setItem("id", data.user.id)
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
