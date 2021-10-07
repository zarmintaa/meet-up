import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image: "https://source.unsplash.com/random/1080x900",
    address: "Jakarta, Indonesia",
    description: "This is The First Meetup",
  },
  {
    id: "21",
    title: "Second Meetup",
    image: "https://source.unsplash.com/random/1080x800",
    address: "Bekasi, Indonesia",
    description: "This is The Second Meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
