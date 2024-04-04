import { useQuery } from "@tanstack/react-query";
import { newsAPI } from "../../services/news/newsAPI";

export default function useSelectNews() {

    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["news"],
        queryFn: () => newsAPI(),
    });

    return { isLoading, error, data };
}
