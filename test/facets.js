/* eslint-env mocha */
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src'

chai.use(chaiHttp)

import facets from '../src/models/facets'

describe('Facets', () => {

  it('should list ALL facets on api/v0/facets GET', (done) => {
    chai.request(app.server)
      .get('/api/v0/facets')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res).to.be.json
        expect(res.text).to.be.an('string')
        expect(res.text).to.equal(JSON.stringify(facets))
        done()
      })
  })

  it('should list ONE facet on api/v0/facets/:id GET', (done) => {
    const facet = {
      id: 'g95etya0720',
      message: 'Life doesn\'t give us purpose. We give life purpose.',
      author: 'The Flash'
    }

    chai.request(app.server)
      .get(`/api/v0/facets/${facet.id}`)
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res).to.be.json
        expect(res.text).to.be.an('string')
        expect(res.text).to.equal(JSON.stringify(facet))
        done()
      })
  })

  it('should return 404 Not found for invalid :id on api/v0/facets/:id GET', (done) => {
    const facet = {
      id: 'h93jhf8737'
    }
    const body = 'Not found'

    chai.request(app.server)
      .get(`/api/v0/facets/${facet.id}`)
      .end((err, res) => {
        expect(res.status).to.equal(404)
        // console.log('res: ', res)
        // console.log('res.text: ', res.text)
        expect(res).to.be.an('object')
        expect(res.text).to.be.an('string')
        expect(res.text).to.equal(body)
        done()
      })
  })
})
