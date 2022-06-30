import TextField from '@mui/material/TextField';

export default function SMinputs(props) {
    const { type, label, color, onChange, value } = props
    return (

        <TextField sx={{margin:"20px"}} id='inputss' type={type} value={value} onChange={onChange} color={color} label={label} variant="filled" />

    )
}









