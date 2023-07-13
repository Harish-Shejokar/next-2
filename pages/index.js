import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "this is first meetup",
    address: "some city , some state and some country",
    image:
      "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s16000/222.jpg",
    description: "this is some description",
  },
  {
    id: "m2",
    title: "this is second meetup",
    address: "some city , some state and some country",
    image:
      "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s16000/222.jpg",
    description: "this is some description",
  },
  {
    id: "m3",
    title: "this is third meetup",
    address: "some city , some state and some country",
    image:
      "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s16000/222.jpg",
    description: "this is some description",
  },
];

const Home = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   console.log("response " + res);
//   //fetch data from API

//   return {
//     props: {
//       meetups: DUMMY_MEETUP,
//     },
//   };
// }

export async function getStaticProps(){
  return {
    props: {
      meetups: DUMMY_MEETUP,
      revalidate: 1,
    }
  }
}

export default Home;
