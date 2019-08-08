export interface genre {
  _id: string;
  name: string;
}

export interface IMovie {
  _id?: string;
  title?: string;
  genre?: IGenre;
  numberInStock?: number;
  dailyRentalRate?: number;
  publishDate?: string;
}

export interface IGenre {
  _id: string;
  name: string;
}
