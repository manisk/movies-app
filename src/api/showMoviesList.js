const movieList = async ()=>{
    const url = "http://localhost:3000/movies";

    const response = await fetch(url);

    const data = await response.json();
    if(!response.ok){
        throw data;
    }
    return data;

}
export default movieList;