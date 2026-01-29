'use client';

import { CartService } from '@/services/cart';
import { IAddToCartRequest, IUpdateCartItemRequest } from '@/types/cart';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

// query keys for cart
export const cartKeys = {
  all: ['cart'] as const,
} as const;

// hook to get cart
export const useCart = (options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: cartKeys.all,
    queryFn: CartService.getCart,
    enabled: options?.enabled ?? true,
  });
};

// hook to add item to cart
export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IAddToCartRequest) => CartService.addToCart(data),
    onSuccess: () => {
      // Invalidate cart cache to refresh fresh data
      queryClient.invalidateQueries({ queryKey: cartKeys.all });
    },
  });
};

// hook to update cart item
export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: IUpdateCartItemRequest) =>
      CartService.updateCartItem(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: cartKeys.all });
      toast.success('Cart updated');
    },
    onError: (error) => {
      toast.error(error?.message || 'Failed to update cart');
    },
  });
};

// hook to remove item from cart
export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (courseId: string) => CartService.removeFromCart(courseId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: cartKeys.all });
      toast.success('Item removed from cart');
    },
    onError: (error) => {
      toast.error(error?.message || 'Failed to remove item from cart');
    },
  });
};
