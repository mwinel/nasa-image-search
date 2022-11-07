import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchResults } from './SearchResults';

export default {
    title: 'NASA IMAGE SEARCH/SearchResults',
    component: SearchResults,
    decorators: [(results) => <div style={{ margin: '3em' }}>{results()}</div>],
    parameters: {
        componentSubtitle: 'Search results component that displays a list of images.',
    }
} as ComponentMeta<typeof SearchResults>;

const Template: ComponentStory<typeof SearchResults> = (args) => (
    <SearchResults {...args} />
);

export const Results = Template.bind({});
Results.args = {
    results: [
        {
            id: 1,
            title: 'Image 1',
            url: 'https://images.pexels.com/photos/13164333/pexels-photo-13164333.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
            bookmarked: false,
        },
        {
            id: 2,
            title: 'Image 2',
            url: 'https://images.pexels.com/photos/13756268/pexels-photo-13756268.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
            bookmarked: false,
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
