const addMovie  = async (obj) =>{
    const url = 'http://localhost:3000/movies';
    const response = await fetch(url,{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
           title:obj.movie,
           thumbnail:obj.image,
           description:obj.desc,
           rating:obj.points,
           actors:obj.actorName,
           director:obj.directorName
        })
    })
   const data = await response.json();
   if(!response.ok){
       throw data;
   }
   return data;
}

export default addMovie;

