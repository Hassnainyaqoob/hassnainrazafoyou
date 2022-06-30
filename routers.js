import React from "react";
import {
    BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import Datashow from "../pages/datashow";
import Example from "../pages/example";
import Form from "../pages/form";

export default function Routerings() {
    return (

        <Router>
            <Routes >

                {/* <Route path='/' element={<Form />} /> */}

                {/* <Route path='/datashow' element={<Datashow />} /> */}
                
                <Route path='/example' element={<Example />} />


            </Routes>
        </Router>

    )
}

