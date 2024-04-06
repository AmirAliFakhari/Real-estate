import { useQuery } from "@tanstack/react-query";
import { selectTypeNews } from "../../services/news/newsAPI";

export default function useTypeNews() {

    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["typeNews"],
        queryFn: () => selectTypeNews(),
    });

    return { isLoading, error, data };
}
