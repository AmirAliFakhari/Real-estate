import { useQuery } from "@tanstack/react-query";
import { filterRegHouse } from "./registerHouseAPI";

export default function useFilterRegHouse(selectedItems, rangeValue) {

    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["filter", selectedItems, rangeValue],
        queryFn: () => filterRegHouse(selectedItems, rangeValue),
    });

    return { isLoading, error, data };
}
