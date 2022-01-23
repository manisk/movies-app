import React from "react";


function EditMovie(props) {

    const closeModal = () => {
        props.hideModalprops();
    }



    return (
        <>
            <div className="modal show d-block" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Movies</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body px-4">
                            <div className="row mb-3">
                                <label htmlFor="movie-name" className="form-label">Movie Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="director-name" className="form-label">Director</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="actor-name" className="form-label">Actor</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="rating" className="form-label">Movie Rating</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="movieImg" className="form-label">Thumbnail Source</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop fade show"></div>
        </>
    )
}
export default EditMovie;