  import React, { useEffect, useMemo, useRef, useState } from "react";

  export default function CustomSelect({
    options = [],
    defaultValue = null,
    onChange,
    placeholder = "Seleccionar...",
    className = "",
  }) {
    const containerRef = useRef(null);
    const inputRef = useRef(null);
    const listRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(defaultValue);
    const [search, setSearch] = useState("");
    const [highlight, setHighlight] = useState(0);

    const filtered = useMemo(() => {
      if (!search) return options;
      const q = search.trim().toLowerCase();
      return options
        .map((g) => {
          const opts = g.options.filter((o) =>
            o.label.toLowerCase().includes(q)
          );
          return { label: g.label, options: opts };
        })
        .filter((g) => g.options.length > 0);
    }, [options, search]);

    const flatFiltered = useMemo(() => {
      const arr = [];
      filtered.forEach((g) =>
        g.options.forEach((o) => arr.push({ ...o, group: g.label }))
      );
      return arr;
    }, [filtered]);

    useEffect(() => {
      function onDocClick(e) {
        if (!containerRef.current) return;
        if (!containerRef.current.contains(e.target)) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", onDocClick);
      return () => document.removeEventListener("mousedown", onDocClick);
    }, []);

    useEffect(() => {
      if (open) {
        
        setTimeout(() => {
          if (inputRef.current) inputRef.current.focus();
        }, 0);

      
        const idx = flatFiltered.findIndex(
          (f) => value && f.value === value.value
        );
        setHighlight(idx >= 0 ? idx : 0);

        
        setTimeout(() => {
          if (listRef.current && idx >= 0) {
            const itemEl = listRef.current.querySelector(
              `[data-index="${idx}"]`
            );
            if (itemEl) {
              listRef.current.scrollTop =
                itemEl.offsetTop -
                listRef.current.clientHeight / 2 +
                itemEl.clientHeight / 2;
            }
          }
        }, 0);
      } else {
        setSearch("");
        setHighlight(0);
      }
    }, [open, value, flatFiltered]);

    function toggleOpen() {
      setOpen((s) => !s);
    }

    function selectOption(opt) {
      setValue(opt);
      setOpen(false);
      if (onChange) onChange(opt);
    }

    return (
      <div ref={containerRef} className={`relative w-full ${className}`}>
        <button
          type="button"
          onClick={toggleOpen}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 flex items-center justify-between shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#2684FF]"
        >
          <span className="text-sm font-medium text-gray-800 truncate">
            {value ? value.label : placeholder}
          </span>
          <svg
            className={`w-4 h-4 text-[#2684FF] transform ${
              open ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {open && (
          <div className="absolute z-50 mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden">
            <div className="px-2 pt-2">
              <input
                ref={inputRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar..."
                className="w-full border border-gray-200 rounded-md px-2 py-1.5 text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-[#2684FF]"
              />
            </div>

            <div
              ref={listRef}
              role="listbox"
              className="max-h-60 overflow-auto"
            >
              {filtered.length === 0 ? (
                <div className="px-4 py-3 text-sm text-gray-500">
                  No se encontraron resultados
                </div>
              ) : (
                filtered.map((g, gi) => (
                  <div key={gi} className="pb-2">
                    {g.label !== "Todas" && (
                      <div className="px-3 py-1.5 text-xs font-semibold text-gray-500">
                        {g.label}
                      </div>
                    )}
                    {g.options.map((opt, oi) => {
                      const idx = flatFiltered.findIndex(
                        (f) => f.value === opt.value
                      );
                      const isHighlighted = idx === highlight;
                      const isSelected =
                        value && value.value === opt.value;
                      return (
                        <div
                          data-index={idx}
                          key={opt.value}
                          role="option"
                          aria-selected={isSelected}
                          onMouseEnter={() => setHighlight(idx)}
                          onClick={() => selectOption(opt)}
                          className={`px-3 py-2 cursor-pointer text-sm flex items-center justify-between ${
                            isHighlighted
                              ? "bg-[#EEF6FF]"
                              : "bg-white"
                          } ${
                            isSelected
                              ? "font-semibold text-[#0b63ff]"
                              : "text-gray-800"
                          }`}
                        >
                          <span className="truncate">{opt.label}</span>
                          {isSelected && (
                            <svg
                              className="w-4 h-4 text-[#2684FF]"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.704 5.295a1 1 0 010 1.414l-8.01 8.01a1 1 0 01-1.414 0l-3.01-3.01a1 1 0 011.414-1.414l2.303 2.303 7.303-7.303a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
