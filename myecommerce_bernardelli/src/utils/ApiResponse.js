import Categories from "./Categories.json";
import {
  query,
  collection,
  where,
  getDocs,
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";

export async function getProducts(categoryTitle) {
  const category =
    categoryTitle ||
    Categories.data[Math.floor(Math.random() * Categories.data.length)].title; //si no me llega el ID voy a buscar 6 productos de una categoría random, acá se podrían poner las últimas búsquedas del usuario u ofertas

  const db = getFirestore();

  const q = query(
    collection(db, "productos"),
    where("categoria", "==", category)
  );

  return getDocs(q).then((products) => {
    return products.docs.map((p) => ({ id: p.id, ...p.data() }));
  });
}

export async function getAProduct(id) {
  const db = getFirestore();
  const productRef = doc(db, "productos", id);

  return getDoc(productRef).then((product) => ({
    id: product.id,
    ...product.data(),
  }));
}
