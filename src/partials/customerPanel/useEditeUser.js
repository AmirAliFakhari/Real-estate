import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import updateUser from "../../services/Auth/updateUser";

export default function useEditeUser() {

    const {
        mutate: editeUpUser,
        data,
        isPending
    } = useMutation({
        mutationFn: (password, firstname, lastname, phone, avatar) => updateUser(password, firstname, lastname, phone, avatar),

        onSuccess: () => {
            toast.success("اطلاعات ویرایش شد")
        }
        ,
        onError: (err) => {
            toast.error(err.message)
        }
    });

    return { editeUpUser, data, isPending };
}
