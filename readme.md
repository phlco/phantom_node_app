# Testing grunt with Jasmine and Phantomjs.

Requires `npm`

Install dependencies with `npm install`

Run tests with `grunt jasmine`

Includes Travis setup.

# Prereqs

Install `node` and `npm`

```
$ brew install node
```

Install Grunt command line interface

```
npm install -g grunt-cli
```

# Setup

Create a `package.json` file

```
$ npm init
```

Add dependencies

```
$ npm install grunt --save-dev
$ npm install grunt-contrib-watch --save-dev
$ npm install grunt-contrib-jasmine --save-dev # bug
```

`--save-dev` writes to `package.json`

Install dependencies

```
$ npm install
```

Create a `Gruntfile.js`

Add grunt tasks

Run tests with `grunt jasmine`


