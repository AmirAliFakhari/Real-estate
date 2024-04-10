const split = (URL) => {
    const parts = URL?.split("/");
    const length = parts?.length
    const idNews = parts[length - 1];

    return idNews
}


export default split