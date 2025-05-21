import { Icon } from "@iconify/react/dist/iconify.js";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import { Link } from "react-router-dom";
import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import { useState, useEffect } from "react";
import { Howl, Howler } from "howler";

const MyMusic = () => {
  const [songData, setSongData] = useState([]);

  const [soundPlayd, setSoundPlayd] = useState(null);

  const playSound = (songSrc) => {
    if (soundPlayd) {
      soundPlayd.stop();
    }
    let sound = new Howl({
      src: [songSrc],
      html5: true,
    });
    setSoundPlayd(sound);
    sound.play();
  };

  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest("/song/get/mysongs");
      setSongData(response.data);
    };
    getData();
  }, []);

  return (
    <div className="h-full w-full flex">
      <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
        <div>
          <div className="logoDiv p-6">
            <img src={spotify_logo} alt="logo" width={125} />
          </div>

          <div className="py-5">
            <IconText iconName={"material-symbols:home"} displayText={"Home"} />

            <IconText
              iconName={"material-symbols:search-rounded"}
              displayText={"Search"}
            />

            <IconText iconName={"icomoon-free:books"} displayText={"Library"} />
            <IconText
              iconName={"material-symbols:library-music-sharp"}
              displayText={"My Music"}
              active
            />
          </div>

          <div className="pt-5">
            <IconText
              iconName={"material-symbols:add-box"}
              displayText={"Create Playlist"}
            />

            <IconText
              iconName={"mdi:cards-heart"}
              displayText={"Liked Songs"}
            />
          </div>
        </div>

        <div className="px-5">
          <div className="w-2/5 border border-gray-100 text-white flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
            <Icon icon="carbon:earth-europe-africa" />
            <div className="ml-2 text-sm font-semibold">English</div>
          </div>
        </div>
      </div>

      <div className="h-full w-4/5 bg-app-black overflow-auto">
        <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
          <div className="w-1/2 flex h-full">
            <div className="w-2/3 flex justify-around items-center">
              <TextWithHover displayText={"Premium"} />
              <TextWithHover displayText={"Support"} />
              <TextWithHover displayText={"Download"} />
              <div className="h-1/2 border-r border-white"></div>
            </div>

            <div className="w-1/3 flex justify-around h-full items-center">
              <Link to="/signup">
                {" "}
                <TextWithHover displayText={"Upload Song"} />
              </Link>
              <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                <Link to="/login">JAY</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="Content p-8 overflow-auto">
          <div className="text-white text-2xl font-bold pb-4 pl-2">
            My Songs
          </div>
          <div className="space-y-3 overflow-auto">
            {songData.map((item) => {
              return <SingleSongCard info={item} playSound={playSound} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMusic;
