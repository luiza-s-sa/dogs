import React from 'react';
import FeedModal from './FeedModal.jsx';
import FeedPhotos from './FeedPhotos.jsx';

const Feed = ({ user }) => {
  // aqui definimos que a foto a ser exibida no modal é um estado reativo. no retorno passamos que, se modalPhoto existir, mostre FeedModal (o componente do modal) e passamos a informação de que a photo é a modalPhoto.
  // a propriedade 'photo' que passamos no FeedModal é uma propriedade que criamos, poderia ter qualquer nome, o importante é que foi ela que passamos como argumento no componente FeedModal! precisa ter o mesmo nome.
  // precisamos também conseguir alterar o setModalPhoto lá no FeedPhotos, pois é ao clicar em uma delas que o modal é aberto. por isso passamos setModalPhoto como propriedade para acessar lá no FeedPhotos!
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && wait === false) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }
    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          user={user}
          key={page}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

export default Feed;
