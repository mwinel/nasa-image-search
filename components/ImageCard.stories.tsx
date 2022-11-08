import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

import { ImageCard } from './ImageCard';

export default {
    title: 'NASA IMAGE SEARCH/ImageCard',
    component: ImageCard,
    decorators: [(card) => <div className='m-12 w-64'>{card()}</div>],
    parameters: {
        componentSubtitle:
            'Image card component that displays a single image on the search page.',
    },
} as ComponentMeta<typeof ImageCard>;

const Template: ComponentStory<typeof ImageCard> = (args) => (
    <ImageCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
    imageUrl:
        'https://images.pexels.com/photos/13164333/pexels-photo-13164333.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    imageAlt: 'sample image',
};

export const WithInteractions = Template.bind({});
WithInteractions.args = {
    imageUrl: 'https://images.pexels.com/photos/13164333/pexels-photo-13164333.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    imageAlt: 'sample image',
}

WithInteractions.play = async ({ canvasElement, storyContext }) => {
    const canvas = within(canvasElement);
    const imageCard = await canvas.findByRole('img');
    expect(imageCard).toHaveAttribute('src', 'https://images.pexels.com/photos/13164333/pexels-photo-13164333.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load');
}
