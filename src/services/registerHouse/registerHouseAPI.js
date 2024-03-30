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

export async function filterRegHouse({ city, area, type, transaction, state }, rangeValue) {
    let query = supabase.from('registerHouse').select('*');

    const filters = [
        { key: 'city', value: city },
        { key: 'area', value: area },
        { key: 'type_land', value: type },
        { key: 'transaction_type', value: transaction },
        { key: 'state', value: state },
        { key: 'mortgage', operator: 'gte', value: rangeValue }
    ];

    filters.forEach(({ key, value, operator }) => {
        if (value) {
            query = query.filter(key, operator || 'eq', value);
        }
    });

    const { data, error } = await query;

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

