import Button from '@mui/material/Button';


export default function SMbuttons(props) {

    const { label, onClick } = props

    return (

        <Button id='buttons' sx={{marginTop:"20px" , fontSize:"20px"}} onClick={onClick}
            variant="contained">{label}</Button>

    )
}