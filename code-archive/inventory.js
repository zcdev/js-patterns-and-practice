let inventory = [];

function findProductIndex(name) {
  const productIndex = inventory.findIndex(product => product.name.toLowerCase() === name.toLowerCase());
  return productIndex;
}

function addProduct(product) {
  const productIndex = findProductIndex(product.name);
  product.name = product.name.toLowerCase();
  let message = "";
  if (productIndex === -1) {
    inventory.push(product);
    message = `${product.name.toLowerCase()} added to inventory`;
  } else {
    inventory[productIndex].quantity + product.quantity;
    message = `${product.name.toLowerCase()} quantity updated`;
  }
  return message;
}

function removeProduct(name, quantity) {
  let message = "";
  const productName = name.toLowerCase();
  const productIndex = findProductIndex(name);

  if (productIndex === -1) {

    message = `${productName} not found`;

  } else {

    const remainingQuantity = inventory[productIndex]["quantity"] - quantity;

    if (remainingQuantity < quantity) {
      message = `Not enough ${productName} available, remaining pieces: ${remainingQuantity}`
    }

    if (remainingQuantity === 0) {
      inventory.splice(productIndex, 1);
    } else {
      message = `Remaining ${productName} pieces: ${remainingQuantity}`
    }

  }

  return message;
}