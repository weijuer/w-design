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

  rest.post('/w-table', (req, res, ctx) => {
    const { pageSize, currentIndex } = req.body;

    // 模拟数据接口
    const data = mock({
      code: 10000,
      data: {
        total: 50,
        currentIndex,
        pageSize,
        'list|10': [
          {
            'id|+1': 1,
            name: '@cname', // 姓名
            birthday: '@date', // 生日
            'sex|1': ['男', '女'], // 性别
            'age|+1': 20, // 年龄
            'status|1': [1, 2, 3] // 状态
          }
        ]
      }
    });

    return res(ctx.delay(1000), ctx.status(202, 'Mocked status'), ctx.json(data));
  })
];
