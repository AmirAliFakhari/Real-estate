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

        onSuccess: (data) => {
            // console.log(data)
            toast.success("اطلاعات گرفته شد")
            localStorage.setItem("data", JSON.stringify(data))
        }
        ,
        onError: (err) => {
            console.log(err)
            toast.error("گرفته نشد")
        }
    });

    return { getUserInfo, data, isPending, isSuccess };
}
