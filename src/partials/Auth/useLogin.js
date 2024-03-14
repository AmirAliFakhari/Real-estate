import { useMutation } from "@tanstack/react-query";
import login from "../../services/Auth/login";

export default function useLogin() {

    const {
        mutate: singIn,
        isPending,
        data
    } = useMutation({
        mutationFn: (password, email) => login(password, email),
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (err) => {
            console.log(err)
        }
    });

    return { singIn, data, isPending };
}
