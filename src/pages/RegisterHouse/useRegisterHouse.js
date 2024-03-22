import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import registerHouseAPI from "../../services/registerHouse/registerHouseAPI";
import uploadFile from "../../services/registerHouse/uploadFile";

export default function useRegisterHouse() {
    const navigate = useNavigate()
    const {
        mutate: regHouse,
        data,
        isPending
    } = useMutation({
        mutationFn: async (d, userData) => {
            uploadFile(d.pictures[0])
            registerHouseAPI(d, userData)
        },
        onSuccess: () => {
            toast.success("آگهی ثبت شد سید")
            navigate("/")
        }
        ,
        onError: (err) => {
            console.log(err)
            toast.error("ثبت نشد آگهی سید ")
        }
    });

    return { regHouse, data, isPending };
}