type TechListProps = {
  items: string[];
  className?: string;
};

export function TechList({ items, className = "" }: TechListProps) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
