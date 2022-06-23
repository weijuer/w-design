# Upload 上传

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

## 何时使用

- 当需要上传一个或一些文件时。
- 当需要展现上传的进度时。
- 当需要使用拖拽交互时。

# API

| 参数            | 说明                                                    | 类型     | 默认值      | 版本 |
| --------------- | ------------------------------------------------------- | -------- | ----------- | ---- |
| action          | 后台请求地址                                            | string   | 无          |      |
| multiple        | 是否支持多文件上传                                      | boolean  | false       |      |
| accept          | 文件类型                                                | string   | '\*'        |      |
| data            | 上传时附带的额外参数                                    | object   | 无          |      |
| name            | 后台接收参数名                                          | string   | 'file'      |      |
| disabled        | 是否禁用                                                | boolean  | false       |      |
| drag            | 是否支持拖拽上传                                        | boolean  | false       |      |
| showRemove      | 是否显示删除按钮                                        | boolean  | false       |      |
| tips            | 文件上传提示                                            | string   | 无          |      |
| fileList        | 文件列表                                                | array    | []          |      |
| defaultFileList | 默认文件列表                                            | array    | []          |      |
| headers         | 设置上传的请求头部，IE10 以上有效                       | object   | 无          |      |
| withCredentials | 是否允许跨域上传                                        | boolean  | false       |      |
| beforeUpload    | 上传前的钩子，参数为上传的文件，若返回 false 则停止上传 | function | 无          |      |
| remove          | 删除文件时的钩子，参数为文件对象                        | function | 无          |      |
| fileClick       | 文件点击时的钩子，参数为文件对象                        | function | 无          |      |
| chuncked        | 是否分片上传                                            | boolean  | false       |      |
| chunckSize      | 分片大小，默认 1M                                       | number   | 1024\* 1024 |      |
| threads         | 分片上传并发数，默认 1 个                               | number   | 1           |      |
