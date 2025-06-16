import gql from 'graphql-tag';

export const typeDefs = gql`

    type Author {
        id: ID
        name: String
        bookIds: [String]
        bookDetails: [Book]
    }

    type Book {
        id: ID
        title: String
        publishedYear: Int
        authorId: String
        authorDetails: Author
    }

    type Query {
        authors: [Author]
        books: [Book]
    }

    type Mutation {
        addBook(title: String, authorId: String): Book
    }
`