import React from "react";
import deleteMovie from "../../api/deleteMovie";

function DeleteMovie(props) {

    const deleteSelectedMovie = async () => {
        const data = await deleteMovie({
            id: props.deleteSelectedMovie.id
        });
        props.refreshPage();
        closeModal();
    }

    const closeModal = () => {
        props.hideDeleteModal();
    }


    return (
        <>
            <div class="modal show d-block" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Delete Movie</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                        </div>
                        <div class="modal-body">
                            <p>Are you sure ,want to delete that movies?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>No</button>
                            <button type="button" class="btn btn-primary" onClick={deleteSelectedMovie}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop fade show"></div>
        </>
    )
}
export default DeleteMovie;