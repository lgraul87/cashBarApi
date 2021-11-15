export class CreateBeerDto {
  name?: string;
  details?: string;
  type?: string;
  liters?: number;
  units?: number;
  image?: string;
  seller?: string;
  purchasePrice?: number;
  salePrice?: number;
}
