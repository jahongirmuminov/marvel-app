import axios from 'axios'

export const api = () => {
    return axios.create({
      baseURL: "http://gateway.marvel.com/v1/public/",
      headers: {
        'Content-Type': 'application/json',
      },   
    });
  };


 