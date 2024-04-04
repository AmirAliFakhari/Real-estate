import supabase from "../supabase";

export default async function lastNewsAPI() {

    let { data: news, error } = await supabase
        .from('news')
        .select('*').limit(4)

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }

    return news;
}


export async function insertNewsAPI() {

    const { data, error } = await supabase
        .from('news')
        .insert(
            { type: "salam", subtitle: "sa", created_at: "dasd", img: "dsad", title: "dsad" },
        )
        .select()

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }
    console.log(data)
    return data;
}

export async function newsAPI() {

    let { data: news, error } = await supabase
        .from('news')
        .select('*')

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }

    return news;
}




