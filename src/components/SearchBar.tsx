import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <div className="relative transform transition-all duration-300 hover:scale-[1.02]">
    <Input
      type="text"
      placeholder="Enter your research topic here..."
      className="pl-12 pr-4 py-6 text-lg rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
      value={value}
      onChange={onChange}
    />
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
  </div>
);