import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userEvent, within, screen, } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Button } from './Button';

export default {
    title: 'Example/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};

export const WithInteractions = (args: any) => <Button {...args} />;
WithInteractions.args = {
    primary: true,
    label: 'Button',
    onClick: () => console.log('clicked'),
};

WithInteractions.play = async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    expect(screen.getByText(/button/i)).toBeInTheDocument();
};
