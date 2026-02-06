"use client";

import Button from "@/components/buttons/Button";
import { HeaderOne, Text } from "@/components/Text";
import ProductForm from "@/components/forms/ProductForm";
import ProductTable from "@/components/tables/ProductTable";
import { productService } from "@/services/product.service";
import { Product } from "@/lib/types/product";
import { useEffect, useState } from "react";
import PaginationControls from "@/components/PaginationControls";
import { useRouter, useSearchParams } from "next/navigation";
import SearchInputField from "@/components/inputfields/SearchInputField";
import useAuthGuard from "@/hooks/useAuthGuard";

export default function ProductsPage() {
  useAuthGuard();

  const query = useSearchParams();
  const router = useRouter();
  const searchQuery = query.get("search") || "";
  const pageQuery = query.get("page") || "1";

  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();

  const [searchTerm, setSearchTerm] = useState(searchQuery);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const [page, setPage] = useState(Number(pageQuery));
  const pageSize = 5;
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const pagedProducts = filteredProducts.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  useEffect(() => {
    const params = new URLSearchParams();
    if (page !== 1) {
      params.append("page", page.toString());
    }
    if (searchTerm) {
      params.append("search", searchTerm);
    }
    const queryString = params.toString();
    const newUrl = queryString ? `/products?${queryString}` : "/products";
    router.replace(newUrl);
  }, [page, searchTerm, router]);
  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [totalPages, page, products.length]);

  useEffect(() => {
    setProducts(productService.getAll());
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
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
      <div className="flex flex-row items-center justify-between mb-6 ">
        <HeaderOne className="w-full ">Products</HeaderOne>
        <div className="flex flex-col w-full gap-4 md:flex-row">
          <SearchInputField
            className="w-full md:w-64"
            searchTerm={searchTerm}
            handleSearch={handleSearch}
          ></SearchInputField>
          {!showForm && (
            <Button
              className="w-full md:w-64 "
              onClick={() => setShowForm(true)}
            >
              Add Product
            </Button>
          )}
        </div>
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

      {filteredProducts.length === 0 ? (
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
        setPage={handlePageChange}
      ></PaginationControls>
    </div>
  );
}
