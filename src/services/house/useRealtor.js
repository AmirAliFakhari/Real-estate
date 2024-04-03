import { useQuery } from "@tanstack/react-query";
import houseRealtor, { houseRealtorImg } from "./houseRealtor";

export default function useRealtor({ image_id }) {
    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["realtor", image_id],
        queryFn: () => houseRealtor({ image_id }),
    });

    return { isLoading, error, data };
}


export function useRealtorImg({ userID }) {

    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["realtorImg", userID],
        queryFn: () => houseRealtorImg({ userID }),
    });
    return { isLoading, error, data };
}




