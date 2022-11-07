interface HeaderProps {
    /**
     * Search page title
     */
    title?: string;
}

export const Header = ({ title }: HeaderProps) => (
    <header>
        <h1 className="text-gray-800 font-bold text-2xl">{title}</h1>
    </header>
);
