import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All products",
};

const ProductPage = async () => {
  // const res = await fetch("http://localhost:5000/products", {
  //   cache: "force-cache",
  // });

  //ISR
  // const res = await fetch("http://localhost:5000/products", {
  //   next: {
  //     revalidate: 30,
  //   },
  // });

  // SSR
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });

  const products = await res.json();
  console.log(products);
  return (
    <div>
      <h1>This is Product Page component {products?.length} </h1>
    </div>
  );
};

export default ProductPage;
