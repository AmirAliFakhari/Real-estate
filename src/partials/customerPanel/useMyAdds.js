import { useQuery } from "@tanstack/react-query";
import myAddAPI from "../../services/registerHouse/myAddAPI";

export default function useMyAdds() {

    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["my-adds"],
        queryFn: () => myAddAPI(),
    });

    return { isLoading, error, data };
}
