import axios from "axios"

axios.defaults.headers.post['Content-Type'] = 'application/json;charSet=UTF-8'
axios.defaults.headers.get['Content-Type'] = 'application/json;charSet=UTF-8'
axios.defaults.headers.put['Content-Type'] = 'application/json;charSet=UTF-8'
axios.defaults.headers.delete['Content-Type'] = 'application/json;charSet=UTF-8'
axios.defaults.headers.patch['Content-Type'] = 'application/json;charSet=UTF-8'

const consumerPort = 8081
const chatPort = 8082;
const host = "http://127.0.0.1"
const BaseHost = host + ":" + consumerPort
const ClientHost = host + ":" + consumerPort + "/client"
const ConsumerHost = host + ":" + consumerPort + "/client"
const chatHost = host + ":" + chatPort
const BackSystemHost = "http://localhost:9091"
export default {
    ClientHost,
    host,
    BaseHost,
    ConsumerHost,
    chatHost,
    BackSystemHost
}

let header = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json;charset=UTF-8',
}

// get请求
export function get(url, params, serviceSuccessCallBack, serviceErrorCallBack) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then((res) => {
            //请求成功
            if (res.status === 200) {
                if (serviceSuccessCallBack == null) {
                    console.log('serviceSuccessCallback');
                } else {
                    serviceSuccessCallBack(res);
                    console.log(res);
                }
            } else {
                serviceSuccessCallBack(res);
            }
            resolve(res.data);
        }).catch(err => {
            //请求失败
            reject(err.data);
            serviceErrorCallBack(err);
        })
    });
}

export function getRequest(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
        }).then((res) => {
            //请求成功
            resolve(res.data);
        }).catch(err => {
            //请求失败
            reject(err.data);
        })
    });
}

export function getRequestWithToken(url, params, token) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
            headers: {"token": token}
        }).then((res) => {
            //请求成功
            resolve(res.data);
        }).catch(err => {
            //请求失败
            reject(err.data);
        })
    });
}

//post方法
export function postRequest(url, data) {
    let options = {
        method: 'POST',
        headers: header,
        data: data,
        url: url
    };
    return new Promise((resolve, reject) => {
        axios(options).then(res => {
            resolve(res.data);
        }).catch(function (err) {
            reject(err);
        })
    })
}

export function postRequestWithToken(url, data, token) {
    let options = {
        method: 'POST',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json;charset=UTF-8',
            'token': token
        },
        data: data,
        url: url
    };
    return new Promise((resolve, reject) => {
        axios(options).then(res => {
            resolve(res.data);
        }).catch(function (err) {
            reject(err);
        })
    })
}


export function putRequest(url, data = {}) {
    let options = {
        method: 'PUT',
        headers: header,
        data: data,
        url: url
    };
    return new Promise((resolve, reject) => {
        axios(options).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

export function putRequestWithToken(url, data = {}, token) {
    let options = {
        method: 'PUT',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json;charset=UTF-8',
            "token": token
        },
        data: data,
        url: url
    };
    return new Promise((resolve, reject) => {
        axios(options).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

//httpRequest
export function httpRequest(method, url, data, serviceSuccessCallBack, serviceErrorCallBack) {
    let options = {
        method: method,
        headers: header,
        data: data,
        url: url
    };
    return new Promise((resolve, reject) => {
        axios(options).then(res => {
            if (res.status === 200) {
                if (serviceSuccessCallBack == null) {
                    console.log('serviceSuccessCallback');
                } else {
                    serviceSuccessCallBack(res);
                    console.log(res);
                }
            } else {
                serviceSuccessCallBack(res);
            }
            resolve(res);
        })
            .catch(function (err) {
                reject(err);
                serviceErrorCallBack(err);
            })
    })
}

export function deleteRequest(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.delete(url, params).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}




