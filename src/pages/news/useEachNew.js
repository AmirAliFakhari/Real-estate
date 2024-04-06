import { useQuery } from "@tanstack/react-query";
import { eachNewsAPI } from "../../services/news/newsAPI";

export default function useEachNews({ idNews }) {

    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["EachNews"],
        queryFn: () => eachNewsAPI({ idNews }),
    });

    return { isLoading, error, data };
}
