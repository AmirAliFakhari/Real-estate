import { useQuery } from "@tanstack/react-query";
import houseAPI from "../../services/houseAPI/houseAPI";

export default function useHouse() {
    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["house"],
        queryFn: () => houseAPI(),
    });

    return { isLoading, error, data };
}
