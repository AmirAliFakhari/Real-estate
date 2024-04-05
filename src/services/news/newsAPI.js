import { combineSlices } from "@reduxjs/toolkit";
import supabase from "../supabase";
import { data } from "autoprefixer";

export default async function lastNewsAPI() {

    let { data: news, error } = await supabase
        .from('news')
        .select('*').order("id", { ascending: false }).limit(4)

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }

    return news;
}


export async function insertNewsAPI({ title, img, type, subtitle, today, time, isTopNews, text, myuuid }) {
    const supaURL =
        "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/public/news/";

    const imgName = img[0]?.name;
    const imgURL = `${supaURL}${myuuid}-${imgName}`;


    const { data, error } = await supabase
        .from('news')
        .insert(
            { type: type, subtitle: subtitle, created_at: today, img: imgURL, title: title, time: time, isTopNews: isTopNews, text: text },
        )
        .select()

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }
    return data;
}

export async function newsAPI() {

    let { data: news, error } = await supabase
        .from('news')
        .select('*').eq("isTopNews", true).order("id", { ascending: false }).limit(1)

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }

    return news;
}


export async function uploadNewsImg({ img, myuuid }) {
    const { error, data } = await supabase
        .storage
        .from('news')
        .upload(`${myuuid}-${img?.name}`, img);
    if (error) {
        throw new Error(error.message);
    }
    return data;
}




