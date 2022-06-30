import { useEffect, useState } from "react"
import { DeleteDate, editData, getDataa } from "../firebase/firebasemethods";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { useNavigate } from "react-router-dom";



export default function Datashow() {
    const [render, setRender] = useState([]);
    const navigate = useNavigate();

    const getAllData = () => {
        getDataa("Teachers").then((res) => {
            setRender(res)
            console.log(res);
            console.log(render);
        })
    }




    let deleteRow = (uid) => {
        console.log(uid);
        DeleteDate("Teachers", uid).then(() => {
            console.log("delete successfully ");
        }).catch((errr) => {
            console.log(errr);
        })
    }


    useEffect(() => {
        getAllData()
    }, [])

    return (
        <div id="hello">


            <div id="tableeeee">


                <table border={2}>
                    <thead>

                        <tr>
                            <th >Name</th>
                            <th >CLass</th>
                            <th >Section</th>
                            <th >Cinic</th>
                            <th >Contact</th>
                        </tr>

                    </thead>


                    {render.map((e, i) => {
                        return (
                            <tbody key={i}>
                                <tr >
                                    <td >{e.Name}</td>
                                    <td >{e.Class}</td>
                                    <td >{e.Section}</td>
                                    <td >{e.Cinic}</td>
                                    <td >{e.Contact}</td>
                                    <td onClick={() => deleteRow(e.id)}><DeleteForeverOutlinedIcon /></td>
                                    {/* <td onClick={()=>navigate("/" , {
                                        state: 
                                        {e}
                                        }) } ><ModeEditOutlineOutlinedIcon /></td> */}
                                </tr>
                            </tbody>
                        )
                    })}

                </table>
            </div>
        </div>
    )
}









