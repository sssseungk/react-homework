import HeaderBar from "./HeaderBar";
import FooterBar from './FooterBar';
import MusicList from './MusicList';


export default function RootLayout(){

  return (
    <div>
      <HeaderBar/>
      <MusicList/>
      <FooterBar/>
    </div>

  );
}

