export const API_URL = 'https://dogsapi.origamid.dev/json';

// criamos uma função para cada endpoint. nome das funções = nome do endpoint + tipo de método que utiliza

// fetch para ENVIAR os dados do usuário e acessar o TOKEN
// função que vai ser utilizada para enviar os dados do usuário, acessar o token e armazená-lo no local storage
export function TOKEN_POST(body) {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    },
  };
}

// fecth para VALIDAR o token
// função que vai ser utilizada no useEffect, dentro da função autoLogin, para verificar se o token armazenado é um token válido e então fazer login automático
export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + token },
    },
  };
}

// função para FAZER LOGIN
// função que será utilizada para fazer o login do usuário. o login será feito através do token do usuário, que será acessado utilizando a função TOKEN_POST
export function USER_GET(token) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + token },
    },
  };
}

// função para POSTAR O USUÁRIO/CADASTRAR
export function USER_POST(body) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    },
  };
}

// função para POSTAR FOTO DO USUÁRIO
export function PHOTO_POST(formData, token) {
  return {
    url: API_URL + '/api/photo',
    options: {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + token },
      body: formData,
    },
  };
}

// função para PUXAR FOTOS PARA O FEED
export function PHOTOS_GET({ page, total, user }) {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

// função para PUXAR FOTO PARA O MODAL!
export function PHOTO_GET(id) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

// função para postar comentários
export function COMMENT_POST(id, body) {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      body: JSON.stringify(body),
    },
  };
}

// função para deletar foto
export function PHOTO_DELETE(id) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}

// função para quando o usuário perdeu a senha
export function PASSWORD_LOST(body) {
  return {
    url: API_URL + '/api/password/lost',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

// função para resetar a senha
export function PASSWORD_RESET(body) {
  return {
    url: API_URL + 'api/password/reset',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

// função para buscar estatísticas
export function STATS_GET() {
  return {
    url: API_URL + '/api/stats',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}
