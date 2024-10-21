export interface addOffer {
  storeId: number;
  offerId?: number;
  code: string;
  startDate: Date;
  endDate: Date;
  tNc: string;
  offerName: string;
  description: string;
}

export interface updateOfferData {
  storeId?: number;
  offerId?: number;
  code?: String;
  startDate?: Date;
  endDate?: Date;
  tNc?: String;
  isDelete?: Boolean;
}
