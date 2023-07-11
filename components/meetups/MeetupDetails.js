import React from 'react'
import classes from "./MeetupDetails.module.css"

const MeetupDetails = (props) => {
  return (
    <section className={classes.details}>
      <img
        src={props.image}
          />
          <h1>{props.title}</h1>
          <h2>{props.description}</h2>
          <h3>{props.address}</h3>
    </section>
  );
}

export default MeetupDetails
