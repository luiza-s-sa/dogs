import React from 'react';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import { Route, Routes } from 'react-router';
import Feed from '../Feed/Feed';
import UserStats from './UserStats';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';
import Head from '../Interface-Elements/Head';

const User = () => {
  const usuario = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={usuario.data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
