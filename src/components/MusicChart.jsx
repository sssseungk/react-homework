
export default function MusicChart({music}){

  return (
    <div>
      <ul>
        <li className="flex items-center border-4 p-1 mb-5">
          <strong className="mx-5">{music.id}</strong>
          <div className="flex items-center flex-grow">
            <img src={music.src} alt="" className="w-12 h-12"/>
            <strong className="ml-5 text-sm">{music.title}</strong>
          </div>
          <span className="text-sm mr-5">{music.artist}</span>
        </li>
      </ul>
    </div>
  )

}