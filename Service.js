import Axios from "axios";
const http = Axios.create({
    baseURL: import.meta.env.VITE_API,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;json/html; charset=UTF-8',
        // 'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    }
});

export default http;

export function GetScoreBySupplier(param) {
    return http.post('/getScoreBySupplier', param)
}

// export function GetSupplier(param: any) {
//     return new Promise<AL_Vendor[]>(resolve => {
//         http.get('/supplier/list', param).then((res) => {
//             resolve(res.data);
//         })
//     })
// }

export function servGetEquipment() {
    return new Promise(resolve => {
        http.get(`/equipment`).then((res) => {
            resolve(res.data);
        })
    })
}
export function GetPoint() {
    return new Promise(resolve => {
        http.get(`/point/get`).then((res) => {
            resolve(res.data);
        })
    })
}

export function InsertPoint(param) {
    return new Promise<MResponse>(resolve => {
        http.post(`/setpoint`, param).then((res) => {
            resolve(res.data);
        })
    })
}