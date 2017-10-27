import axios from 'axios';

import config from '../../env/config';

const base = () => (
  axios.create({
    baseURL: config.host,
    headers: { 'Content-Type': 'application/json' }
  })
);

export const api = base();