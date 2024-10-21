import { urlClientServer } from '../types/swagger';

const URL_CLIENT: urlClientServer = {
  development: 'http://localhost:3000',
  staging: 'https://staging.example.com',
  production: 'https://example.com',
};

const URL_SERVER: urlClientServer = {
  development: `http://localhost:${process.env.PORT || 8000}`,
  staging: 'https://api-staging.example.com',
  production: 'https://api.example.com',
};

const ENV: string = process.env.NODE_ENV || 'development';

// @ts-ignore
const BASE_URL_CLIENT: urlClientServer = URL_CLIENT[ENV];
// @ts-ignore
const BASE_URL_SERVER: urlClientServer = URL_SERVER[ENV];

export { BASE_URL_CLIENT, BASE_URL_SERVER };
