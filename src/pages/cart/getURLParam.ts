import { ParamOfCart } from "../../types/types";

export function getURLParam(paramOfCart: ParamOfCart) {
  const params = new URLSearchParams(window.location.search.slice(1))
  const value = params.get(paramOfCart)
  return value
}