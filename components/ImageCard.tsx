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
}

/**
 * Image card UI component
 */
export const ImageCard = ({ imageUrl, imageAlt }: ImageCardProps) => {
    return (
        <div className="relative rounded-lg w-64 h-64">
            <Image
                src={imageUrl!}
                alt={imageAlt!}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
            />
        </div>
    );
};
