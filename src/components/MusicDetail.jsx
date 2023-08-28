import useMusicItem from "@/hooks/useMusicItem";
import { useParams } from "react-router-dom"

export default function MusicDetail(){
  const {musicId} = useParams();
  const {data} = useMusicItem(musicId);
  console.log(data);
  return (
    <>
      <h1>디테일 !!</h1>
      {data.title}
      {data.artist}
    </>
  )
}
