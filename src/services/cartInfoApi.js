import supabase from "../services/supabase"

export default async function cartInfo() {
    let { data } = await supabase
        .from('infoCart')
        .select('*')

    return { data }
}



