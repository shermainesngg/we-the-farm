"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Product } from "@/lib/supabase";
import Link from "next/link";
import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react";

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadProducts() {
    const { data } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });
    setProducts(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function togglePublish(product: Product) {
    await supabase
      .from("products")
      .update({ is_published: !product.is_published })
      .eq("id", product.id);
    loadProducts();
  }

  async function deleteProduct(product: Product) {
    if (!confirm(`Delete "${product.title}"? This cannot be undone.`)) return;
    await supabase.from("products").delete().eq("id", product.id);
    loadProducts();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-2xl md:text-3xl text-earth">
            Products
          </h1>
          <p className="text-sm text-soil/60 mt-1">
            Manage your shop products here.
          </p>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center gap-2 bg-forest text-cream px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-forest-light transition-colors"
        >
          <Plus className="h-4 w-4" />
          New Product
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="h-8 w-8 border-3 border-sage border-t-transparent rounded-full animate-spin" />
        </div>
      ) : products.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
          <p className="text-soil/60 mb-4">No products yet.</p>
          <Link
            href="/admin/products/new"
            className="inline-flex items-center gap-2 bg-forest text-cream px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-forest-light transition-colors"
          >
            <Plus className="h-4 w-4" />
            Create Your First Product
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cream-dark text-left">
                  <th className="px-5 py-3 text-soil/50 font-medium">
                    Product
                  </th>
                  <th className="px-5 py-3 text-soil/50 font-medium">Price</th>
                  <th className="px-5 py-3 text-soil/50 font-medium">
                    Category
                  </th>
                  <th className="px-5 py-3 text-soil/50 font-medium">Stock</th>
                  <th className="px-5 py-3 text-soil/50 font-medium">
                    Status
                  </th>
                  <th className="px-5 py-3 text-soil/50 font-medium text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-cream-dark/50 last:border-0"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        {product.image_url ? (
                          <img
                            src={product.image_url}
                            alt=""
                            className="w-10 h-10 rounded-lg object-cover shrink-0"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-cream-dark shrink-0" />
                        )}
                        <p className="font-medium text-earth">
                          {product.title}
                        </p>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-soil/70">
                      {formatPrice(product.price)}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${
                          product.category === "workshop"
                            ? "bg-sage/15 text-forest"
                            : "bg-amber/15 text-terracotta"
                        }`}
                      >
                        {product.category === "workshop"
                          ? "Workshop"
                          : "Compost"}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-soil/70">
                      {product.stock !== null ? product.stock : "—"}
                    </td>
                    <td className="px-5 py-4">
                      {product.is_published ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-sage/15 text-forest">
                          Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-amber/15 text-terracotta">
                          Draft
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1 justify-end">
                        <button
                          onClick={() => togglePublish(product)}
                          title={
                            product.is_published ? "Unpublish" : "Publish"
                          }
                          className="p-2 rounded-lg hover:bg-cream-dark transition-colors text-soil/50 hover:text-soil"
                        >
                          {product.is_published ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                        <Link
                          href={`/admin/products/${product.id}`}
                          className="p-2 rounded-lg hover:bg-cream-dark transition-colors text-soil/50 hover:text-soil"
                        >
                          <Pencil className="h-4 w-4" />
                        </Link>
                        <button
                          onClick={() => deleteProduct(product)}
                          className="p-2 rounded-lg hover:bg-red-50 transition-colors text-soil/50 hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
