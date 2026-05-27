"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/supabase";
import { supabase } from "@/lib/supabase";
import { ShoppingBag } from "lucide-react";

type Category = "all" | "workshop" | "compost";

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<Category>("all");

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false });
      setProducts(data ?? []);
      setLoading(false);
    }
    load();
  }, []);

  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: "All" },
    { key: "workshop", label: "Workshops" },
    { key: "compost", label: "Compost" },
  ];

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-forest text-cream">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h1 className="font-heading text-4xl md:text-5xl">Farm Shop</h1>
            <p className="mt-3 text-cream/70 max-w-xl">
              Browse our workshops and composting products. Learn to grow, compost, and connect with the land.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex gap-2 mb-8">
            {categories.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setCategory(key)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  category === key
                    ? "bg-forest text-cream"
                    : "bg-cream-dark text-soil/70 hover:text-soil hover:bg-cream-dark/80"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="h-8 w-8 border-3 border-sage border-t-transparent rounded-full animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="mx-auto h-12 w-12 text-sage/40 mb-4" />
              <h3 className="font-heading text-xl text-earth mb-2">
                No products yet
              </h3>
              <p className="text-soil/60">
                Check back soon — new workshops and products are added regularly!
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
