import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React, {useState} from 'react';

export default function App() {
let [counter, setCounter]= useState(0);

const handleAdd = ()=>  {
  setCounter(++counter)
}

const handleSubtract = ()=>  {
  setCounter(--counter)
}
  return (
    <>
    <Container sx={ContainerStyle}>
      <Box sx={BoxStyle}>

<Typography variant="h1" gutterBottom>
        {counter}
      </Typography>
<Stack direction="row" spacing={6}>
      <Button variant="contained" onClick={handleAdd} >+</Button>
      {counter>0 &&(
        <Button variant="contained" onClick={handleSubtract}>-</Button>)}
</Stack>
      

      </Box>

    </Container>
    </>
  )
}

const BoxStyle = {
        backgroundColor:"#ecb4b4",
        borderRadius: "5px",
        width: "50%",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      };
      
      const ContainerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "600px",
      };