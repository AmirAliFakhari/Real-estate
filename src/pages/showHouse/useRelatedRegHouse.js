import { useQuery } from "@tanstack/react-query";
import { getRelatedRegisterHouseAPI } from "../../services/registerHouse/registerHouseAPI";

export default function useRelatedRegHouse(rent, state, city, area) {

    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["RelatedHouse", rent, state, city, area],
        queryFn: () => getRelatedRegisterHouseAPI(rent, state, city, area),
    });

    return { isLoading, error, data };
}
