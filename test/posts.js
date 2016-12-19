/* eslint-env mocha */
process.env.NODE_ENV = 'test'

import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src'

chai.use(chaiHttp)

import posts from '../src/models/posts'

let newPost = {}

describe('Posts', () => {
  describe('GET /posts', () => {
    it('should list ALL posts', (done) => {
      chai.request(app.server)
        .get('/api/v0/posts')
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res).to.be.json
          expect(res.text).to.be.an('string')
          expect(res.text).to.equal(JSON.stringify(posts))
          done()
        })
    })
  })

  describe('POST /posts', () => {
    it('should return 201 with Header Location URI for the new post', (done) => {
      const post = {
        message: 'With great power comes great responsibility.',
        author: 'Uncle Ben'
      }

      chai.request(app.server)
        .post(`/api/v0/posts`)
        .send(post)
        .end((err, res) => {
          expect(res.status).to.equal(201)
          expect(res.header.location).to.be.a('string')
          expect(res.text).to.be.an('string')
          newPost = JSON.parse(res.text)
          done()
        })
    })
  })

  describe('GET /posts/:id', () => {
    it('should list ONE post', (done) => {
      const post = {
        id: 'g95etya0720',
        message: 'Life doesn\'t give us purpose. We give life purpose.',
        author: 'The Flash'
      }

      chai.request(app.server)
        .get(`/api/v0/posts/${post.id}`)
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res).to.be.json
          expect(res.text).to.be.an('string')
          expect(res.text).to.equal(JSON.stringify(post))
          done()
        })
    })

    it('should return 404 Not found for invalid :id', (done) => {
      const post = {
        id: 'h93jhf8737'
      }
      const body = 'Not found'

      chai.request(app.server)
        .get(`/api/v0/posts/${post.id}`)
        .end((err, res) => {
          expect(res.status).to.equal(404)
          expect(res).to.be.an('object')
          expect(res.text).to.be.an('string')
          expect(res.text).to.equal(body)
          done()
        })
    })
  })

  describe('PUT /posts/:id', () => {
    it('should return an updated post', (done) => {
      const post = {
        id: newPost.id,
        author: 'Peter Parker'
      }
      
      chai.request(app.server)
        .put(`/api/v0/posts/${post.id}`)
        .send(post)
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res).to.be.json
          expect(res.text).to.be.an('string')
          expect(JSON.parse(res.text).author).to.equal(post.author)
          done()
        })
    })
  })

  describe('DELETE /posts/:id', () => {
    it('should return 204 No Content', (done) => {
      const post = {
        id: newPost.id,
      }
      
      chai.request(app.server)
        .delete(`/api/v0/posts/${post.id}`)
        .end((err, res) => {
          expect(res.status).to.equal(204)
          done()
        })
    })
  })
})
