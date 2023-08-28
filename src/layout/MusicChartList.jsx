import MusicChart from './../components/MusicChart';
import useFetchData from "@/hooks/useFetchData";

const PB_PRODUCTS_ENDPOINT = `http://127.0.0.1:8090/api/collections/musics/records`;

export default function MusicChartList(){

  const { data } = useFetchData(PB_PRODUCTS_ENDPOINT);
  return (
    <div className="m-10 w-3/5 text-center mx-auto my-0 mt-10">
      <h1 className="mb-6">Your Chart</h1>
      {data.items?.map(music => (
        <>
        <MusicChart music={music} key={music.id}/>
        </>
      ))}
    </div>
  )

}