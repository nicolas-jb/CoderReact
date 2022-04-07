import axios from "axios";

export async function getProducts() {
  const apiResponse = (
    await axios.get("https://api.mercadolibre.com/sites/MLA/search?q=auto")
  ).data.results.slice(0, 4); // tomo los primeros 4 autos

  return apiResponse.map((product) => {
    return {
      id: product.id,
      title: product.title,
      imageUrl: product.thumbnail,
      initial: 1,
      stock: product.available_quantity,
    };
  });
}

export async function getAProduct() {
  const apiResponse = (
    await axios.get("https://api.mercadolibre.com/items/MLA1123023407")
  ).data; // Busco un id en particular

  return {
    id: apiResponse.id,
    title: apiResponse.title,
    imageUrl: apiResponse.thumbnail,
    initial: 1,
    stock: apiResponse.available_quantity,
    description: "Esta es la descripción", 
    price: apiResponse.price
  };
}
