import React, { useEffect, useState } from "react";
import './Movies.scss';
import EditMovie from "../EditMovie/EditMovie";
import DeleteMovie from "../DeleteMovie/DeleteMovie";
import getMoviesList from './../../api/showMoviesList';

function Maincontent() {
    const [modal, setModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [moviesList, setMoviesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg,setErrorMsg] = useState(false);


    useEffect(() => {

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
            finally{
                setLoading(false);
            }

        }
        getMoviesData();
    }, [])

    const hideModal = () => {
        setModal(false);
        setDeleteModal(false);
    }
    const editMovie = () => {
        setModal(true)
    }
    const deleteMovie = () => {
        setDeleteModal(true);
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
                                        <th scope="row">2</th>
                                        <td><img src={movie.thumbnail || 'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg'} height="100" width="72" alt="thumbnail" /></td>
                                        <td>{movie.title || '--'}</td>
                                        <td>{movie.director || '--'}</td>
                                        <td>{movie.actor || '--'}</td>
                                        <td>{movie.rating || '--'}</td>
                                        <td>
                                            <button className="btn btn-outline-primary mx-3" onClick={editMovie}>Edit</button>
                                            <button className="btn btn-outline-danger" onClick={deleteMovie}>Delete</button>
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
             {modal ? <EditMovie hideModalprops={hideModal} /> : null}
            {deleteModal ? <DeleteMovie hideDeleteModal={hideModal} /> : null}
        </div>
    )
}

export default Maincontent;