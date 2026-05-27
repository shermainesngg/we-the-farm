import Link from "next/link";
import { Calendar, MapPin, Package } from "lucide-react";
import type { Product } from "@/lib/supabase";

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export default function ProductCard({ product }: { product: Product }) {
  const dateStr = product.date
    ? new Date(product.date).toLocaleDateString("en-SG", {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <Link
      href={`/shop/${product.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-[16/10] bg-cream-dark relative overflow-hidden">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sage/40">
            <svg
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
        <span
          className={`absolute top-3 left-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            product.category === "workshop"
              ? "bg-sage/90 text-cream"
              : "bg-amber/90 text-cream"
          }`}
        >
          {product.category === "workshop" ? "Workshop" : "Compost"}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-heading text-xl text-earth group-hover:text-forest transition-colors">
            {product.title}
          </h3>
          <span className="font-heading text-lg text-terracotta shrink-0">
            {formatPrice(product.price)}
          </span>
        </div>

        <div className="flex flex-col gap-1.5 text-sm text-soil/70">
          {product.category === "workshop" && dateStr && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-terracotta" />
              <span>
                {dateStr}
                {product.time && ` · ${product.time}`}
              </span>
            </div>
          )}
          {product.category === "workshop" && product.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-terracotta" />
              <span>{product.location}</span>
            </div>
          )}
          {product.category === "compost" && product.stock !== null && (
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4 text-terracotta" />
              <span>{product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}</span>
            </div>
          )}
        </div>

        {product.description && (
          <p className="mt-3 text-sm text-soil/60 line-clamp-2">
            {product.description}
          </p>
        )}
      </div>
    </Link>
  );
}
