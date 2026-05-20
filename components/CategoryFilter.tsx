"use client";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isActive = category === selected;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelect(category)}
            className={
              "rounded-full border px-4 py-1.5 text-sm transition-colors " +
              (isActive
                ? "border-gold bg-gold text-black font-medium"
                : "border-edge bg-card text-muted hover:border-gold/60 hover:text-gold")
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
