import supabase from "../supabase";

export default async function registerHouseAPI({ userData, image_id2, ...d }) {
    console.log(image_id2)

    const { data, error } = await supabase
        .from('registerHouse')
        .insert([
            { userData, ...d, image_id: image_id2 },
        ])
        .select();

    if (error) {
        console.error(error);
        throw new Error(" could not be loaded");
    }

    return data;
}

export async function getRegisterHouseAPI() {

    const { data: getRegisterHouse, error } = await supabase
        .from('registerHouse')
        .select('*')


    if (error) {
        console.error(error);
        throw new Error(" could not get ");
    }
    return getRegisterHouse;
}


export async function getLastRegisterHouseAPI() {

    const { data: getRegisterHouse, error } = await supabase
        .from('registerHouse')
        .select('*').limit(8)


    if (error) {
        console.error(error);
        throw new Error(" could not get ");
    }
    return getRegisterHouse;
}

