import supabase from "../supabase";


export async function insertNewsAPI({ title, img, type, subtitle, today, time, isTopNews, text, myuuidImg, picture, myuuidPic, typeOrder }) {
    const supaURL =
        "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/public/news/";

    const imgName = img[0]?.name;
    const pictureName = picture[0]?.name;
    const imgURL = `${supaURL}${myuuidImg}-${imgName}`;
    const pictureURL = `${supaURL}${myuuidPic}-${pictureName}`;
    console.log(`img : ${myuuidImg} `, `pic ${myuuidPic} `)



    const { data, error } = await supabase
        .from('news')
        .insert(
            { type: type, subtitle: subtitle, created_at: today, img: imgURL, title: title, time: time, isTopNews: isTopNews, text: text, picture: pictureURL, typeOrder },
        )
        .select()

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }
    return data;
}


export async function uploadNewsImg({ img, myuuidImg }) {
    console.log(myuuidImg)

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

