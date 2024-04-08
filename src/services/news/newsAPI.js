import supabase from "../supabase";


export async function insertNewsAPI({ myuuidImg, myuuidPic, ...d }) {
    let today = new Date().toLocaleDateString("fa-IR");
    const { img = d.img, picture = d.picture } = d
    const supaURL =
        "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/public/news/";

    const imgName = img[0]?.name;
    const pictureName = picture[0]?.name;
    const imgURL = `${supaURL}${myuuidImg}-${imgName}`;
    const pictureURL = `${supaURL}${myuuidPic}-${pictureName}`;



    const { data, error } = await supabase
        .from('news')
        .insert(
            { ...d, picture: pictureURL, img: imgURL, created_at: today },
        )
        .select()

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }
    return data;
}


export async function uploadNewsImg({ img, myuuidImg }) {

    const { error: imgError, data: imgData } = await supabase
        .storage
        .from('news')
        .upload(`${myuuidImg}-${img?.name}`, img);

    if (imgError) {
        throw new Error(imgError.message);
    }



    return imgData;
}


export async function uploadNewsPic({ picture, myuuidPic }) {

    const { error: picError, data: picData } = await supabase
        .storage
        .from('news')
        .upload(`${myuuidPic}-${picture?.name}`, picture);

    if (picError) {
        throw new Error(picError.message);
    }



    return picData;
}




export async function eachNewsAPI({ idNews }) {
    const StoategURL = "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/public/news/"
    const imgURL = StoategURL + idNews
    let { data: news, error } = await supabase
        .from('news')
        .select('*').eq("img", imgURL)

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }

    return news;
}

export async function selectTypeNews() {

    let { data: news, error } = await supabase
        .from('news')
        .select('*').order(
            "id", {
            ascending: false
        }
        )

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }

    return news;
}




export async function getRelatedNewsAPI(type) {
    console.log(type)
    let query = supabase.from('news').select();


    const filters = [
        { key: 'type', value: type },
    ];

    filters.forEach(({ key, value, operator }) => {
        if (value) {
            query = query.filter(key, operator || 'eq', value);
        }
    });
    const { data, error } = await query.limit(4);

    if (error) {
        console.error(error);
        throw new Error("Could not get data from Supabase.");
    }
    return data;
}

