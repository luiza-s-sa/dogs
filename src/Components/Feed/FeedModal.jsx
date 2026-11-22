import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../Interface-Elements/Error';
import Loading from '../Interface-Elements/Loading';
import PhotoContent from '../Photo/PhotoContent';

// 'photo' é apenas o nome da propriedade que passamos lá no componente dentro de Feed para definir o estado de modalPhoto! vamos usar este dado para fazer o fetch da foto com os comentários!
// (se dá console.log em photo e em data, são coisas diferentes! usamos a photo para fazer o fetch e puxar data, que contém os comentários)
const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  // como vamos mostrar os comentários no modal, queremos que mostre sempre que ele estiver ativo:
  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(e) {
    if (e.target === e.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
