import React from "react";

function ViewMovie(props) {
    return (
        <>
            <div class="modal show d-block" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">{props.selectedMovie.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>props.viewMovieprops()}></button>
                        </div>
                        <div class="modal-body">
                            <p>{props.selectedMovie.description}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>props.viewMovieprops()}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop fade show"></div>
        </>
    )
}

export default ViewMovie