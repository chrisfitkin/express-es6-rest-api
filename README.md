NodeJS RESTful API Boilerplate
==================================


This is a boilerplate for building RESTful APIs with NodeJS.

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)
- Testing via [Mocha](https://github.com/mochajs/mocha)
- Follows RESTful API [best practices](http://gaboesquivel.com/blog/2015/best-practices-for-designing-web-apis/) from [@GaboEsquivel](http://gaboesquivel.com/about/)
- _TODO:_ JWT Authentication inspired by [Chris Sevilleja](https://pub.scotch.io/@chris) at [scotch.io](https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens)

Getting Started
---------------

```sh
# clone it
git clone git@github.com:developit/express-es6-rest-api.git
cd express-es6-rest-api

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start
```

Roadmap
-------
- :white_check_mark: Add version information to endpoint path /api/v0/
- :white_check_mark: Change example endpoint to /posts
- :white_check_mark: Add sample data for /posts
- :white_check_mark: Create Mocha tests for example endpoint
- :white_check_mark: Respond with 201 and Location header for successful POST requests
- :white_medium_square: Add folder structure to README
- :white_medium_square: Add test to build step in packages.json
- :white_medium_square: Rename project to nodejs-rest-api-boilerplate
- :white_medium_square: Update README for example Posts endpoint - /docs/example
- :white_medium_square: Update README for tests - /docs/tests
- :white_medium_square: Create POSTman README - /docs/postman
- :white_medium_square: Create cURLS README - /docs/curl
- :white_medium_square: Add Docker support with Nginx and SSL
- :white_medium_square: Implement JWT authentication <https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens>
- :white_medium_square: Add example code for searching with parameters at GET endpoint
- :white_medium_square: Update REAMDE with best practices reference <http://gaboesquivel.com/blog/2015/best-practices-for-designing-web-apis/>
- :white_medium_square: Create /authors example endpoint
    - :white_medium_square: Update README
    - :white_medium_square: Create test
- :white_medium_square: Create subroute example - /authors/:id/posts
    - :white_medium_square: Update README
    - :white_medium_square: Create test
- :white_medium_square: Return Links with GET /authors endpoint to related posts in res.Links[0...n].href
- :white_medium_square: Standardize format of error responses with JSON and meaningful messages
- :white_medium_square: Add params/querystring based logic to example - /posts?author=Superman
    - :white_medium_square: Update README
    - :white_medium_square: Create test
- :white_medium_square: Provide inline API documentation with examples <http://apidocjs.com/>
- :white_medium_square: Implement uuid.v4() for ids in sample data and POST logic
- :white_medium_square: Move db to importable/global resource for access from /models directory
- :white_medium_square: Provide Heroku deployment example

Forked
------
This project was forked from <https://github.com/developit/express-es6-rest-api>.

License
-------

MIT
