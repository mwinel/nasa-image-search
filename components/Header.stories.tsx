import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userEvent, within, screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Header } from './Header';

export default {
    title: 'NASA IMAGE SEARCH/Header',
    component: Header,
    parameters: {
        componentSubtitle: 'Header component that displays the title of the page.',
    }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderTitle = Template.bind({});
HeaderTitle.args = {
    title: 'NASA Image Search',
};

export const WithInteractions = (args: any) => <Header {...args} />;
WithInteractions.args = {
    title: 'NASA Image Search',
};

WithInteractions.play = async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/nasa image search/i)).toBeInTheDocument();
};
