import axios from 'axios';

const nameUrl = axios.create({
	baseURL: 'https://api.spacexdata.com/v3/launches?'
})

export default nameUrl