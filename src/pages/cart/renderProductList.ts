import {renderProductListItem} from "./renderProductListItem";
import {Item} from "../../types/types";
import {setPageNumber} from "./setPageNumber";

export const renderProductList = (array:Item[],wrapper: HTMLElement,countItems?:number,currentPage=1) => {
  if(array.length ==0 ) {
    const title= document.querySelector('.cart__title')
    if(title) title.replaceChildren()
    wrapper.textContent = 'empty cart'
  }else {
    const localItemsCount = localStorage.getItem('countOfItemsOnCartPage')
    if(localItemsCount) {
      countItems = Number(localItemsCount)
    }
    const localCurrentPage = localStorage.getItem('currentPage')
    if(localCurrentPage) {
      currentPage = Number(localCurrentPage)
    }
    if(!countItems){
      if(localStorage.getItem('countOfItemsOnCartPage')){
        countItems = Number(localStorage.getItem('countOfItemsOnCartPage'))
      }
      else{
        countItems=3
      }
    }
    let start = countItems*(currentPage-1)
    while(array[start]===undefined){
      start-=countItems
      currentPage = setPageNumber('cart__title-navigation-page',-1)
    }
    const end =start+ countItems
    array.forEach((item, index) => {
      if(index>=start && index<end){
        wrapper.appendChild(renderProductListItem(item, index + 1))
      }
    })
  }
}