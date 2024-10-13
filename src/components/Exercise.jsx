import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExercise, deleteExercise } from '../features/exerciseSlice';
import { Button, Form, ListGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


const Exercise = () => {
    const dispatch = useDispatch();
    const exercises = useSelector((state) => state.exercises);

    const handleAddExercise = (event) => {
        event.preventDefault();
        const type = event.target.type.value;
        const duration = event.target.elements.duration.value;
        const calories = event.target.elements.calories.value;
        dispatch(addExercise({ type, duration, calories }));
        event.target.reset();
    }

  return (
    <Container>

        <h1 className = "text-center">Exercise Tracker</h1>
        <Form onSubmit={addExercise}>
            <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control type="text" name="type" required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Duration</Form.Label>
                <Form.Control type="number" name="duration" required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Calories</Form.Label>
                <Form.Control type="number" name="calories" required />
            </Form.Group>
            <Button type="submit">Add Exercise</Button>
        </Form>

        <ListGroup className="mt-4">
            {exercises.map((exercise, index) => (
                <ListGroup.Item key={index}>
                    <div>Type: {exercise.type}</div>
                    <div>Duration: {exercise.duration}</div>
                    <div>Calories: {exercise.calories}</div>
                    <Button onClick={() => dispatch(deleteExercise(index))}>Delete</Button>
                </ListGroup.Item>
            ))}
        </ListGroup>

    
      
    </Container>
  )
}

export default Exercise;
