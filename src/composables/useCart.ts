import { ref } from 'vue'
import { products } from './products'

const CART_KEY = 'cart'

export function useCart() {
  const cart = ref(getCart())

  function getCart() {
    const raw = localStorage.getItem(CART_KEY)
    if (!raw) return []
    try {
      return JSON.parse(raw)
    } catch {
      return []
    }
  }

  function saveCart(newCart: string[]) {
    cart.value = newCart
    localStorage.setItem(CART_KEY, JSON.stringify(newCart))
  }

  function addToCart(id: string) {
    const newCart = [...cart.value, id]
    saveCart(newCart)
  }

  function removeFromCart(id: string) {
    const newCart = cart.value.filter((itemId: string) => itemId !== id)
    saveCart(newCart)
  }

  function clearCart() {
    saveCart([])
  }

  function getCartProducts() {
    return cart.value.map((id: string) => products.find(p => p.id === id)).filter(Boolean)
  }

  return { cart, addToCart, removeFromCart, clearCart, getCartProducts }
} 