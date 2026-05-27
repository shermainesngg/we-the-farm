"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import Link from "next/link";

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-forest text-cream">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h1 className="font-heading text-4xl md:text-5xl">Your Cart</h1>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-12">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag className="mx-auto h-12 w-12 text-sage/40 mb-4" />
              <h3 className="font-heading text-xl text-earth mb-2">
                Your cart is empty
              </h3>
              <p className="text-soil/60 mb-6">
                Browse our shop to find workshops and composting products.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-forest text-cream px-6 py-3 rounded-xl font-medium hover:bg-forest-light transition-colors"
              >
                Browse Shop
              </Link>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
                {items.map((item, index) => (
                  <div
                    key={item.productId}
                    className={`flex items-center gap-4 p-5 ${
                      index < items.length - 1
                        ? "border-b border-cream-dark/50"
                        : ""
                    }`}
                  >
                    {item.image_url ? (
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-xl bg-cream-dark shrink-0" />
                    )}

                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/shop/${item.productId}`}
                        className="font-medium text-earth hover:text-forest transition-colors"
                      >
                        {item.title}
                      </Link>
                      <p className="text-sm text-soil/60">
                        {formatPrice(item.price)} each
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity - 1)
                        }
                        className="p-1.5 rounded-lg border border-cream-dark hover:bg-cream-dark transition-colors"
                      >
                        <Minus className="h-3 w-3 text-soil" />
                      </button>
                      <span className="text-sm font-medium text-earth w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity + 1)
                        }
                        className="p-1.5 rounded-lg border border-cream-dark hover:bg-cream-dark transition-colors"
                      >
                        <Plus className="h-3 w-3 text-soil" />
                      </button>
                    </div>

                    <p className="font-medium text-earth w-20 text-right">
                      {formatPrice(item.price * item.quantity)}
                    </p>

                    <button
                      onClick={() => removeItem(item.productId)}
                      className="p-2 rounded-lg hover:bg-red-50 transition-colors text-soil/40 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading text-lg text-earth">
                    Subtotal
                  </span>
                  <span className="font-heading text-2xl text-terracotta">
                    {formatPrice(totalPrice)}
                  </span>
                </div>

                <button
                  disabled
                  className="w-full bg-forest/50 text-cream py-3 rounded-xl font-medium cursor-not-allowed"
                  title="Checkout coming soon"
                >
                  Checkout Coming Soon
                </button>

                <Link
                  href="/shop"
                  className="flex items-center justify-center gap-1.5 text-sm text-forest hover:text-forest-light transition-colors mt-4"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Continue Shopping
                </Link>
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
