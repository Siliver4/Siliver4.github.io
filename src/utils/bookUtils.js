class BookUtils {
  constructor() {
    this.books = []
  }

  // Method use to fetch all the books from the json data file
  async fetchBooks() {
    try {
      const response = await fetch('/assets/books/books-data.json')
      this.books = await response.json()
    } catch (error) {
      console.error('Error fetching books:', error)
    }
  }

  // Method to get the list of all books
  getBooks() {
    return this.books
  }

  // Method to get a book by its ID
  getBookById(id) {
    return this.books.find((book) => book.id === id)
  }

  // Method to get all books by saga
  getBooksBySaga(saga) {
    return this.books.filter((book) => book.saga === saga)
  }

  // Method to get all books by it's main genre
  getBooksByGenre(genre) {
    return this.books.filter((book) => book.main_genre === genre)
  }

  getPDF(book) {
    if (book.pdf) {
      return `/assets/books/${book.id}/${book.pdf}`
    }
  }

  // Method to get the first main images from a book
  getFirstMainImage(book) {
    return this.getMainImages(book)[0]
  }

  // Method to get all the main images from a book, with a prexifed image path for each image.
  getMainImages(book) {
    if (book.main_images) {
      return book.main_images.map((image) => `/assets/books/${book.id}/main_images/images/${image}`)
    }
  }

  // Method to get all the main thumbnails from a book, with a prexifed image path for each image.
  getMainThumbnails(book) {
    if (book.main_images) {
      return book.main_images.map((image) => `/assets/books/${book.id}/main_images/thumbnails/${image}`)
    }
  }

  // Method to get all the secondary images from a book, with a prexifed image path for each image.
  getSecondaryImages(book) {
    if (book.secondary_images) {
      return book.secondary_images.map((image) => `/assets/books/${book.id}/secondary_images/images/${image}`)
    }
  }

  // Method to get all the secondary thumbnails from a book, with a prexifed image path for each image.
  getSecondaryThumbnails(book) {
    if (book.secondary_images) {
      return book.secondary_images.map((image) => `/assets/books/${book.id}/secondary_images/thumbnails/${image}`)
    }
  }
}

export default BookUtils
