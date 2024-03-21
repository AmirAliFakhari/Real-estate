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
        mutationFn: (d, userData) => {
            console.log(d)
            registerHouseAPI(d, userData),
                console.log(d.pictures)
            uploadFile(d.pictures[0])
        },



        onSuccess: () => {
            toast.success("ثبت شد آگهی شید")
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