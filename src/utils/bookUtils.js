class BookUtils {
  constructor() {
    this.books = []
  }

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

  // Method to get all books by genre
  getBooksByGenre(genre) {
    return this.books.filter((book) => book.genre === genre)
  }

  // Method to get the first main images from a book
  getFirstMainImage(book) {
    return this.getMainImages(book)[0]
  }

  // Method to get all the main images from a book
  getMainImages(book) {
    return this.getImages(book, 'main_images/images')
  }

  // Method to get all the main thumbnails from a book
  getMainThumbnails(book) {
    return this.getImages(book, 'main_images/thumbnails')
  }

  // Method to get all the secondary images from a book
  getSecondaryImages(book) {
    return this.getImages(book, 'secondary_images/images')
  }

  // Method to get all the secondary thumbnails from a book
  getSecondaryThumbnails(book) {
    return this.getImages(book, 'secondary_images/thumbnails')
  }

  // Method to get the list of main/secondary images/thumbnails with their respective correct path.
  getImages(book, imageType) {
    if (!book) {
      throw new Error('Book not found')
    }
    // Prefix the image path for each image
    return book.main_images.map((image) => `/assets/books/${book.id}/${imageType}/${image}`)
  }
}

export default BookUtils
