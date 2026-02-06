import { Product } from "../lib/types/product";

export const STORAGE_KEY = "products";

export const productService = {
  getAll(): Product[] {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  getById(id: string): Product | undefined {
    return this.getAll().find((p) => p.id === id);
  },

  create(product: Omit<Product, "id" | "createdAt">): Product {
    const newProduct: Product = {
      ...product,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    const products = this.getAll();
    products.push(newProduct);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    return newProduct;
  },

  update(
    id: string,
    data: Partial<Omit<Product, "id" | "createdAt">>,
  ): Product | null {
    const products = this.getAll();
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) return null;

    products[index] = { ...products[index], ...data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    return products[index];
  },

  delete(id: string): boolean {
    const products = this.getAll();
    const filtered = products.filter((p) => p.id !== id);
    if (filtered.length === products.length) return false;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  },
};
