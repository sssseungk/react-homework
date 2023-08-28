import useFetchData from './useFetchData';

const getEndpoint = (productId) =>
  `http://127.0.0.1:8090/api/collections/musics/records/${productId}`;


function useMusicItem(productId) {
  const responseData = useFetchData(getEndpoint(productId));
  return responseData;
}

export default useMusicItem; 
