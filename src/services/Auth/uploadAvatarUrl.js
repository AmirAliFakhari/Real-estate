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

export async function uploadAvatarUrl({ avatar, myuuid }) {
    const userID = localStorage.getItem("userID");
    const supaURL =
        "https://ecaeztmdfrcwezajiapg.supabase.co/storage/v1/object/public/avatars/";

    const avatarName = avatar?.name;
    const avatarURL = `${supaURL}${myuuid}-${avatarName}`;
    console.log(avatarURL)

    const { data, error } = await supabase
        .from('userAvatar')
        .insert([{ avatar: avatarURL, userID: userID }]);

    if (error) {
        console.error('Insert error:', error.message);
        throw new Error(error.message);
    }

    console.log('Inserted data:', data);
    return data;
}
