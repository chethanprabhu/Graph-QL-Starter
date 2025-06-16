To run the app. Go to url http://localhost:3000/

Some of the example queries to get started

query ExampleQuery {
  authors {
    id
    name
    bookDetails {
      title
    }
  }

  books {
    title
    authorId
    publishedYear
    authorDetails {
      name
    }
  }
}

mutation AddBook($title: String, $authorId: String) {
  addBook(title: $title, authorId: $authorId) {
    authorId
    title
  }
}
