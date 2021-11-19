import { rest } from 'msw';
import { mock } from 'mockjs';

export const handlers = [
  // login
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body;

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick'
      })
    );
  }),

  rest.get('/test', (req, res, ctx) => {
    const json = mock({
      code: 10000,
      data: {
        ['totalCount']: 33,
        'list|10': [
          {
            username: '@name'
          }
        ]
      }
    });

    return res(ctx.delay(1000), ctx.status(202, 'Mocked status'), ctx.json(json));
  }),

  rest.get('/w-table', (req, res, ctx) => {
    // 模拟数据接口
    const data = mock({
      code: 10000,
      data: {
        'total|100-200': 25,
        'currentPage|1-20': 1,
        pageSize: 100,
        'list|10': [
          {
            'id|+1': 1,
            'version|1': [3.15, 3.14], // 版本
            'device|1': [1, 2, 3, 4], // 客户端
            content: '@csentence', // 更新内容
            'isForceUpdate|1': [1, 2], // 强制更新
            'updateType|1': [1, 2, 3], // 更新方式
            'sendTime|1': '@datetime', // 发布时间
            'strategy|1': [1, 2], // 更新策略
            'isUpdate|1': [1, 2], // 更新首页安装包
            'status|1': [1, 2, 3], // 状态
            'size|1': '120Mb' // 大小
          }
        ]
      }
    });

    return res(ctx.delay(1000), ctx.status(202, 'Mocked status'), ctx.json(data));
  })
];
