import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Container } from './Container';

export default {
    title: 'NASA IMAGE SEARCH/Container',
    component: Container,
    parameters: {
        componentSubtitle:
            'Container component that wraps and centers the content of the page.',
    },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
    <Container {...args} />
);

export const ContainerWithChildren = Template.bind({});
ContainerWithChildren.args = {
    children: <div className="border p-10 rounded-lg">Container children</div>,
};

export const WithInteractions = (args: any) => <Container {...args} />;
WithInteractions.args = {
    children: <div className="border p-10 rounded-lg">Container children</div>,
};

WithInteractions.play = async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/container children/i)).toBeInTheDocument();
};
