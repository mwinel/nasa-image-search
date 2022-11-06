import React from 'react';
import clsx from 'clsx';

import { Button } from './Button';

interface SearchInputProps {
    /**
     * Name of search input field
     */
    name?: string;
    /**
     * Placeholder text for search input field
     */
    placeholder?: string;
    /**
     * htmlFor attribute for search input field
     */
    value?: string;
    /**
     * Custom class name
     */
    className?: string;
    /**
     * Callback function for when the search input field changes
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Search input UI component
 */
export const SearchInput = ({
    name,
    placeholder,
    value,
    onChange,
    className,
    ...props
}: SearchInputProps) => {
    return (
        <div className="flex items-center justify-center">
            <input
                type="search"
                name={name}
                className={clsx(
                    'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500',
                    className
                )}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...props}
            />
            <Button label="Search" primary className="ml-2" />
        </div>
    );
};
