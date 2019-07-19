import React from 'react';

const Mapping = (props) => {
  const { name, course, technique, ingredients } = props.data
  return(
    <div className='single-data' id={props.data.id}>
      <h3>Name: {name}</h3>
      <p>Course: {course}</p>
      <p>Technique: {technique}</p>
      <p>Ingredients:</p>
      <ul>
        {ingredients.map(ingredient => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}

export default Mapping;