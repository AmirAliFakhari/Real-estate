import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { insertNewsAPI } from "../../services/news/newsAPI";

export default function useInsertNews() {

    const {
        mutate: insertNew,
        data,
        isPending
    } = useMutation({
        mutationFn: (data, myuuidImg, myuuidPic) => insertNewsAPI(data, myuuidImg, myuuidPic),

        onSuccess: async () => {

            toast.success("درست زدي سيد")
        }
        ,
        onError: (err) => {
            toast.error("اشتب زدی سید")
            console.log(err)
        }
    });

    return { insertNew, data, isPending };
}
