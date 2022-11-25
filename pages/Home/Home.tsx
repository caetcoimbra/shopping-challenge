import Head from "next/head";
import Header from "@/components/Header/Header";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { useCallback, useEffect, useState } from "react";
import request, { Product } from "../../integrations/request";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    setLoading(true);

    try {
      const fetchedProducts = await request.fetchProducts({
        page: 1,
        rows: 50,
        sortBy: "id",
        orderBy: "ASC",
      });

      if (fetchedProducts) {
        setProducts(fetchedProducts);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts().catch(() => {
      console.error("Falha ao carregar produtos");
    });
  }, [fetchProducts]);

  return (
    <>
      <Head>
        <title>MKS Sistemas | E-commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <ProductGrid loading={loading} products={products} />
      </main>
    </>
  );
}