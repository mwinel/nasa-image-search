import clsx from 'clsx';

interface ButtonProps {
    /**
     * Button variant
     */
    primary?: boolean;
    /**
     * Custom class name
     */
    className?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Button UI component for user interaction. For example, you can use a button for allowing the functionality of
 * submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 */
export const Button = ({
    primary = false,
    size = 'medium',
    onClick,
    className,
    label,
    ...props
}: ButtonProps) => {
    const mode = primary
        ? 'bg-blue-600 text-white border border-blue-600 hover:bg-blue-700'
        : 'bg-transparent text-gray-800 border hover:bg-gray-50';

    return (
        <button
            type="button"
            role="button"
            className={clsx(
                'inline-flex items-center justify-center px-6 py-2 rounded-lg font-semibold lg:w-64',
                mode,
                size === 'small' && 'text-sm',
                size === 'medium' && 'text-base',
                size === 'large' && 'text-lg',
                className
            )}
            onClick={onClick}
            {...props}
        >
            {label}
        </button>
    );
};
