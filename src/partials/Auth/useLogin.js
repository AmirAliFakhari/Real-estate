import { useMutation } from "@tanstack/react-query";
import login from "../../services/Auth/login";
import Toast from "../../features/Toast";

export default function useLogin() {

    const {
        mutate: singIn,
        isPending,
        data
    } = useMutation({
        mutationFn: (password, email) => login(password, email),
        onSuccess: (data) => (<Toast />),
        onError: (err) => {
            console.log(err)
        }
    });

    return { singIn, data, isPending };
}
