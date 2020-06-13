//React
import React, { useState } from 'react';
import './App.css';

//Data for funny names
import FunnyNames from './data/funny.json'

//Material UI
import { Container, Box, Typography, TextField, Paper } from '@material-ui/core'

//Footer
import Contact from './Contact'

//Days
let days = []
for (let index = 1; index <= 31; index++) { days.push(<option value={index}>{index}</option>) }

const App = () => {
  console.log(FunnyNames)

  //State
  const [NameState, setNameState] = useState("")
  const [LastNameState, setLastNameState] = useState("")
  const [SecondLastNameState, setSecondLastNameState] = useState("")
  const [MomState, setMomState] = useState("")
  const [CountryState, setCountryState] = useState("")
  const [DayState, setDayState] = useState(1)

  const onNameChange = event => {
    setNameState(event.target.value)
  }

  const onLastNameChange = event => {
    setLastNameState(event.target.value)
  }

  const onSecondLastNameChange = event => {
    setSecondLastNameState(event.target.value)
  }

  const onMomChange = event => {
    setMomState(event.target.value)
  }

  const onCountryChange = event => {
    setCountryState(event.target.value)
  }

  const onDayChange = event => {
    if ((event.target.value <= 31 && event.target.value >= 1) || event.target.value === "")
      setDayState(event.target.value)
  }

  const getStarWarsName = () =>{
    const lname = LastNameState.slice()
    const name = NameState.slice()
    const mom = MomState.slice()
    const country = CountryState.slice()

    return (lname.substr(0,3)+name.substr(0,2).toLowerCase()+" "+mom.substr(0,2)+country.substr(0,3).toLowerCase())
  }

  const getStormTrooperName = () =>{
    const lname = LastNameState.slice()
    const slname = SecondLastNameState.slice()
    const birth = DayState

    return(lname.substr(0,1)+slname.substr(0,1)+"-"+birth)
  }

  const getDigimonName = () =>{
    const lname = LastNameState.slice()
    const name = NameState.slice()

    return(lname.substr(0,3)+name.substr(0,2).toLowerCase()+"mon")
  }

  const getFunnyName = () =>{
    const name = NameState.slice()
    const lname = LastNameState.slice()
  
    if(name==="" || lname===""){
      return null
    }
    else{
      return(FunnyNames.names[name.substr(0,1)]+" "+FunnyNames.lastnames[lname.substr(0,1)])}
  }

  return (
    <Container className="Container" maxWidth="xl" disableGutters="true">

      <Typography gutterBottom="true" variant="h1" align="center">Swaping Names</Typography>

      <Box className="Inputs" display="flex" justifyContent="space-evenly" alignContent="space-evenly">
        <TextField id="date" label="Birth Day" variant="filled" type="number" value={DayState} onChange={onDayChange} />
        <TextField id="name" label="First Name" variant="filled" value={NameState} onChange={onNameChange} />
        <TextField id="lastName" label="Last Name" variant="filled" value={LastNameState} onChange={onLastNameChange} />
        <TextField id="SecondLastName" label="Second Last Name" variant="filled" value={SecondLastNameState} onChange={onSecondLastNameChange} />
        <TextField id="mom" label="Mom's First Name" variant="filled" value={MomState} onChange={onMomChange} />
        <TextField id="country" label="Birth Country" variant="filled" value={CountryState} onChange={onCountryChange} />
      </Box>

      <Box className="Names"> 
          <Paper className="Name" elevation="3">
            <Typography variant="h6">Star Wars Name</Typography>
            <Typography variant="h7">{getStarWarsName()}</Typography>
          </Paper>

          <Paper className="Name" elevation="3">
            <Typography variant="h6">Storm Trooper Name</Typography>
            <Typography variant="h7">{getStormTrooperName()}</Typography>
          </Paper>

          <Paper className="Name" elevation="3">
            <Typography variant="h6">Digimon Name</Typography>
            <Typography variant="h7">{getDigimonName()}</Typography>
          </Paper>

          <Paper className="Name" elevation="3">
            <Typography variant="h6">Funny Name</Typography>
            <Typography variant="h7">{getFunnyName()}</Typography>
          </Paper>
      </Box>

      <Contact/>

    </Container>
  );
}

export default App;
