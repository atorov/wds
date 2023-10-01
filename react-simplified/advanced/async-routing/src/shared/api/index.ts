import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/',
});

// if (import.meta.env.VITE_SLOW_API === 'true') {
//     api.interceptors.response.use((res) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(res);
//             }, 1000);
//         });
//     });
// }

export default api;
