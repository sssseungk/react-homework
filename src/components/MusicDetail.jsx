import useMusicItem from "@/hooks/useMusicItem";
import { useParams } from "react-router-dom"
import { getPbImageURL } from '@/utils/getPbImageUrl';
import { useState } from "react";

export default function MusicDetail(){
  const {musicId} = useParams();
  const {data} = useMusicItem(musicId);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div className="p-5">
      <div className="flex m-20 ">
        <img src={getPbImageURL(data, 'image')} alt={data.title} className="w-[480px] h-[480px]"></img>
        <div className="ml-14 flex-col" >
          <h1 className="text-5xl mb-2">{data.title}</h1>
          <div className="flex flex-col ml-2">
            <span className="mb-1">{data.artist}</span>
            <div className="text-xl">
              <span>{data.date}  &#183;  </span>
              <span>{data.genre}  &#183;  </span>
              <span>{data.count}곡  &#183;  </span>
              <span>{data.totaltime}</span>
            </div>
            <span className="mt-2 text-lg overflow-hidden overflow-ellipsis line-clamp-6">{data.description}</span>
            <div className="mt-8 mr-5 text-xl text-white">
              <div className="flex items-center">
                <button className="flex items-center bg-blue-700 opacity-80 rounded-lg w-40 h-12 mr-5 hover:bg-blue-950 justify-center">
                  <span className="material-symbols-outlined pr-2">play_arrow</span>
                  Play
                </button>
                <button className="flex items-center bg-blue-700 opacity-80 rounded-lg w-40 h-12 mr-5 hover:bg-blue-950 justify-center">
                <span className="material-symbols-outlined pr-2">shuffle</span>
                  Shuffle
                </button>
                <button className="flex items-center bg-blue-700 opacity-80 rounded-lg w-40 h-12 mr-5 hover:bg-blue-950 justify-center">
                  <span className="material-symbols-outlined pr-2">download</span>Download
                </button>
                <div className="ml-5">
                  <button>
                    <span className="material-symbols-outlined text-gray-600 scale-150">more_horiz</span>
                  </button>
                  <button className="ml-10">
                    <span className={`material-symbols-outlined scale-150 ${isClicked ? 'text-red-600' : 'text-gray-600'}`} onClick={handleClick}>heart_plus</span>
                  </button>
                </div>
                
              </div>
            </div>
          </div> 
          
        </div>
      </div>
    </div>
  )
}
