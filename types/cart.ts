export interface ICourseDetails {
  _id: string;
  title: string;
  image: string;
  price: string;
  oldPrice: string;
  status: string;
}

export interface ICartItem {
  courseId: ICourseDetails;
  title: string;
  price: number;
  oldPrice?: number;
  thumbnail: string;
  addedAt: string;
}

export interface ICart {
  _id: string;
  userId: string;
  items: ICartItem[];
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface IAddToCartRequest {
  courseId: string;
}

export interface IUpdateCartItemRequest {
  courseId: string;
}

export interface IRemoveFromCartRequest {
  courseId: string;
}

export interface IBackendCartResponse {
  success: boolean;
  message: string;
  statusCode: number;
  data: ICart;
}

// api services return
export type CartResponse = ICart;

// discount voucher interface
export interface IDiscountVoucher {
  code: string;
  label: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minOrderValue?: number;
}

// order discount interface
export interface IOrderDiscount {
  code: string;
  discountAmount: number;
  appliedSuccessfully: boolean;
}

// Helper interface for cart calculations (used in UI components)
export interface ICartSummary {
  subtotal: number;
  discountAmount: number;
  total: number;
  itemCount: number;
}
