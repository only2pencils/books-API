const React = require('react')
const Default = require('./layouts/Default')

function Show ({book}) {
  console.log(book.name)
    return (
      <Default>
        <h2>Show Page</h2>
      </Default>
    )
}

module.exports = Show
