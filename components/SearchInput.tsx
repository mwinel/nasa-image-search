import React from 'react';
import clsx from 'clsx';

import { Button } from './Button';

interface SearchInputProps {
    /**
     * Name of search input field
     */
    name?: string;
    /**
     * Label for search input field
     */
    label?: string;
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
    /**
     * Callback function for when the search input field is submitted
     */
    onSubmit?: () => void;
}

/**
 * Search input UI component
 */
export const SearchInput = ({
    name,
    label,
    placeholder,
    value,
    onChange,
    onSubmit,
    className,
    ...props
}: SearchInputProps) => {
    return (
        <div className={clsx('flex items-center justify-center', className)}>
            <label htmlFor={name} className="sr-only">
                {name}
            </label>
            <input
                type="search"
                name={name}
                aria-label={name}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...props}
            />
            <Button
                label="Search"
                primary
                className="ml-2"
                onClick={onSubmit}
                type="submit"
            />
        </div>
    );
};
