const split = (URL) => {
    const parts = URL?.split("/");
    const idNews = parts[parts.length - 1];

    return idNews
}


export default split