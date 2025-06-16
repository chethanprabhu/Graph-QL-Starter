const data = {
  authors: [
    { id: "1", name: "Chethan Prabhu", bookIds: ["101", "102", "104"] },
    { id: "2", name: "Jyothi Samanth", bookIds: ["103", "105"] },
  ],
  books: [
    { id: "101", title: "The Alchemist", publishedYear: 2000, authorId: "1" },
    { id: "102", title: "The Richest Man In Babylon", publishedYear: 2010, authorId: "1" },
    { id: "103", title: "The Monk Who Sold His Ferrari", publishedYear: 2020, authorId: "2" },
    { id: "104", title: "Atomic Habits", publishedYear: 2022, authorId: "1" },
    { id: "105", title: "How To Win Friends And Influence People", publishedYear: 2017, authorId: "2" }
  ],
};

export const resolvers = {
    Book: {
      authorDetails: (parent, args, context, info) => {
        return data.authors.find((author) => author.id === parent.authorId);
      }
    },

    Author: {
      bookDetails: (parent, args, context, info) => {
        return data.books.filter((book) => parent.bookIds.includes(book.id));
      }
    },

    Query: {
      authors: () => {
        return data.authors
      },
      books: () => {
        return data.books
      }
    },

    Mutation: {
      addBook: (parent, args, context, info) => {
        const ID = Math.random(1000);
        const newBookDetails = {...args, id: ID};
        data.books.push(newBookDetails);
        const author = data.authors.find((author) => author.id === args.authorId);
        author.bookIds.push(ID);
        return newBookDetails;
      }
    }
  };