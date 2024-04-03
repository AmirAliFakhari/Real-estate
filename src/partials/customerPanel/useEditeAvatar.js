import { useQuery } from "@tanstack/react-query";
import getAvatarURL from "../../services/Auth/uploadAvatarUrl";

export default function useEditeAvatar() {

    const {
        isLoading,
        data,
        error,
    } = useQuery({
        queryKey: ["avatar"],
        queryFn: () => getAvatarURL(),
    });

    return { isLoading, error, data };
}
