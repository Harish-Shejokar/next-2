import React from 'react'
import MeetupList from '../components/meetups/MeetupList';

const Home = () => {

    const DUMMY_MEETUP = [
      {
        id: "m1",
        title: "this is first meetup",
        address: "some city , some state and some country",
        image:
                "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s16000/222.jpg",
        description:"this is some description"
      },
      {
        id: "m2",
        title: "this is second meetup",
        address: "some city , some state and some country",
        image:
                "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s16000/222.jpg",
        description:"this is some description"
      },
      {
        id: "m3",
        title: "this is third meetup",
        address: "some city , some state and some country",
        image:
                "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s16000/222.jpg",
        description:"this is some description"
      },
    ];


  return (
    <>
          <MeetupList meetups={DUMMY_MEETUP} />  
    </>
  );
}

export default Home;
