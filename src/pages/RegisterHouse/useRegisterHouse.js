import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import registerHouseAPI, { getLastRegisterHouseAPI, getRegisterHouseAPI } from "../../services/registerHouse/registerHouseAPI";
import uploadFile from "../../services/registerHouse/uploadFile";

export default function useRegisterHouse() {
    const navigate = useNavigate();

    const {
        mutate: regHouse,
        data: regHouseData,
        isPending
    } = useMutation({
        mutationFn: async (d, userData) => {
            const uniqueId = generateUniqueId();
            uploadFile(uniqueId, d.picture[0]);
            registerHouseAPI({ ...d, userData, image_id2: uniqueId });
        },
        onSuccess: () => {
            toast.success("آگهی ثبت شد سید");
            navigate("/");
        },
        onError: (err) => {
            console.log(err);
            toast.error("ثبت نشد آگهی سید ");
        }
    });

    const { data: getRegData } = useQuery({
        queryKey: ["registerHouse"],
        queryFn: getRegisterHouseAPI
    });

    const { data: getLastRegData, isLoading: lastRegLoading } = useQuery({
        queryKey: ["LastRegisterHouse"],
        queryFn: getLastRegisterHouseAPI
    });

    return { regHouse, regHouseData, isPending, getRegData, getLastRegData, lastRegLoading };
}

function generateUniqueId() {
    return Math.floor(1000000 + Math.random() * 90000);
}
