import MusicItem from "@/components/MusicItem";

const musics = [
  {
    id: 1,
    title: '아지랑이',
    src: '/assets/lucy-ten.jpg',
    artist : 'LUCY',
    time: '04:15'
  },
  {
    id: 2,
    title: 'Brain',
    src: '/assets/brain.jpg',
    artist : '양요섭',
    time: '03:28'

  },
  {
    id: 3,
    title: 'Grace',
    src: '/assets/Grace.jpg',
    artist : 'ADOY',
    time: '04:05'
  },
  {
    id: 4,
    src: '/assets/12.jpg',
    title: '결국 아무것도 알 수 없었지만',
    artist : 'LUCY',
    time: '03:59'
  },
  {
    id: 5,
    src: '/assets/13.jpg',
    title: 'Open Arms',
    artist : 'LUCY',
    time: '03:11'
  },
  {
    id: 6,
    src: '/assets/14.jpg',
    title: 'Steal The Show',
    artist : 'Lauv',
    time: '03:59'
  },
  {
    id: 7,
    src: '/assets/15.jpg',
    title: 'Bubble',
    artist : 'STAYC',
    time: '02:59'
  },
  {
    id: 8,
    src: '/assets/eta.jpg',
    title: 'ETA',
    artist : 'NewJeans',
    time: '02:31'
  }
];

export default function MusicList(){

  return (
    <div className="flex justify-around my-10 flex-wrap">
      {musics.map(music => (
        <MusicItem music={music} key={music.id} />
      ))}
    </div>
  )

}