import {Promo} from "../../types/types";
import {createEl} from "../../components/createEl";
import {renderAppliedCodes} from "./renderAppliedCodes";

export const getDiscount = (currentTotalWrapper:HTMLElement,item?: Promo) => {const discountBlock = createEl('div','cart__summary__discount-block')
  const newTotalElement = createEl('div','cart__summary-total')
  discountBlock.appendChild(newTotalElement)
  discountBlock.appendChild(renderAppliedCodes(item))
  currentTotalWrapper.classList.add('cancelled')
  const currentTotal= Number(currentTotalWrapper.innerText.split('$').reverse()[0])
  const appliedDiscount = JSON.parse(`${localStorage.getItem('appliedCodesJewelryStore')}`)
  const summaryDiscount=appliedDiscount?appliedDiscount.reduce((acc:number,el:Promo)=>{
    acc += el.discount ?el.discount: 0
    return  acc
  },0):0
  const newTotal = currentTotal-currentTotal*(summaryDiscount/100)
  newTotalElement.textContent=  `Total: $${newTotal} `

  if(currentTotalWrapper.parentElement){
    const oldDiscount = document.querySelector('.cart__summary__discount-block')
    if(oldDiscount){
      currentTotalWrapper.parentElement.removeChild(oldDiscount)
    }
    currentTotalWrapper.parentElement.appendChild(discountBlock)
  }

  return discountBlock
}