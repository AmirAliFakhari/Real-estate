import supabase from "../supabase";


export default async function getAvatarURL() {
    const userID = localStorage.getItem("userID");

    const { data, error } = await supabase
        .from('userAvatar')
        .select()
        .eq("userID", userID)


    if (error) {
        throw new Error(error.message);
    }
    return data;
}

export async function uploadAvatarUrl({ avatar, myuuid, image_id3 }) {
    console.log(image_id3)
    const userID = localStorage.getItem("userID");
    const supaURL =
        "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/public/avatars/";

    const avatarName = avatar?.name;
    const avatarURL = `${supaURL}${myuuid}-${avatarName}`;

    const { data, error } = await supabase
        .from('userAvatar')
        .upsert({ userID: userID, avatar: avatarURL, uniqueId: image_id3 })

    console.log(data)

    if (error) {
        console.error('Upsert error:', error.message);
        throw new Error(error.message);
    }

    return data;
}
