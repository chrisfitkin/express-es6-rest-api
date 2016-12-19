/* eslint-env mocha */
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import { createServer } from '../server'

chai.use(chaiHttp)

// import fakeDB from '../server/fakeDB.js'
import { version } from '../../package.json'

const server = createServer({
  nodeEnv: 'test',
  webConcurrency: process.env.WEB_CONCURRENCY || 1,
  port: process.env.PORT || 5000,
  timeout: 29000
})

describe('API', () => {
  it('should return API version at /api GET', (done) => {
    chai.request(server)
      .get('/api')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res).to.be.json
        expect(res.text).to.be.an('string')
        expect(res.text).to.equal(JSON.stringify({ version }))
        done()
      })
  })

//   it('should list ALL posts on api/v0/posts GET', (done) => {
//     chai.request(server)
//       .get('/api/v0/posts')
//       .end((err, res) => {
//         expect(res.status).to.equal(200)
//         expect(res).to.be.json
//         expect(res.text).to.be.an('string')
//         expect(res.text).to.equal(JSON.stringify(fakeDB))
//         done()
//       })
//   })
})
