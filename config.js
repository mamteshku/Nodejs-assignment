const tokenInfo = {
  secreteKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTUyMjU2NTksImp3dGlkIjoiOXlvejZmIiwiYXVkaWVuY2UiOiJURVNUIiwiZGF0YSI6e30sImV4cCI6MTU1NTIyOTI1OX0.5JDkEAyLEKnghMJ1lsTAy5OAa3hOxg4SkuMoiKXkwSI",
  tokenexp: '1h'
};

const server = {
  api: "/v1/api/",
  database: 'mongodb://localhost/assignment_table'
};


module.exports = {
  tokenInfo: tokenInfo,
  server: server
};
