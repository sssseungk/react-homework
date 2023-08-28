import { useParams } from "react-router-dom"
import HeaderBar from './../layout/HeaderBar';
import FooterBar from "@/layout/FooterBar";
import MusicDetail from './../components/MusicDetail';

export default function Detail(){
  const { musicTitle } = useParams();

  return (
    <>
      <HeaderBar/>
      <MusicDetail/>
      <FooterBar/>
    </>
    
    
  )
}
