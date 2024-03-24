import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import getUser from "./getUser";

export default function useGetUser() {
    const {
        mutate: getUserInfo,
        data,
        isPending,
        isSuccess
    } = useMutation({
        mutationFn: () => getUser(),

        onSuccess: () => {
            toast.success("اطلاعات گرفته شد")
        }
        ,
        onError: (err) => {
            console.log(err)
            toast.error("گرفته نشد")
        }
    });

    return { getUserInfo, data, isPending, isSuccess };
}
