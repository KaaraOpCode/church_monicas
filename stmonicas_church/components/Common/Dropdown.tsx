import React, { useState, useRef, useEffect } from 'react';

interface DropdownOption<T = unknown> {
  id: string | number;
  label: string;
  value: T;
}

interface DropdownProps<T = unknown> {
  options: DropdownOption<T>[];
  selectedOption?: DropdownOption<T> | null;
  placeholder?: string;
  onChange: (option: DropdownOption<T>) => void;
  className?: string;
  disabled?: boolean;
}

const Dropdown = <T = unknown>({
  options,
  selectedOption,
  placeholder = 'Select an option',
  onChange,
  className = '',
  disabled = false,
}: DropdownProps<T>): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (option: DropdownOption<T>) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div 
      ref={dropdownRef} 
      className={`relative ${className}`}
    >
      <button
        type="button"
        className={`w-full px-4 py-2 text-left bg-white border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${
          disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'hover:border-gray-400'
        }`}
        onClick={toggleDropdown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center justify-between">
          <span className="block truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <svg
            className={`w-5 h-5 ml-2 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          <ul
            className="py-1"
            role="listbox"
            aria-labelledby="dropdown-button"
          >
            {options.map((option) => (
              <li
                key={option.id}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                  selectedOption?.id === option.id ? 'bg-blue-50 text-blue-700' : ''
                }`}
                role="option"
                aria-selected={selectedOption?.id === option.id}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </li>
            ))}
            {options.length === 0 && (
              <li className="px-4 py-2 text-sm text-gray-500">No options available</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
