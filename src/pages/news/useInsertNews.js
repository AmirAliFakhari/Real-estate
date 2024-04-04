import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { insertNewsAPI } from "../../services/news/newsAPI";

export default function useInsertNews() {

    const {
        mutate: insertNew,
        data,
        isPending
    } = useMutation({
        mutationFn: (title, img, type, subtitle, created_at) => insertNewsAPI(title, img, type, subtitle, created_at),

        onSuccess: async () => {

            toast.success("درست زدي سيد")
        }
        ,
        onError: () => {
            toast.error("اشتب زدی سید")
        }
    });

    return { insertNew, data, isPending };
}
