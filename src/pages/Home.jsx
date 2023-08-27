import MusicList from "@/layout/MusicList";
import HeaderBar from './../layout/HeaderBar';
import FooterBar from './../layout/FooterBar';

export default function Home(){

  return (
    <div>
      <HeaderBar/>
      <MusicList/>
      <FooterBar/>
    </div>
  )
}