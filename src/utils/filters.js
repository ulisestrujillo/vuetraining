export function  toLocalePrice (price){
    return price.toLocaleString();
}

export function toPrice (price){
    price = toLocalePrice(price);
    return `$${price}`;
  }

export default toLocalePrice;