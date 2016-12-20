Express & ES6 REST API Boilerplate
==================================

TODO
---------------
- Complete Initial Tests (/)
- Update Readme: posts, tests, fork
- Update Readme: sample requests, postsman, curl
- REST best practices: 201, location (http://gaboesquivel.com/blog/2015/best-practices-for-designing-web-apis/)
- Create subroute
- return Links for parent
- implement search with querystring at get :id
- uuid.v4() for all ids (facets + POST)
- Formatted errors
- Add test for author search
- Move db to importable/global resource
- Heroku deployment

This is a straightforward boilerplate for building REST APIs with ES6 and Express.

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)

> Tip: If you are using [Mongoose](https://github.com/Automattic/mongoose), you can automatically expose your Models as REST resources using [restful-mongoose](https://git.io/restful-mongoose).

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


License
-------

MIT
