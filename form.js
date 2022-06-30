import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SMbuttons from "../components/buttons";
import SMinputs from "../components/inputs";
import { getData, sendData } from "../firebase/firebasemethods";


export default function Form() {

    const [userObj, setUserObj] = useState({})
    const navigate = useNavigate()

    let SendData = () => {

        sendData(userObj, "Teachers").then(() => {
            console.log("successfully Saved");
            navigate('/datashow')
        })
            .catch((err) => {
                console.log(err);
            })
        console.log(userObj);
    }

    return (

        <div className="App">

            <div>
                <h1 className="teachers-word">Teachers Form</h1>
            </div>

            <div>
                <SMinputs label="Name" onChange={(e) => setUserObj({ ...userObj, Name: e.target.value })} />
                <SMinputs label="Contact" onChange={(e) => setUserObj({ ...userObj, Contact: e.target.value })} />
                <SMinputs label="Class" onChange={(e) => setUserObj({ ...userObj, Class: e.target.value })} />
            </div>

            <div>
                <SMinputs label="Cinic" onChange={(e) => setUserObj({ ...userObj, Cinic: e.target.value })} />
                <SMinputs label="Section" onChange={(e) => setUserObj({ ...userObj, Section: e.target.value })} />
            </div>

            <div>
                <SMbuttons label="Submit" onClick={SendData} />
            </div>

        </div>

    )
}









