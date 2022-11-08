import clsx from 'clsx';

interface ContainerProps {
    /**
     *  Child components
     */
    children?: React.ReactNode;
    /**
     * Custom class name
     */
    className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
    return (
        <div
            className={clsx(
                'mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8',
                className
            )}
        >
            {children}
        </div>
    );
};
