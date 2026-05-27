export interface OrderItemInterface {
  id: number;
  product: number;
  product_name: string;
  product_image?: string | null;
  quantity: number;
  price_at_time: string;
  subtotal: string;
}

export interface OrderInterface {
  id: number;
  user: number;
  user_username: string;
  status: string;
  status_display: string;
  total_amount: string;
  shipping_address: string;
  notes: string;
  items: OrderItemInterface[];
  total_items: number;
  created_at: string;
  updated_at: string;
}

export interface OrdersApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  current_page: number;
  total_pages: number;
  has_next: boolean;
  has_previous: boolean;
  results: OrderInterface[];
}
