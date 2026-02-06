"use client";

import Button from "@/components/buttons/Button";
import { HeaderOne, Text } from "@/components/Text";
import ProductForm from "@/components/forms/ProductForm";
import ProductTable from "@/components/tables/ProductTable";
import { productService } from "@/services/product.service";
import { Product } from "@/lib/types/product";
import { useEffect, useState } from "react";
import PaginationControls from "@/components/PaginationControls";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();
  const [page, setPage] = useState(1);

  const pageSize = 5;
  const totalPages = Math.max(1, Math.ceil(products.length / pageSize));
  const pagedProducts = products.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [totalPages, page, products.length]);

  useEffect(() => {
    setProducts(productService.getAll());
  }, []);

  const handleCreate = (data: Omit<Product, "id" | "createdAt">) => {
    const newProduct = productService.create(data);
    setProducts([...products, newProduct]);
    setShowForm(false);
  };

  const handleUpdate = (data: Omit<Product, "id" | "createdAt">) => {
    if (!editingProduct) return;
    const updated = productService.update(editingProduct.id, data);
    if (updated) {
      setProducts(products.map((p) => (p.id === updated.id ? updated : p)));
    }
    setEditingProduct(undefined);
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this product?")) {
      productService.delete(id);
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingProduct(undefined);
  };

  return (
    <div className="container max-w-6xl p-6 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <HeaderOne>Products</HeaderOne>
        {!showForm && (
          <Button onClick={() => setShowForm(true)}>Add Product</Button>
        )}
      </div>

      {showForm && (
        <div className="mb-6">
          <ProductForm
            product={editingProduct}
            onSubmit={editingProduct ? handleUpdate : handleCreate}
            onCancel={handleCancel}
          />
        </div>
      )}

      {products.length === 0 ? (
        <Text className="text-center text-muted-foreground">
          No products yet
        </Text>
      ) : (
        <ProductTable
          products={pagedProducts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
      <PaginationControls
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      ></PaginationControls>
    </div>
  );
}
