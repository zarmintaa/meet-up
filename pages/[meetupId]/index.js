import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://source.unsplash.com/random/1080x800"
      title="A First Meetup"
      address="Bekasi, Indonesia"
      description="A Meetup Description"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        image: "https://source.unsplash.com/random/1080x800",
        title: "A First Meetup",
        address: "Bekasi, Indonesia",
        description: "A Meetup Description",
      },
    },
  };
}

export default MeetupDetails;
