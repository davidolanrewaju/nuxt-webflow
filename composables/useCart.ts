export interface Product {
  title: string;
  price: string;
  image: string;
  size: string[];
  quantity: number;
}

const cart = reactive<Product[]>([]);
const subtotal = computed(() => {
  return cart
    .reduce((total: number, item: Product) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price * item.quantity;
    }, 0)
    .toFixed(2);
});

const totalQuantity = computed(() => {
  return cart.reduce((total: number, item: Product) => total + item.quantity, 0);
});

export const useCart = () => {
  const addToCart = (product: { title: string; price: string; image: string; size: string; quantity: number }) => {
    const inCart = cart.find((item) => item.title === product.title);
    if (inCart) {
      inCart.quantity += product.quantity;
      if (!inCart.size.includes(product.size)) {
        inCart.size.push(product.size);
      }
    } else {
      cart.push({ ...product, size: [product.size] });
    }
  };

  const removeFromCart = (title: string) => {
    const index = cart.findIndex((item) => item.title === title);
    if (index !== -1) {
      cart.splice(index, 1);
    }
  };

  return { cart, addToCart, removeFromCart, subtotal, totalQuantity };
};
