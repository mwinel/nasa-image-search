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
        <div className="relative">
            <div className="animate-pulse pointer-events-none group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-200"></div>
            <p className="animate-pulse pointer-events-none mt-2 truncate block text-sm bg-gray-200 rounded h-4 w-32 sm:w-48 md:w-52"></p>
            <p className="animate-pulse pointer-events-none block text-sm bg-gray-200 mt-2 rounded h-4 w-28"></p>
        </div>
    );

    if (loading) {
        return (
            <>
                <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {LoadingPlaceholder}
                    {LoadingPlaceholder}
                    {LoadingPlaceholder}
                    {LoadingPlaceholder}
                    {LoadingPlaceholder}
                    {LoadingPlaceholder}
                    {LoadingPlaceholder}
                    {LoadingPlaceholder}
                    {LoadingPlaceholder}
                    {LoadingPlaceholder}
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
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {results?.map((image: any) => (
                <ImageCard
                    key={image.data[0].nasa_id}
                    imageUrl={image.links[0].href}
                    imageAlt={image.data[0].title}
                    title={image.data[0].title}
                    dateCreated={image.data[0].date_created
                        .split('T')[0]
                        .replace(/-/g, '/')}
                    {...events}
                />
            ))}
        </div>
    );
};
