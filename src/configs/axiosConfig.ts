import axios from 'axios'
axios.defaults.baseURL = 'https://newsapi.org/v2'
axios.defaults.params = {}
axios.defaults.params['country'] = 'id'
axios.defaults.params['apiKey'] = '4a196315bb374e149c47f89ff05a87c8'
