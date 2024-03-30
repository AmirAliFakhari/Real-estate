import { useQuery } from "@tanstack/react-query";
import { filterRegHouse } from "./registerHouseAPI";

export default function useFilterRegHouse(selectedItems) {

    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["filter", selectedItems],
        queryFn: () => filterRegHouse(selectedItems),
    });

    return { isLoading, error, data };
}
