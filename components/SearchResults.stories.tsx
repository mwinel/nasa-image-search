import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

import { SearchResults } from './SearchResults';

export default {
    title: 'NASA IMAGE SEARCH/SearchResults',
    component: SearchResults,
    decorators: [(results) => <div style={{ margin: '3em' }}>{results()}</div>],
    argTypes: {},
    parameters: {
        componentSubtitle:
            'Search results component that displays a list of images.',
    },
} as ComponentMeta<typeof SearchResults>;

const Template: ComponentStory<typeof SearchResults> = (args) => (
    <SearchResults {...args} />
);

export const Results = Template.bind({});
Results.args = {
    results: [
        {
            data: [
                {
                    center: 'JSC',
                    date_created: '1969-07-21T00:00:00Z',
                    description: '',
                    nasa_id: 'as11-40-5874',
                    title: 'Apollo 11 Mission image - Astronaut Edwin Aldrin poses beside th',
                },
            ],
            href: 'https://images-assets.nasa.gov/image/as11-40-5874/collection.json',
            links: [
                {
                    href: 'https://images-assets.nasa.gov/image/as11-40-5874/as11-40-5874~thumb.jpg',
                },
            ],
        },
        {
            data: [
                {
                    center: 'JSC',
                    date_created: '2009-09-24T18:00:22Z',
                    description: '',
                    nasa_id: 'PIA12235',
                    title: 'Nearside of the Moon',
                },
            ],
            href: 'https://images-assets.nasa.gov/image/as11-40-5874/collection.json',
            links: [
                {
                    href: 'https://images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg',
                },
            ],
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    results: [],
    loading: true,
};

export const NoResults = Template.bind({});
NoResults.args = {
    ...Loading.args,
    loading: false,
};

export const WithInteractions = (args: any) => <SearchResults {...args} />;
WithInteractions.args = {
    results: [
        {
            data: [
                {
                    center: 'JSC',
                    date_created: '1969-07-21T00:00:00Z',
                    description: '',
                    nasa_id: 'as11-40-5874',
                    title: 'Apollo 11 Mission image - Astronaut Edwin Aldrin poses beside th',
                },
            ],
            href: 'https://images-assets.nasa.gov/image/as11-40-5874/collection.json',
            links: [
                {
                    href: 'https://images-assets.nasa.gov/image/as11-40-5874/as11-40-5874~thumb.jpg',
                },
            ],
        },
        {
            data: [
                {
                    center: 'JSC',
                    date_created: '2009-09-24T18:00:22Z',
                    description: '',
                    nasa_id: 'PIA12235',
                    title: 'Nearside of the Moon',
                },
            ],
            href: 'https://images-assets.nasa.gov/image/as11-40-5874/collection.json',
            links: [
                {
                    href: 'https://images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg',
                },
            ],
        },
    ],
};

WithInteractions.play = async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const image = canvas.getByAltText(/Apollo 11 Mission image - Astronaut Edwin Aldrin poses beside th/i);
    expect(image).toBeInTheDocument();
}
