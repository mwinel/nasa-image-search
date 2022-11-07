import { ImageCard } from './ImageCard';

interface SearchResultsProps {
    /**
     * Search results
     * 
     * Array of image objects
     * @type {Array}
     * @default []
     * @example
     * [
     *    {
     *       id: 1,
     *       title: 'Image 1',
     *       url: 'https://images.pexels.com/photos/13164333/pexels-photo-13164333.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
     *       bookmarked: false,
     *    },
     * ]
     *
     */
    results?: Array<{}>;
    /**
     * Loading state
     * @type {boolean}
     * @default false
     */
    loading?: boolean;
    /**
     * Callback function to handle bookmarking an image
     */
    onBookmarkImage?: (id: number) => void;
}

export const SearchResults = ({
    loading,
    results,
    onBookmarkImage,
}: SearchResultsProps) => {
    const events = { onBookmarkImage };

    const LoadingPlaceholder = (
        <div className="animate-pulse bg-gray-100 rounded-lg h-64 w-64 border border-gray-100" />
    );

    if (loading) {
        return (
            <>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {LoadingPlaceholder}
                    {LoadingPlaceholder}
                </div>
            </>
        );
    }

    if (results?.length === 0) {
        return <div>No results found.</div>;
    }

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results?.map((image: any) => (
                <ImageCard
                    key={image.id}
                    imageUrl={image.url}
                    imageAlt={image.name}
                    {...events}
                />
            ))}
        </div>
    );
};
