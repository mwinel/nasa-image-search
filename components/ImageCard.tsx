import Image from 'next/image';

interface ImageCardProps {
    /**
     * Image source or url
     */
    imageUrl?: string;
    /**
     * Image alt text
     */
    imageAlt?: string;
    /**
     * Title of image
     */
    title?: string;
    /**
     * Date created
     */
    dateCreated?: string;
}

/**
 * Image card UI component
 */
export const ImageCard = ({
    imageUrl,
    imageAlt,
    title,
    dateCreated,
}: ImageCardProps) => {
    return (
        <div className="relative">
            <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
                <Image
                    src={imageUrl!}
                    alt={imageAlt!}
                    fill
                    className="pointer-events-none object-cover group-hover:opacity-75"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                />
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                {title}
            </p>
            <p className="pointer-events-none block text-sm font-medium mt-1 text-gray-500">
                {dateCreated}
            </p>
        </div>
    );
};
