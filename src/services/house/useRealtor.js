import { useQuery } from "@tanstack/react-query";
import houseRealtor, { houseRealtorAdds, houseRealtorImg } from "./houseRealtor";

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



export function useRealtorAdds({ userID }) {

    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["realtorAdds", userID],
        queryFn: () => houseRealtorAdds({ userID }),
    });
    return { isLoading, error, data };
}




