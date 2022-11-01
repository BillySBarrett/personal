import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

    return (
        <div className="min-w-screen min-h-screen justify-center flex flex-col items-center">
            <p className="font-extralight relative right-20">{"i know it's cliche but"}</p>
            <div className="font-bold text-3xl">
                {/* Text wheel with hello in different languages */ }
                <TextWheel
                    textArray={[
                        "Hei",
                        "Hola",
                        "Hello",
                        "Bonjour",
                        "Ciao",
                        "Hallo",
                        "Hej",
                        "Olá",
                        "Nǐ hǎo",
                        "Konnichiwa",
                        "Namaste",
                        "Salaam",
                        "Sawubona",
                        "Sawasdee",
                        "Ahoj",
                        "Zdravo",
                        "Sveiki",
                        "Szia",
                        "Hei",
                        "Saluton"
                    ]}
                />
                <p className="font-extralight text-4xl"> my name is <span className="font-bold ">billy..</span></p>
            </div>
            <p className="font-extralight text-xl relative left-20 pt-4">tell me something i know nothing about</p>
            <div className="flex flex-col items-center pt-12 text-2xl">
                <p className="font-extralight">songs and albums picked with love {"<3"}</p>
                <RandomMusicVideo />
            </div>
        </div>
    )
}

const TextWheel = ({ textArray }: { textArray: Array<string>}) => {
    const [index, setIndex] = useState(0);
    const [textWheel, setTextWheel] = useState(textArray[0]);

    const changeText = () => {
        if (index < textArray.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
        setTextWheel(textArray[index]);
      }
    setTimeout(() => {changeText()}, 4000);
    return (
        <div className="">
            <p>{textWheel}!</p>
        </div>
    )
}

const RandomMusicVideo = () => {
  {/* Random music video from a list of my favorite music videos */ }
  const musicVideos = [
    {title: 'Nala Sinephro - Space 1.8 (Full Album)', url: 'https://www.youtube.com/watch?v=Qqi_EZ0DgrA&ab_channel=NalaSinephro'},
    {title: 'Men I Trust - Oncle Jazz', url: 'https://www.youtube.com/watch?v=iVg30U6O764&t=2s&ab_channel=MenITrust'},
    {title: 'João Gilberto - Valsa (Como são lindos os yoguis)', url: "https://www.youtube.com/watch?v=4tp-OghkvrI&ab_channel=MarceloMaldonado"},
    {title: 'Masayoshi Takanaka – All Of Me (1979)', url: 'https://www.youtube.com/watch?v=BNig6xG36i4&ab_channel=TerminalPassage'},
    {title: 'The Beatles - Norwegian Wood (This Bird Has Flown)', url: 'https://www.youtube.com/watch?v=Qq7Z3Z1YQqU&ab_channel=TheBeatles'},
    {title: 'Matt Martians - The Drum Chord Theory' , url: 'https://www.youtube.com/watch?v=j1JYPRQcVK0&ab_channel=Veltron'},
    {title: '(1983) Toshiki Kadomatsu - On the City Shore (Full Album)', url: 'https://www.youtube.com/watch?v=FWV7wBl5YVw&ab_channel=XearchingForSounds'},
    {title: '[1983] Mari Iijima - Rosé [Full Album]', url: 'https://www.youtube.com/watch?v=x4aR4Je7nZ0&ab_channel=XearchingForSounds'},
    {title: 'Masayoshi Takanaka - The Rainbow Goblins' , url: 'https://www.youtube.com/watch?v=MzYD56hKF-8&ab_channel=%E9%A2%A8%E3%81%AE%E9%9F%B3'},

  ];
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * musicVideos.length));
  }, []);

  return (
    <div className="font-semibold flex flex-col pt-2">
      <Link href={musicVideos[randomNumber].url}>{musicVideos[randomNumber].title}</Link>
      {/* refresh music button */}
      <button onClick={() => setRandomNumber(Math.floor(Math.random() * musicVideos.length))}>🔁</button>
    </div>
  )
}