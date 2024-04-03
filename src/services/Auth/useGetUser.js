import { useQuery } from "@tanstack/react-query";
import getUser from "./getUser";

export default function useGetUser() {

    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["userData"],
        queryFn: () => getUser(),
    });

    return { isLoading, error, data };
}
