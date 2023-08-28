import MusicItem from "@/components/MusicItem";
import useFetchData from "@/hooks/useFetchData";

const PB_PRODUCTS_ENDPOINT = `http://127.0.0.1:8090/api/collections/musics/records`;

// const musics = [
//   {
//     id: 1,
//     title: '아지랑이',
//     src: '/images/lucy-ten.jpg',
//     artist : 'LUCY',
//     time: '04:15'
//   },
//   {
//     id: 2,
//     title: 'Brain',
//     src: '/images/brain.jpg',
//     artist : '양요섭',
//     time: '03:28'

//   },
//   {
//     id: 3,
//     title: 'Grace',
//     src: '/images/Grace.jpg',
//     artist : 'ADOY',
//     time: '04:05'
//   },
//   {
//     id: 4,
//     src: '/images/12.jpg',
//     title: '결국 아무것도 알 수 없었지만',
//     artist : 'LUCY',
//     time: '03:59'
//   },
//   {
//     id: 5,
//     src: '/images/13.jpg',
//     title: 'Open Arms',
//     artist : 'LUCY',
//     time: '03:11'
//   },
//   {
//     id: 6,
//     src: '/images/14.jpg',
//     title: 'Steal The Show',
//     artist : 'Lauv',
//     time: '03:59'
//   },
//   {
//     id: 7,
//     src: '/images/15.jpg',
//     title: 'Bubble',
//     artist : 'STAYC',
//     time: '02:59'
//   },
//   {
//     id: 8,
//     src: '/images/eta.jpg',
//     title: 'ETA',
//     artist : 'NewJeans',
//     time: '02:31'
//   }
// ];

export default function MusicList(){

  const { data } = useFetchData(PB_PRODUCTS_ENDPOINT);


  return (
    <div className="flex justify-around my-10 flex-wrap">
      {data &&
        data.items &&
        data.items?.map(music => (
        <>
          <MusicItem music={music} key={music.id} />
        </>
      ))}
    </div>
  )
}


