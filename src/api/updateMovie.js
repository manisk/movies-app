const updateMovie = async (id,obj) => {
    const url = `http://localhost:3000/movies/${id}`;
    const response = await fetch(url, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "title": obj.title,
            "thumbnail": obj.img,
            "rating": obj.rating,
            "actors": obj.actorName,
            "director":obj.directorName,
            "description":obj.description
        })

    })
    const data = await response.json();
    if(!response.ok){
        throw data
    }
    return data;


}
export default updateMovie;