import Button from "./buttons/Button";
import { Text } from "./Text";
export default function PaginationControls({
  page,
  totalPages,
  setPage,
}: {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}) {
  return (
    <div className="flex items-center justify-between mt-4">
      <Text>
        Page {page} of {totalPages}
      </Text>
      <div className="flex gap-2">
        <Button onClick={() => setPage(1)} type="button" disabled={page === 1}>
          First
        </Button>
        <Button
          onClick={() => setPage(Math.max(1, page - 1))}
          type="button"
          disabled={page === 1}
        >
          Prev
        </Button>
        <Button
          onClick={() => setPage(Math.min(totalPages, page + 1))}
          type="button"
          disabled={page === totalPages}
        >
          Next
        </Button>
        <Button
          onClick={() => setPage(totalPages)}
          type="button"
          disabled={page === totalPages}
        >
          Last
        </Button>
      </div>
    </div>
  );
}
