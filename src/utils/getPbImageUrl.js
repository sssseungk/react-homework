export const getPbImageURL = (item, fileName = 'image') =>
  `http://127.0.0.1:8090/api/files/${item.collectionId}/${item.id}/${item[fileName]}`

