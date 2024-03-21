import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import registerHouseAPI from "../../services/registerHouse/registerHouseAPI";
import { useSelector } from "react-redux";
import uploadFile from "../../services/registerHouse/uploadFile";

export default function useRegisterHouse() {
    const navigate = useNavigate()
    const {
        mutate: regHouse,
        data,
        isPending
    } = useMutation({
        mutationFn: (pictures, transaction_type, morgage, rent, city, state, street, number_floors, floor, auxiliary_road, room, type_land, area, userData) => {
            registerHouseAPI(transaction_type, morgage, rent, city, state, street, number_floors, floor, auxiliary_road, room, type_land, area, userData),
                uploadFile(pictures)
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
