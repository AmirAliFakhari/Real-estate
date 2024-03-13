import { useQuery } from "@tanstack/react-query";
import lastNewsAPI from "../../services/news/newsAPI";

export default function useNews() {

    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["news"],
        queryFn: () => lastNewsAPI(),
    });

    return { isLoading, error, data };
}
