import { rest } from 'msw'
import { mock } from 'mockjs'

export const handlers = [
  // login
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick'
      })
    )
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
    })

    return res(ctx.delay(1000), ctx.status(202, 'Mocked status'), ctx.json(json))
  })
]
