import { useState, useRef, useEffect } from "react";

interface Props {
  selected: string;
  onChange: (value: string) => void;
  options: string[];
  label?: string;
}

const FilterBar = ({ selected, onChange, options, label }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (opt: string) => {
    onChange(opt);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium border bg-white text-gray-700 border-gray-300 hover:border-gray-500"
      >
        {label && <span>{label}:</span>} {selected}
        <span className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-48">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-200 ${
                selected === opt ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterBar;
