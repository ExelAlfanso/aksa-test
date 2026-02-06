import Button from "@/components/buttons/Button";
import { HeaderTwo, Text } from "@/components/Text";
import { Product } from "@/lib/types/product";

interface ProductTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export default function ProductTable({
  products,
  onEdit,
  onDelete,
}: ProductTableProps) {
  return (
    <div className="overflow-x-auto border rounded-lg border-border bg-card">
      <table className="min-w-full text-left">
        <thead className="border-b border-border bg-background">
          <tr>
            <th className="px-4 py-3 font-semibold">Name</th>
            <th className="px-4 py-3 font-semibold">Price</th>
            <th className="px-4 py-3 font-semibold">Category</th>
            <th className="px-4 py-3 font-semibold">Stock</th>
            <th className="px-4 py-3 font-semibold">Created</th>
            <th className="px-4 py-3 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b border-border">
              <td className="px-4 py-3">
                <HeaderTwo className="text-base sm:text-lg md:text-xl lg:text-xl">
                  {product.name}
                </HeaderTwo>
              </td>
              <td className="px-4 py-3">
                <Text>${product.price.toFixed(2)}</Text>
              </td>
              <td className="px-4 py-3">
                <Text>{product.category}</Text>
              </td>
              <td className="px-4 py-3">
                <Text>{product.stock}</Text>
              </td>
              <td className="px-4 py-3">
                <Text className="text-sm text-muted-foreground">
                  {new Date(product.createdAt).toLocaleDateString()}
                </Text>
              </td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <Button onClick={() => onEdit(product)}>Edit</Button>
                  <Button onClick={() => onDelete(product.id)}>Delete</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
