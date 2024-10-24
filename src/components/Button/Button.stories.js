import Button from "./Button";
import { fn } from '@storybook/test';

export default {
    title: 'Atom/Button',
    component: Button,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        label: { control: 'text' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
};

export const ExtraSmall = {
    args: {
        label: "Get Started",
        size: 'XS',
    },
};

export const Small = {
    args: {
        label: "Get Started",
        size: 'S',
    },
};

export const Default = {
    args: {
        label: "Get Started",
        size: 'M',
    },
};

export const Large = {
    args: {
        label: "Get Started",
        size: 'L',
    },
};

export const ExtraLarge = {
    args: {
        label: "Get Started",
        size: 'XL',
    },
};