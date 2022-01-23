import React from "react";
import { useState } from "react/cjs/react.development";
import updateMovie from './../../api/updateMovie';

function EditMovie(props) {
    const id = props.movie.id;
    const [movieName, setMovieName] = useState(props.movie.title);
    const [director, setDirector] = useState(props.movie.director);
    const [actor, setActor] = useState(props.movie.actors);
    const [description, setDescription] = useState(props.movie.description);
    const [rating, setRating] = useState(props.movie.rating);
    const [thumnail, setThumbnail] = useState(props.movie.thumbnail);
    const [loading,setLoading] = useState(false);

    const closeModal = () => {
        props.hideModalprops();
    }

   const updateMovieDetail = async ()=>{
       setLoading(true);
       try{
        const data  = await updateMovie(id,{
            title:movieName,
            img:thumnail,
            rating:rating,
            actorName:actor,
            directorName:director,
            description:description
           })
           props.refreshPage();
           closeModal();
       }
       catch(error){
           console.log('error',error)
       }
       finally{
        setLoading(false);
       }
   }

    return (
        <>
            <div className="modal show d-block" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit {props.movie.title} Detais</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body px-4">
                            <div className="row mb-3">
                                <label htmlFor="movie-name" className="form-label">Movie Name</label>
                                <input value={movieName} type="text" className="form-control" onChange={(e) => setMovieName(e.target.value)} />
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="director-name" className="form-label">Director</label>
                                <input value={director} type="text" className="form-control" onChange={(e) => setDirector(e.target.value)} />
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="actor-name" className="form-label">Actor</label>
                                <input value={actor} type="text" className="form-control" onChange={(e) => setActor(e.target.value)} />
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="rating" className="form-label">Movie Rating</label>
                                <select value={rating} className="form-control" name="rating" id="rating" onChange={(e) => setRating(e.target.value)}>
                                    <option value="0">--</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="movieImg" className="form-label">Thumbnail Source</label>
                                <input value={thumnail} type="text" className="form-control" onChange={(e) => setThumbnail(e.target.value)} />
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="desc" className="form-label">Description</label>
                                <textarea value={description} name="desc" id="desc" cols="10" rows="5" required className="form-control" onChange={(e) => setDescription(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                            <button disabled={loading} type="button" className="btn btn-primary" onClick={updateMovieDetail}> {loading ? 'Loading..' : 'Save Changes'}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop fade show"></div>
        </>
    )
}
export default EditMovie;