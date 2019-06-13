if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: 'mongodb+srv://vidjot-seoho:Amsmdmfm1@@vidjot-prod-dby70.mongodb.net/test?retryWrites=true&w=majority'
  }
} else {
  module.exports = {
    mongoURI: 'mongodb://localhost/vidjot-dev'
  }
}