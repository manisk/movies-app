const deleteMovie = async (obj)=>{
    const url=`http://localhost:3000/movies/${obj.id}`
    //console.log(url);
    const response = await fetch(url,{
        method:'delete',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            id:obj.id
        })
    })
    const data = await response.json();
    if(!response.ok){
        throw data;
    }
    return data;
}
export default deleteMovie;