import { useQuery } from "@tanstack/react-query";
import cartInfo from "../../services/cartInfoApi";

export default function useBooking() {

    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["infoCart"],
        queryFn: cartInfo,
    });

    return { isLoading, error, data };
}
