import clsx from 'clsx';

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
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
 * Button UI component for user interaction
 */
export const Button = ({
    primary = false,
    size = 'medium',
    className,
    label,
    ...props
}: ButtonProps) => {
    const mode = primary
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-transparent text-gray-800 border hover:bg-gray-50';

    return (
        <button
            type="button"
            role="button"
            className={clsx(
                'inline-flex items-center px-4 py-2 rounded-lg font-semibold',
                mode,
                size === 'small' && 'text-sm',
                size === 'medium' && 'text-base',
                size === 'large' && 'text-lg',
                className
            )}
            {...props}
        >
            {label}
        </button>
    );
};
