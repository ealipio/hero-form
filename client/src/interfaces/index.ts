export interface genre {
  _id: string;
  name: string;
}

export enum orderType {
  ASC = "asc",
  DESC = "desc",
}
export interface ISortColumn {
  path: string;
  order: orderType;
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
