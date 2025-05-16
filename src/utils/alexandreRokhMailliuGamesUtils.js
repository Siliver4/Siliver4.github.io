class AlexandreRokhMailliuGamesUtils {
  constructor() {
    this.armg = []
  }

  // Method use to fetch all the armg games from the json data file
  async fetchAlexandreRokhMailliuGames() {
    try {
      const response = await fetch('/assets/alexandre-rokh-mailliu-games/armg-data.json')
      this.armg = await response.json()
    } catch (error) {
      console.error('Error fetching games:', error)
    }
  }

  // Method to get the list of all armg games
  getAlexandreRokhMailliuGames() {
    return this.armg
  }

  // Method to get a armg games by its ID
  getAlexandreRokhMailliuGamesById(id) {
    return this.armg.find((armg) => armg.id === id)
  }

  //-----------------------------
  //-----------------------------
  //-----------------------------
  //-----------------------------
  //-----------------------------
  //-----------------------------
  // Method to get all armg by saga
  getBooksBySaga(saga) {
    return this.armg.filter((book) => book.saga === saga)
  }

  // Method to get all armg by it's main genre
  getBooksByGenre(genre) {
    return this.armg.filter((book) => book.main_genre === genre)
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

export default AlexandreRokhMailliuGamesUtils
