import supabase from "../supabase";

export default async function registerHouseAPI({ userData, image_id2, ...d }) {
    const { data, error } = await supabase
        .from('registerHouse')
        .insert([
            { userData, ...d, image_id: image_id2 },
        ])
        .select()

    if (error) {
        console.error(error);
        throw new Error(" could not be loaded");
    }

    return data;
}

export async function filter({ city, area, type }) {
    console.log(city, area, type);

    let query = supabase.from('registerHouse').select('*');

    if (city) {
        query = query.filter('city', 'eq', city);
    }

    if (area) {
        query = query.filter('area', 'eq', area);
    }

    if (type) {
        query = query.filter('type_land', 'eq', type);
    }

    const { data, error } = await query;

    console.log(data);

    if (error) {
        console.error(error);
        throw new Error("Could not get data from Supabase.");
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

