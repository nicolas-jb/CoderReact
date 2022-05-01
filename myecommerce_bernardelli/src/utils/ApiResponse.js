import Categories from "./Categories.json";
import {
  query,
  collection,
  where,
  getDocs,
  getFirestore,
  doc,
  getDoc,
  addDoc,
  serverTimestamp,
  writeBatch,
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

export async function saveOrder(order) {
  order.date = serverTimestamp();
  const db = getFirestore();
  const batch = writeBatch(db);
  const ordersCollectionRef = collection(db, "orders");
  let orderId = null;
  let flagError = false;

  try {
    await Promise.all(
      await order.items.map(async (item) => {
        const newStock = (await checkStock(item.id)) - item.quantity;
        if (newStock < 0) {
          flagError = true;
          return Promise.reject("Error de stock");
        }
        const prodRef = doc(db, "productos", item.id);
        batch.update(prodRef, { stock: newStock });
        return Promise.resolve("OK");
      })
    );
    if (!flagError) {
      orderId = (await addDoc(ordersCollectionRef, {})).id;
      const orderRef = doc(db, "orders", orderId);
      batch.update(orderRef, { order });
      await batch.commit();
    }

    return orderId;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function checkStock(productId) {
  const db = getFirestore();
  const prodRef = doc(db, "productos", productId);
  const stock = (await getDoc(prodRef)).data().stock;
  return stock;
}
