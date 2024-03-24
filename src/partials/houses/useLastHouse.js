import { useQuery } from "@tanstack/react-query";
import houseAPI from "../../services/houseAPI/houseAPI";

export default function useLastHouse() {
    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["last-house"],
        queryFn: () => houseAPI(),
    });

    return { isLoading, error, data };
}
