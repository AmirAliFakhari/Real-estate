import { useQuery } from "@tanstack/react-query";
import lastNewsAPI from "../../services/news/newsAPI";

export default function useLastNews() {

    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["lastnews"],
        queryFn: () => lastNewsAPI(),
    });

    return { isLoading, error, data };
}
