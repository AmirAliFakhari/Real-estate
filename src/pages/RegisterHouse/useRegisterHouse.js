import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import registerHouseAPI from "../../services/registerHouse/registerHouseAPI";

export default function useRegisterHouse() {
    const navigate = useNavigate()
    const {
        mutate: regHouse,
        data,
        isPending
    } = useMutation({
        mutationFn: (transaction_type, morgage, rent, city, state, street, number_floors, floor, auxiliary_road, room, type_land, area) => registerHouseAPI(transaction_type, morgage, rent, city, state, street, number_floors, floor, auxiliary_road, room, type_land, area),

        onSuccess: (data) => {
            toast.success("ثبت شد آگهی شید")
            // console.log(data)
            // localStorage.setItem("id", data.user.id)
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
