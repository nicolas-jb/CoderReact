const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Este es el producto 1",
    imageUrl: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_163e93cc4d41436dbd068c0ce7a4981e.jpg",
    initial: 1,
    stock: 10,
},

{
    id: 2,
    name: "Product 2",
    description: "Este es el producto 2",
    imageUrl: "https://ichef.bbci.co.uk/news/640/cpsprodpb/6162/production/_114403942_ps5.jpg",
    initial: 1,
    stock: 20,
},

{
    id: 3,
    name: "Product 3",
    description: "Este es el producto 3",
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_951251-MLA46960016125_082021-O.jpg",
    initial: 1,
    stock: 30,
  },
];

export const ProductPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});
