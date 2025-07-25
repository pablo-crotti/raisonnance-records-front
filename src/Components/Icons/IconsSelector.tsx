import * as Icons from "lucide-react";
import type { FC } from "react";
import { useState } from "react";
import LucideIcon from "./LucideIcon";

const excludedIcons: string[] = [];
const ICONS_PER_PAGE = 96;

const IconsSelector: FC = () => {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  const filteredIconEntries = Object.entries(Icons).filter(
    ([name, val]) =>
      !excludedIcons.includes(name) &&
      !name.endsWith("Icon") &&
      !name.includes("Lucide") &&
      (typeof val === "function" || typeof val === "object") &&
      val &&
      ("render" in val || "displayName" in val) &&
      name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredIconEntries.length / ICONS_PER_PAGE);
  const start = page * ICONS_PER_PAGE;
  const end = start + ICONS_PER_PAGE;
  const paginatedIcons = filteredIconEntries.slice(start, end);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(0);
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={search}
        onChange={onSearchChange}
        placeholder="Rechercher une icône..."
        className="border p-2 rounded w-full"
      />

      <div className="grid grid-cols-12 gap-4">
        {paginatedIcons.map(([name]) => (
          <button
            key={name}
            className="flex flex-col items-center p-2 hover:bg-gray-100 rounded"
          >
            <LucideIcon name={name as keyof typeof Icons} size={24} />
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-2">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Précédent
        </button>
        <span className="px-2">
          Page {page + 1} / {totalPages || 1}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
          disabled={page >= totalPages - 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default IconsSelector;
