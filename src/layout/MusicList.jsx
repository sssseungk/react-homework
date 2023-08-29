import useMusicList from "@/hooks/useMusicList";
import { getPbImageURL } from "@/utils/getPbImageUrl";
import { Link } from "react-router-dom";


export default function MusicList(){

  const { data:musics } = useMusicList();


  return (
    <div className="flex flex-col items-center">
      <ul className="flex justify-around my-10 flex-wrap">
        {musics &&
        musics.items?.map((music) => {
          return (
            <li key={music.id}>
              <Link to={`/music/detail/${music.id}`}>
              <div className="border-solid border-2 w-80 h-90 mb-10 hover:transition-all hover:scale-110">
                <img src={getPbImageURL(music, 'image')} alt={music.title} className="w-full h-60" />
                <div className="z-50 bg-white p-1 pl-4">
                  <h1 className="text-sm font-[700] mt-1">{music.title}</h1>
                  <div className="flex items-center my-1 relative">
                    <img src={getPbImageURL(music, 'profile')} alt=""  className="rounded-full w-10 h-10" />
                    <h2 className="ml-3 text-sm">{music.artist}</h2>
                    <span className="text-sm absolute right-3">{music.totaltime}</span>
                  </div>
                </div>
              </div>
              </Link>
            </li>
          )        
        })}
      </ul>
      <Link to='/new'>
        <button className="bg-slate-300 rounded-xl w-40 h-14 mb-10 hover:bg-slate-600 hover:text-white">Add Music</button>
      </Link>
    </div>

  )
}
