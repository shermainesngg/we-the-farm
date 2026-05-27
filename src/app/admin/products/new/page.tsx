"use client";

import ProductForm from "@/components/ProductForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewProductPage() {
  return (
    <div>
      <Link
        href="/admin/products"
        className="inline-flex items-center gap-1.5 text-sm text-forest hover:text-forest-light transition-colors mb-4"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Products
      </Link>
      <h1 className="font-heading text-2xl md:text-3xl text-earth mb-6">
        Create New Product
      </h1>
      <ProductForm />
    </div>
  );
}
