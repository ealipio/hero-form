export interface genre {
  _id: string,
  name: string,
}

export interface IMovie {
  _id?: string,
  title?: string,
  genre?: genre,
  numberInStock?: number,
  dailyRentalRate?: number,
  publishDate?: string,
}
