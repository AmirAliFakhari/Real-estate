import { useQuery } from "@tanstack/react-query";
import login from "../../services/Auth/login";

export default function useLogin() {

    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryFn: () => login(),
    });

    return { isLoading, error, data };
}
