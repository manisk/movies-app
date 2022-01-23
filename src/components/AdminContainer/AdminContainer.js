import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Movies from "../Movies/Movies";
import{Routes,Route} from 'react-router-dom'
import AddMovie from '../AddMovies/AddMovies';


function AdminContainer(){
    return(
        <div>
            <Header/>
            <div className="admin-content d-flex">
                <Sidebar/>
                <Routes>
                    <Route path="/admin" element={ <Movies />}/>
                    <Route path="/add" element={<AddMovie/>}/>
                </Routes>
            </div>
        </div>
    )
}
export default AdminContainer;