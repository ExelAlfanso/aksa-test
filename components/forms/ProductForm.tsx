"use client";

import Button from "@/components/buttons/Button";
import { Product } from "@/lib/types/product";
import { useState } from "react";

interface ProductFormProps {
  product?: Product;
  onSubmit: (data: Omit<Product, "id" | "createdAt">) => void;
  onCancel: () => void;
}

export default function ProductForm({
  product,
  onSubmit,
  onCancel,
}: ProductFormProps) {
  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price.toString() || "");
  const [category, setCategory] = useState(product?.category || "");
  const [stock, setStock] = useState(product?.stock.toString() || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      price: parseFloat(price),
      category,
      stock: parseInt(stock),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 border rounded-lg border-border bg-card"
    >
      <div>
        <label htmlFor="name" className="block mb-1 font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border rounded-lg bg-background text-foreground border-border focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="price" className="block mb-1 font-medium">
          Price
        </label>
        <input
          id="price"
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="w-full p-2 border rounded-lg bg-background text-foreground border-border focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="category" className="block mb-1 font-medium">
          Category
        </label>
        <input
          id="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full p-2 border rounded-lg bg-background text-foreground border-border focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="stock" className="block mb-1 font-medium">
          Stock
        </label>
        <input
          id="stock"
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
          className="w-full p-2 border rounded-lg bg-background text-foreground border-border focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div className="flex gap-2">
        <Button type="submit">{product ? "Update" : "Create"}</Button>
        <Button type="button" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
