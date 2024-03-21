export interface InventoryItem {
  id: number;
  productName: string;
  manufactureDate: Date;
  expiryDate: Date;
  price: number;
  previousSales: number;
  quantity: number;
}
