import HeaderBar from "./HeaderBar";
import FooterBar from './FooterBar';
import MusicList from './MusicList';
import { Outlet } from "react-router-dom";



export default function RootLayout(){

  return (
    <div>
      <HeaderBar/>
      {/* <Outlet/> */}
      <MusicList/>
      <FooterBar/>
    </div>

  );
}

