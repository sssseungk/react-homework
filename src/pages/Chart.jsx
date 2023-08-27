import HeaderBar from './../layout/HeaderBar';
import FooterBar from './../layout/FooterBar';
import MusicChartList from './../layout/MusicChartList';



export default function Chart({music}){

  return (
    <div>
      <HeaderBar/>
    <MusicChartList/>
      <FooterBar/>
    </div>
  )
}