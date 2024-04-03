import supabase from "../supabase";

export default async function uploadAvatar({ avatar, myuuid }) {
    const { error, data } = await supabase
        .storage
        .from('avatars')
        .upload(`${myuuid}-${avatar?.name}`, avatar);
    if (error) {
        throw new Error(error.message);
    }
    return data;
}
