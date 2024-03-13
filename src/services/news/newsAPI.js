import supabase from "../supabase";

export default async function lastNewsAPI() {

    let { data: news, error } = await supabase
        .from('news')
        .select('*')

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }

    return news;
}



