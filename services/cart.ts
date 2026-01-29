import ApiService from '@/lib/api-service';
import {
  CartResponse,
  IAddToCartRequest,
  ICart,
  IUpdateCartItemRequest,
} from '@/types/cart';

const ENDPOINTS = {
  CART: '/cart',
  ADD_ITEM: '/cart/add',
  UPDATE_ITEM: '/cart/update',
  REMOVE_ITEM: (courseId: string) => `/cart/items/${courseId}`,
  CLEAR_CART: '/cart/clear',
} as const;

export class CartService {
  // Get cart
  static async getCart(): Promise<ICart> {
    try {
      // return await ApiService.get<CartResponse>(ENDPOINTS.CART)

      // Fake data - return 2 cart items
      const fakeCartItems = [
        {
          courseId: {
            _id: '1',
            title: 'JavaScript Fundamentals',
            image: '',
            price: '299000',
            oldPrice: '399000',
            status: 'active',
          },
          title: 'JavaScript Fundamentals',
          price: 299000,
          oldPrice: 399000,
          thumbnail: '',
          addedAt: new Date().toISOString(),
        },
        {
          courseId: {
            _id: '2',
            title: 'React Advanced Patterns',
            image: '',
            price: '499000',
            oldPrice: '599000',
            status: 'active',
          },
          title: 'React Advanced Patterns',
          price: 499000,
          oldPrice: 599000,
          thumbnail: '',
          addedAt: new Date().toISOString(),
        },
      ];

      return {
        _id: 'cart_123',
        userId: 'user_123',
        items: fakeCartItems,
        totalPrice: 798000,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
    } catch {
      return {
        _id: '',
        userId: '',
        items: [],
        totalPrice: 0,
        createdAt: '',
        updatedAt: '',
      };
    }
  }

  // Add to cart
  static async addToCart(data: IAddToCartRequest): Promise<ICart> {
    return ApiService.post<CartResponse, IAddToCartRequest>(
      ENDPOINTS.ADD_ITEM,
      data
    );
  }

  // Update cart item
  static async updateCartItem(data: IUpdateCartItemRequest): Promise<ICart> {
    return ApiService.put<CartResponse, IUpdateCartItemRequest>(
      ENDPOINTS.UPDATE_ITEM,
      data
    );
  }

  // Clear cart
  static async clearCart(): Promise<void> {
    return ApiService.delete<void>(ENDPOINTS.CLEAR_CART);
  }

  // Remove from cart
  static async removeFromCart(courseId: string): Promise<ICart> {
    return ApiService.delete<CartResponse>(ENDPOINTS.REMOVE_ITEM(courseId));
  }
}
