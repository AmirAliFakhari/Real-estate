import { useQuery } from "@tanstack/react-query";
import { getRelatedNewsAPI } from "../../services/news/newsAPI";

export default function useRelatedSNews(type) {

    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["relatedNews"],
        queryFn: () => getRelatedNewsAPI(type),
    });

    return { isLoading, error, data };
}
