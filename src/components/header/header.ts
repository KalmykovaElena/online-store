import { createEl } from "../createEl"

export function renderHeader() {
  const header = createEl('header', 'header')
  const title = createEl('h1', 'header__title', 'Online store')
  const cartTotalBlock = createEl('div', 'header__cart-total')
  const cartTotal = document.createElement('span')
  cartTotal.textContent = 'Cart total: '
  const cartTotalCount = document.createElement('span')
  cartTotalCount.textContent= `$0`
  cartTotalBlock.appendChild(cartTotal)
  cartTotalBlock.appendChild(cartTotalCount)

  const headerCart = createEl('div', 'header__cart')
  const cartCount = createEl('div', 'header__cart-count')
  const cartImg = document.createElement('img')
  cartImg.src = require('../../assets/img/svg/shopping-cart.svg')
  cartImg.alt = 'Shopping cart'

  headerCart.appendChild(cartCount)
  headerCart.appendChild(cartImg)
  header.appendChild(title)
  header.appendChild(cartTotalBlock)
  header.appendChild(headerCart)

  return header
}