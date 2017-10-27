import { api } from './base';

function getNearEvents({ lat, lng }) {
  return api.get(`/myplace?lat=${lat}&lng=${lng}`)
    .then((res) => (res));
}

export default {
  getNearEvents,
};