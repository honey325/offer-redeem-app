export interface storeResult {
  id?: number;
  name?: String;
  about?: String;
  contact?: String;
  owner?: number;
  location?: string;
  categoryId?: number;
}

export interface location {
  id?: number;
  location?: String;
  createAt?: Date;
  updateAt?: Date;
  deletedAt?: Date;
}
