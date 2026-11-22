import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router';

const UserHeader = () => {
  const location = useLocation();
  const { pathname } = location;

  let title;

  switch (pathname) {
    case '/conta/postar':
      title = 'Poste Sua Foto';
      break;
    case '/conta/estatisticas':
      title = 'Estatísticas';
      break;
    default:
      title = 'Minha Conta';
  }

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
