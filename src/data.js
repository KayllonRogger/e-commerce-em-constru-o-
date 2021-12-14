import { useEffect, useState } from "react";

const base_url = "https://fakestoreapi.com/products";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${base_url}${endpoint}`);
  const json = await req.json();
  return json;
};
const getList = async () => {
  return [
    {
      slug: "electronics",
      title: "Eletrônicos",
      items: await basicFetch("/category/eletronics"),
    },
    {
      slug: "jewelery",
      title: "Joalheria",
      items: await basicFetch("/category/jewelery"),
    },
    {
      slug: "women's clothing",
      title: "Moda Feminina",
      items: await basicFetch("/category/women's%20clothing"),
    },
    {
      slug: "men's clothing",
      title: "Moda Masculina",
      items: await basicFetch("/category/men's%20clothing"),
    },
  ];
};

export default Data = () => {
  const [shopList, setShopList] = useState([]);
  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista
      let list = await getList();
      setShopList(list);
    };

    loadAll();
  }, []);
  return shopList;
};
