import axios from "axios";
import Categories from "./Categories.json";

export async function getProducts(categoryTitle) {
  let categoryId;
  if (categoryTitle) {
    categoryId = Categories.data.find((c) => c.title === categoryTitle).id; //debo convertir el id de la categoría mostrada en la url, en el id que espera la API
  } else {
    categoryId =
      Categories.data[Math.floor(Math.random() * Categories.data.length)].id; //si no me llega el ID voy a buscar 6 productos de una categoría random, acá se podrían poner las últimas búsquedas del usuario u ofertas
  }
  const apiResponse = (
    await axios.get(
      "https://api.mercadolibre.com/sites/MLA/search?category=" + categoryId
    )
  ).data.results.slice(0, 6); // tomo los primeros 6 elementos

  return apiResponse.map((product) => {
    return {
      id: product.id,
      title: product.title,
      imageUrl: product.thumbnail,
      initial: 1,
      stock: product.available_quantity,
      price: product.price,
    };
  });
}

export async function getAProduct(id) {
  const apiResponse = (
    await axios.get("https://api.mercadolibre.com/items/" + id)
  ).data; // Busco un id en particular

  const description = (
    await axios.get("https://api.mercadolibre.com/items/" + id + "/description")
  ).data.plain_text; // Busco la descripción

  return {
    id: apiResponse.id,
    condition: apiResponse.condition,
    soldQuantity: apiResponse.sold_quantity,
    title: apiResponse.title,
    imageUrl: apiResponse.pictures[0].url,
    initial: 1,
    stock: apiResponse.available_quantity,
    description: description,
    price: apiResponse.price,
  };
}
