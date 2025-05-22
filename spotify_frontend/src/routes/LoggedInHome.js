import LoggedInContainer from "../containers/LoggedInContainer";

const focusCardsData = [
  {
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces.",
    imgUrl: "https://i.scdn.co/image/ab67706f00000002af84f7c3b22912a280832c0b",
  },
  {
    title: "Deep Focus",
    description: "Keep calm and focus with this music.",
    imgUrl: "https://i.scdn.co/image/ab67706f00000002f3ce4c5b615e345331a22830",
  },
  {
    title: "Instrumental Study",
    description: "Focus with soft study music in the background.",
    imgUrl: "https://i.scdn.co/image/ab67616d00001e02185ca0219b7b5bc54ba23640",
  },
  {
    title: "Focus Flow",
    description: "Up tempo instrumental hip hop beats.",
    imgUrl:
      "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84baf016c6f09cc2e9eb6ba345",
  },
  {
    title: "Beats to think to",
    description: "Focus with deep techno and tech house.",
    imgUrl:
      "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000d72c60adb5cb2b28cb1328763c58",
  },
];

const spotifyPlaylistsCardData = [
  {
    title: "Today's Top Hits",
    description: "The Weekend is on top of the Hottest 50!",
    imgUrl: "https://i.scdn.co/image/ab67706f000000021074ce9ea42cf9c3bb1f6057",
  },
  {
    title: "RapCaviar",
    description: "Music from Lil Uzi Vert, Drake and Moneybagg Yo.",
    imgUrl: "https://i.scdn.co/image/ab67616100005174df9a1555f53a20087b8c5a5c",
  },
  {
    title: "All Out 2010s",
    description: "The biggest song of the 2010s.",
    imgUrl: "https://i.scdn.co/image/ab67706f00000002d8968192efe2f409766f2ff2",
  },
  {
    title: "Rock Classics",
    description: "Rock legends & epic songs that continue to...",
    imgUrl: "https://i.scdn.co/image/ab67706f00000002af95f960293e4e538eeacb6f",
  },
  {
    title: "Chill Hits",
    description: "Kick best to the best new and recent chill hits.",
    imgUrl: "https://i.scdn.co/image/ab67706f000000021383ef25f681eb390e7806b7",
  },
];

const soundOfIndiaCardData = [
  {
    title: "The Sound of Mumbai",
    description: "The song that define, unite and distinguish...",
    imgUrl:
      "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84754eeeef9c2b8c29adb5b3e4",
  },
  {
    title: "The Sound of Kolkata",
    description: "The song that define, unite and distinguish...",
    imgUrl:
      "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da845aaaf2a0986867b797b2dc6c",
  },
  {
    title: "The Sound of Delhi",
    description: "The song that define, unite and distinguish...",
    imgUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/f0/b9/0f/caption.jpg?w=300&h=300&s=1",
  },
  {
    title: "The Sound of Bengaluru",
    description: "The song that define, unite and distinguish...",
    imgUrl:
      "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da843eb819beb795b77001f6c230",
  },
  {
    title: "The Sound of Chennai",
    description: "The song that define, unite and distinguish...",
    imgUrl:
      "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84735ff3d91fd7bcc7e854364d",
  },
];

const Home = () => {
  return (
    <LoggedInContainer currActiveScreen="home">
      <PlaylistView 
      titleText="Focus" 
      cardsData={focusCardsData} 
      />
      <PlaylistView
        titleText="Spotify Playlist"
        cardsData={spotifyPlaylistsCardData}
      />
      <PlaylistView
        titleText="Sound Of India"
        cardsData={soundOfIndiaCardData}
      />
    </LoggedInContainer>
  );
};
const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mt-8">
      <div className="text-2xl font-semibold mb-5">{titleText}</div>
      <div className="w-full flex justify-between space-x-4">
        {
          // cardsData will be an array
          cardsData.map((item) => {
            return (
              <Card
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            );
          })
        }
      </div>
    </div>
  );
};

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
      <div className="pb-4 pt-2 ">
        <img className="w-full rounded-md" src={imgUrl} alt="label" />
      </div>
      <div className="text-white text-sm font-semibold py-3">{title}</div>
      <div className="text-gray-500">{description}</div>
    </div>
  );
};

export default Home;
