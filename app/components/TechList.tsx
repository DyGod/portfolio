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
          className="border-2 border-accent-2/50 px-3 py-1 text-xs font-semibold text-accent-2-strong"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
