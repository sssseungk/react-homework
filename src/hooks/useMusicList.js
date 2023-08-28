import useFetchData from './useFetchData';

const endpoint = `http://127.0.0.1:8090/api/collections/musics/records`;

function useMusicList() {
  const responseData = useFetchData(endpoint);
  return responseData;
}

export default useMusicList;