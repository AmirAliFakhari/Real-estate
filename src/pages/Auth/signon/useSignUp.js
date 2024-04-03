import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import signUp from "../../../services/Auth/signUp";
import { userData, userRole } from "../authSlice";
import getUser from "../../../services/Auth/getUser";
import uploadAvatarUserID from "../../../services/Auth/uploadAvatarUrl";

export default function useSignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {
        mutate: singUpUser,
        data,
        isPending
    } = useMutation({
        mutationFn: (password, firstname, lastname, email, phone) => signUp(password, firstname, lastname, email, phone),

        onSuccess: async () => {
            async function someFunction() {
                try {
                    const userD = await getUser();

                    dispatch(userData(userD));
                    dispatch(userRole(userD.role));
                } catch (error) {
                    console.error("Not Authenticated", error);
                }
            }
            await someFunction()
            toast.success("ثبت نام شدی سید")
            // localStorage.setItem("id", data.user.id)
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
