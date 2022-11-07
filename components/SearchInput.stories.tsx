import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import { SearchInput } from './SearchInput';

export default {
    title: 'NASA IMAGE SEARCH/SearchInput',
    component: SearchInput,
    parameters: {
        componentSubtitle: 'Search input component that allows users to search for images.',
    }
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = () => {
    const [value, setValue] = useState('');

    return (
        <SearchInput
            name="search"
            placeholder="Search NASA images..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

export const Default = Template.bind({});
