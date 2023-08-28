import useFetchData from "@/hooks/useFetchData";
import { getPbImageURL } from "@/utils/getPbImageUrl"
import { Link } from "react-router-dom";
import MusicDetail from './MusicDetail';



export default function MusicItem({music}){

  return(
    <>
      <Link to={`/music/detail/${music.title}`}>
        <div className="border-solid border-2 w-80 h-90 mb-10 hover:transition-all hover:scale-110">
          <img src={getPbImageURL(music, 'image')} alt={music.title} className="w-full h-60" />
          <div className="z-50 bg-white p-1 pl-4">
            <h1 className="text-sm font-[700] mt-1">{music.title}</h1>
            <div className="flex items-center my-1">
              <img src={getPbImageURL(music, 'profile')} alt=""  className="rounded-full w-10 h-10" />
              <h2 className="ml-3 text-sm">{music.artist}</h2>
              <span className="text-sm ml-36">{music.time}</span>
            </div>
          </div>
        </div>
      </Link>
    </>

  )
}


