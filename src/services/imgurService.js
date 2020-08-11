import axios from 'axios'
import FormData from 'form-data'

let data = new FormData()
let config = {
  method: 'post',
  url: 'https://api.imgur.com/3/image',
  headers: { 
    'Authorization': `Client-ID 6f6d5293fd45be2`, 
  },
  data
};

export const uploadPhoto = photo => {
  config.data.append('image', photo)
  return axios(config)
}