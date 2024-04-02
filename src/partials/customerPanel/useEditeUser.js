import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import updateUser from "../../services/Auth/updateUser";

export default function useEditeUser() {

    const {
        mutate: editeUpUser,
        data,
        isPending
    } = useMutation({
        mutationFn: (password, firstname, lastname, phone) => updateUser(password, firstname, lastname, phone),

        onSuccess: () => {
            toast.success("اطلاعات ویرایش شد")
        }
        ,
        onError: (err) => {
            console.log(err)
            toast.error("اطلاعات ویرایش نشد")
        }
    });

    return { editeUpUser, data, isPending };
}
