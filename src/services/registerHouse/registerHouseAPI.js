import supabase from "../supabase";

export default async function registerHouseAPI({ userData, transaction_type, mortgage, rent, city, state, street, number_floors, floor, auxiliary_road, room, type_land, area }) {

    const { data, error } = await supabase
        .from('registerHouse')
        .insert([
            { transaction_type, mortgage, rent, city, state, street, number_floors, floor, auxiliary_road, room, type_land, area, userData },
        ])
        .select();

    if (error) {
        console.error(error);
        throw new Error(" could not be loaded");
    }
    console.log(data)

    return data;
}
