import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ImageCard } from './ImageCard';

export default {
    title: 'Example/ImageCard',
    component: ImageCard,
} as ComponentMeta<typeof ImageCard>;

const Template: ComponentStory<typeof ImageCard> = () => (
    <div className='flex items-center justify-center w-full'>
        <ImageCard
            imageUrl="https://images.pexels.com/photos/13164333/pexels-photo-13164333.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            imageAlt="sample image"
        />
    </div>
);

export const Default = Template.bind({});
