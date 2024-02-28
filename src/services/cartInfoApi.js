import supabase from "./Supabase";

export default async function CartInfo() {
    let { data } = await supabase
        .from('infoCart')
        .select('*')

    return { data }
}



