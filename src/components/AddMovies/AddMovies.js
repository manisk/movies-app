import React from "react"
import { useState } from "react/cjs/react.development";
import './AddMovies.scss';
import addMovie from "../../api/addMovie";


function AddMovie() {

    const [movieName, setMovieName] = useState('');
    const [actorName, setActorName] = useState('');
    const [directorName, setDirectorName] = useState('');
    const [rating, setRating] = useState(0);
    const [tumbnail, setThumbnail] = useState('');
    const [discription, setDescription] = useState('')
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);



    const addMovieToList = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = await addMovie({
                movie: movieName,
                image: tumbnail,
                points: rating,
                actorName: actorName,
                directorName: directorName,
                desc: discription
            });
            setMovieName('');
            setActorName('');
            setDirectorName('');
            setRating(0);
            setThumbnail('');
            setDescription('');
            console.log('Sucess', data);
            setSuccessMsg(true)
        }
        catch (error) {
            console.log('error', error)
            setErrorMsg(true);
        }
        finally {
            setLoading(false);
        }

    }

    return (
        <div className="add-movies-container m-auto mt-3 mb-3">
            <div className="container">
                <h5 className="text-center py-3">Add New Movies</h5>
                <form onSubmit={addMovieToList}>
                    <div className="row mb-3">
                        <label htmlFor="movies-name" className="form-label">Movies Name</label>
                        <input value={movieName} type="text" className="form-control" required onChange={(e) => setMovieName(e.target.value)} />
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="actor-name" className="form-label">Actor Name</label>
                        <input value={actorName} type="text" className="form-control" required onChange={(e) => setActorName(e.target.value)} />
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="director-name" className="form-label">Directore Name</label>
                        <input value={directorName} type="text" className="form-control" required onChange={(e) => setDirectorName(e.target.value)} />
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="movies-rating" className="form-label">Movies Rating</label>
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
                        <label htmlFor="image-ipload" className="form-label">Thumbnail Source</label>
                        <input value={tumbnail} type="text" className="form-control"  onChange={(e) => setThumbnail(e.target.value)} />
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="desc" className="form-label">Description</label>
                        <textarea value={discription} name="desc" id="desc" cols="10" rows="5" required className="form-control" onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="row">
                        {successMsg ? <div className="alert alert-success d-flex justify-content-between">Data added successfully <button type="button" class="btn-close" aria-label="Close" onClick={()=>setSuccessMsg(false)}></button></div> : null}
                        {errorMsg ? <div className="alert alert-danger d-flex justify-content-between">Data not added successfully <button type="button" class="btn-close" aria-label="Close" onClick={()=>setErrorMsg(false)}></button></div> : null}
                    </div>

                    <div className="row py-3">
                        <input type="submit" disabled={loading} className="btn btn-primary"  value={loading ? 'Loading..' : 'Submit'}/>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddMovie;