import React, { useEffect, useState } from "react";
import './Movies.scss';
import EditMovie from "../EditMovie/EditMovie";
import DeleteMovie from "../DeleteMovie/DeleteMovie";
import getMoviesList from './../../api/showMoviesList';
import ViewMovie from "../ViewMovie/ViewMovie";

function Maincontent() {
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [moviesList, setMoviesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);


    async function getMoviesData() {
        try {
            setLoading(true);
            const responseData = await getMoviesList();
            console.log(responseData);
            setMoviesList(responseData);
        }
        catch (error) {
            console.log('error', error);
            setErrorMsg(true)
        }
        finally {
            setLoading(false);
        }

    }
    useEffect(() => {


        getMoviesData();
    }, [])

    const hideModal = () => {
        setEditModal(false);
        setDeleteModal(false);
        setViewModal(false);
        setSelectedMovie(null);

    }
    const editMovie = (movie) => {
        setEditModal(true)
        setSelectedMovie(movie);
    }
    const deleteMovie = (movie) => {
        setDeleteModal(true);
        setSelectedMovie(movie);
    }

    const viewDetails = (movie) => {
        setViewModal(true);
        setSelectedMovie(movie);
    }



    return (
        <div className="rightside-container">
            <h5 className="text-center py-3">Movies List</h5>
            {loading ? <div className="loader">
                <img src="https://i.stack.imgur.com/ATB3o.gif" alt="loader.." />
            </div> : (<div className="container">
                <div className="card">
                    <div className="card-body">
                        {errorMsg ? <div className="alert alert-danger">Api Error</div> : (
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Sr.No</th>
                                        <th scop="col">Movies humbnail</th>
                                        <th scope="col">Movie Name</th>
                                        <th scope="col">Director</th>
                                        <th scope="col">Actor</th>
                                        <th scop="col">Rating</th>
                                        <th scop="col">Button</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    {moviesList.map((movie) =>

                                        <tr>
                                            <th scope="row">{movie.id}</th>
                                            <td><img src={movie.thumbnail || 'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg'} height="100" width="72" alt="thumbnail" /></td>
                                            <td>{movie.title || '--'}</td>
                                            <td>{movie.director || '--'}</td>
                                            <td>{movie.actor || '--'}</td>
                                            <td>{movie.rating || '--'}</td>
                                            <td>
                                                <button className="btn btn-outline-success" onClick={() => viewDetails(movie)}>View</button>
                                                <button className="btn btn-outline-primary mx-3" onClick={() => editMovie(movie)}>Edit</button>
                                                <button className="btn btn-outline-danger" onClick={()=>deleteMovie(movie)}>Delete</button>
                                            </td>
                                        </tr>

                                    )}
                                </tbody>
                            </table>
                        )}

                    </div>
                </div>
            </div>
            )

            }
            {viewModal ? <ViewMovie selectedMovie={selectedMovie} viewMovieprops={hideModal} /> : null}
            {editModal ? <EditMovie refreshPage={getMoviesData} movie={selectedMovie} hideModalprops={hideModal} /> : null}
            {deleteModal ? <DeleteMovie refreshPage={getMoviesData} deleteSelectedMovie={selectedMovie} hideDeleteModal={hideModal} /> : null}
        </div>
    )
}

export default Maincontent;