import React from "react";
import { useRouter } from "next/router";
import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetupId = (props) => {
  const router = useRouter();
  return (
    <MeetupDetails
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};


export async function getStaticPaths() {
  
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1"
        },
      },
      {
        params: {
          meetupId: "m2"
        }
      },
      {
        params: {
          meetupId: "m3"
        }
      },
    ]
  }
}


export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        image: "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s16000/222.jpg",
        title: "this is first title",
        address: "some city some state and country",
        description: "this is goinng to be some description",
      }
    }
  }
}

export default MeetupId;
