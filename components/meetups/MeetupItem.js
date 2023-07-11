import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router';

function MeetupItem(props) {
  const router = useRouter();
  // console.log(props);
  
  const buttonHandler = () => {
    console.log("detail page");
    router.push({ pathname: `${props.id}` });
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={buttonHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
