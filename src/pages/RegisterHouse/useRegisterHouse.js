import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import toast from "react-hot-toast";
import registerHouseAPI, { getLastRegisterHouseAPI, getRegisterHouseAPI } from "../../services/house/registerHouseAPI";
import uploadFile from "../../services/house/uploadFile";

export default function useRegisterHouse() {
    const navigate = useNavigate();

    const {
        mutate: regHouse,
        data: regHouseData,
        isPending
    } = useMutation({
        mutationFn: async ({ data, userData }) => {
            const uniqueId = uuidv4();
            uploadFile(uniqueId, data.picture[0]);
            console.log(userData)
            registerHouseAPI({ data, userData, image_id2: uniqueId });
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

