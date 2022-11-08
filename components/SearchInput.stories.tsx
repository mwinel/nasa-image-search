import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { SearchInput } from './SearchInput';

export default {
    title: 'NASA IMAGE SEARCH/SearchInput',
    component: SearchInput,
    argTypes: {
        onChange: { action: 'onChange' },
        onSubmit: { action: 'onSubmit' },
    },
    parameters: {
        componentSubtitle:
            'Search input component that allows users to search for images.',
    },
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
    <SearchInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
    name: 'search',
    placeholder: 'Search for images',
    value: '',
    onChange: () => {},
};

export const WithInteractions = Template.bind({});
WithInteractions.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    expect(args.onSubmit).not.toHaveBeenCalled();

    await userEvent.type(canvas.getByRole('searchbox'), 'Mars');
    await userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
        expect(args.onChange).toHaveBeenCalledTimes(4);
        expect(args.onSubmit).toHaveBeenCalledTimes(1);
    });
};
