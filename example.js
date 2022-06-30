import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
export default function Example() {

    const dispatch = useDispatch()

    const dataFromReducer = useSelector((a) => a)

    console.log(dataFromReducer);

    let updateeHello = () => {

        dispatch({
            type: "DATAFROMEXAMPLE",
            Name: "Data Update"
        })

    }

    return (
        <>
            <h1 className="App">{dataFromReducer.Name}</h1>
            <button className="Ap" onClick={updateeHello}>Updateeeee</button>
        </>

    )
}

























