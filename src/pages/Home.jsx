import React, {useState} from 'react';
import {Box} from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);
  return (
   <Box>
    <HeroBanner />
    {bodyPart &&  <SearchExercises 
    setExercises={setExercises}
    bodyPart={bodyPart}
    setBodyPart={setBodyPart}
    />}
   
   { 
   bodyPart && <Exercises
    exercises={exercises}
    setExercises={setExercises}
    bodyPart={bodyPart}
    />}
   </Box>
  )
}

export default Home

