"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import type { Product } from "@/lib/supabase";
import { useCart } from "@/contexts/CartContext";
import {
  Calendar,
  MapPin,
  Users,
  Package,
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export default function ProductDetailPage() {
  const params = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("id", params.id)
        .single();
      setProduct(data);
      setLoading(false);
    }
    load();
  }, [params.id]);

  function handleAddToCart() {
    if (!product) return;
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image_url: product.image_url,
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  if (loading) {
    return (
      <>
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="h-8 w-8 border-3 border-sage border-t-transparent rounded-full animate-spin" />
        </main>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <main className="flex-1 mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="font-heading text-2xl text-earth mb-4">
            Product not found
          </h1>
          <Link
            href="/shop"
            className="text-forest hover:text-forest-light transition-colors"
          >
            Back to shop
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const dateStr = product.date
    ? new Date(product.date).toLocaleDateString("en-SG", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const outOfStock =
    product.stock !== null && product.stock <= 0;

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-sm text-forest hover:text-forest-light transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            All Products
          </Link>

          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              {product.image_url && (
                <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                  <img
                    src={product.image_url}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mb-3 ${
                  product.category === "workshop"
                    ? "bg-sage/15 text-forest"
                    : "bg-amber/15 text-terracotta"
                }`}
              >
                {product.category === "workshop" ? "Workshop" : "Compost"}
              </span>

              <h1 className="font-heading text-3xl md:text-4xl text-earth mb-4">
                {product.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-soil/70 mb-6">
                {product.category === "workshop" && dateStr && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-terracotta" />
                    <span>
                      {dateStr}
                      {product.time && ` · ${product.time}`}
                    </span>
                  </div>
                )}
                {product.category === "workshop" && product.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-terracotta" />
                    <span>{product.location}</span>
                  </div>
                )}
                {product.category === "workshop" && product.max_attendees && (
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-terracotta" />
                    <span>{product.max_attendees} spots</span>
                  </div>
                )}
                {product.category === "compost" && product.stock !== null && (
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-terracotta" />
                    <span>
                      {product.stock > 0
                        ? `${product.stock} in stock`
                        : "Out of stock"}
                    </span>
                  </div>
                )}
              </div>

              {product.description && (
                <div className="prose prose-sm max-w-none text-soil/80 whitespace-pre-line">
                  {product.description}
                </div>
              )}
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
                <p className="font-heading text-3xl text-terracotta mb-6">
                  {formatPrice(product.price)}
                </p>

                {outOfStock ? (
                  <div className="text-center py-4">
                    <p className="font-heading text-lg text-earth mb-1">
                      Out of Stock
                    </p>
                    <p className="text-sm text-soil/60">
                      Check back soon!
                    </p>
                  </div>
                ) : added ? (
                  <div className="text-center py-4">
                    <CheckCircle className="mx-auto h-10 w-10 text-forest mb-3" />
                    <p className="font-heading text-lg text-earth mb-3">
                      Added to cart!
                    </p>
                    <div className="flex flex-col gap-2">
                      <Link
                        href="/cart"
                        className="w-full bg-forest text-cream py-3 rounded-xl font-medium hover:bg-forest-light transition-colors text-center text-sm"
                      >
                        View Cart
                      </Link>
                      <button
                        onClick={() => setAdded(false)}
                        className="w-full py-3 rounded-xl font-medium text-soil/60 hover:bg-cream-dark transition-colors text-sm"
                      >
                        Continue Shopping
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-soil mb-2">
                        Quantity
                      </label>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="p-2 rounded-lg border border-cream-dark hover:bg-cream-dark transition-colors"
                        >
                          <Minus className="h-4 w-4 text-soil" />
                        </button>
                        <span className="text-lg font-medium text-earth w-8 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="p-2 rounded-lg border border-cream-dark hover:bg-cream-dark transition-colors"
                        >
                          <Plus className="h-4 w-4 text-soil" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      className="w-full bg-forest text-cream py-3 rounded-xl font-medium hover:bg-forest-light transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      Add to Cart
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
