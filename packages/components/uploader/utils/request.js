const processResponse = response => {
    if (typeof response === 'string') {
        try {
            return JSON.parse(response)
        } catch (e) {
            return response
        }
    }
    return response
}

/**
 * 文件上传
 * @param url 上传地址
 * @param name 上传文件的`key`值，需要和后端约定
 * @param file 上传的File对象
 * @param data 除文件外的其它参数，类型为object
 * @param headers 请求头，类型为object
 * @param withCredentials 是否携带cookie信息，默认为false
 * @param onSuccess 上传成功后的回调
 * @param onError 上传失败后的回调
 * @param onProgress 上传进度回调
 * @returns {XMLHttpRequest}
 */
const request = ({
    url,
    name,
    file,
    data,
    headers,
    withCredentials,
    onSuccess,
    onError,
    onProgress
}) => {
    // 构建xhr对象
    const xhr = window.XMLHttpRequest
        ? new XMLHttpRequest()
        : new window.ActiveXObject('Microsoft.XMLHTTP')

    // 添加自定义请求头
    if (headers) {
        for (let key in headers) {
            if (headers.hasOwnProperty(key) && headers[key]) {
                xhr.setRequestHeader(key, headers[key])
            }
        }
    }

    // 设置跨域请求
    if (withCredentials) {
        xhr.withCredentials = true
    }

    // 上传进度
    xhr.upload.addEventListener('progress', e => {
        e.percent = (e.loaded / e.total) * 100
        onProgress(e)
    })

    // 创建formData对象
    const formData = new FormData()
    formData.append(name, file)
    // 添加除文件外的其它参数
    if (data) {
        Object.keys(data).forEach(key => {
            formData.append(key, data[key])
        })
    }

    // 请求成功回调
    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = processResponse(xhr.responseText)
            onSuccess(response)
        } else {
            // 上传失败
            onError(new Error('upload request failed!'))
        }
    })
    // 请求出错
    xhr.addEventListener('error', e => {
        onError(e)
    })
    // 初始化请求
    xhr.open('POST', url, true)
    // 发送数据
    xhr.send(formData)

    return xhr
}

export default request
