"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, X, Star } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  starred?: boolean;
}

interface ReusableSelectProps {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  multiple?: boolean;
  starredOptionSupport?: boolean;
}

export default function ReusableSelect({
  label,
  placeholder = "إختر...",
  options,
  selectedValues,
  onChange,
  multiple = false,
  starredOptionSupport = true,
}: ReusableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectOption = (option: SelectOption) => {
    if (multiple) {
      if (selectedValues.includes(option.value)) {
        // Remove item
        onChange(selectedValues.filter(val => val !== option.value));
      } else {
        // Add item
        onChange([...selectedValues, option.value]);
      }
    } else {
      onChange([option.value]);
      setIsOpen(false);
    }
  };

  const handleRemoveValue = (val: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(selectedValues.filter(v => v !== val));
  };

  const filteredOptions = options.filter(opt =>
    opt.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedOptions = options.filter(opt => selectedValues.includes(opt.value));

  return (
    <div className="space-y-2 text-right w-full max-w-xl" dir="rtl" ref={containerRef}>
      {label && (
        <label className="block text-[15px] font-black text-gray-800">
          {label}
        </label>
      )}

      {/* Select Field trigger */}
      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-4 pr-5 pl-10 bg-white border border-gray-200 rounded-2xl font-bold text-gray-700 cursor-pointer flex items-center justify-between shadow-xs select-none hover:border-gray-300 transition-colors"
        >
          <span className={selectedOptions.length === 0 ? "text-gray-400 font-semibold" : "text-gray-800 font-bold"}>
            {selectedOptions.length === 0 
              ? placeholder 
              : !multiple 
                ? selectedOptions[0].label 
                : `${placeholder} (${selectedOptions.length})`
            }
          </span>
          <ChevronDown size={18} className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full right-0 left-0 mt-2 z-50 bg-white border border-gray-150 rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200 max-h-60 overflow-y-auto">
            {/* Search Input inside dropdown */}
            <div className="p-3 border-b border-gray-100 bg-gray-50">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="بحث..."
                className="w-full py-2 px-4 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#334bb1] font-bold text-gray-800 text-right"
              />
            </div>

            {/* Options List */}
            <ul className="divide-y divide-gray-50">
              {filteredOptions.length === 0 ? (
                <li className="p-4 text-center text-sm text-gray-400 font-semibold">
                  لا توجد خيارات مطابقة
                </li>
              ) : (
                filteredOptions.map((option) => {
                  const isSelected = selectedValues.includes(option.value);
                  return (
                    <li
                      key={option.value}
                      onClick={() => handleSelectOption(option)}
                      className={`p-3.5 px-5 text-sm font-bold flex items-center justify-between cursor-pointer transition-colors hover:bg-gray-50 ${
                        isSelected ? "text-[#334bb1] bg-blue-50/40" : "text-gray-700"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {starredOptionSupport && (
                          <Star 
                            size={16} 
                            className={isSelected || option.starred ? "text-amber-500 fill-amber-500" : "text-gray-300"} 
                          />
                        )}
                        <span>{option.label}</span>
                      </div>
                      {multiple && (
                        <input
                          type="checkbox"
                          checked={isSelected}
                          readOnly
                          className="w-4 h-4 rounded text-[#334bb1] border-gray-300 focus:ring-[#334bb1] cursor-pointer accent-[#334bb1]"
                        />
                      )}
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Selected Tags/Chips for Multi-Select */}
      {multiple && selectedOptions.length > 0 && (
        <div className="flex flex-wrap gap-2.5 pt-1.5 justify-start">
          {selectedOptions.map(option => (
            <div
              key={option.value}
              className="flex items-center gap-2 px-3 py-1.5 bg-[#f0f4ff] border border-blue-100 text-[#334bb1] rounded-xl font-bold text-xs shadow-xs"
            >
              {starredOptionSupport && <Star size={12} className="text-amber-500 fill-amber-500" />}
              <span>{option.label}</span>
              <button
                type="button"
                onClick={(e) => handleRemoveValue(option.value, e)}
                className="p-0.5 rounded-full hover:bg-blue-200 transition-colors text-[#334bb1]"
              >
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
