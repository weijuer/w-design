// 1. Import mocking utils.
import { setupWorker, rest } from 'msw'

// 2. Define request handlers and response resolvers.
const worker = setupWorker(
  rest.get('/test', (req, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.status(202, 'Mocked status'),
      ctx.json({
        message: 'Mocked response JSON body'
      })
    )
  })
)

// 3. Start the Service Worker.
worker.start()
