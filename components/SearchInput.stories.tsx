import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import { SearchInput } from './SearchInput';

export default {
    title: 'Example/SearchInput',
    component: SearchInput,
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
