import FeatureGrid from "./FeatureGrid";
import {fn} from "@storybook/test";

export default {
    title: 'Marketing/FeatureGrid',
    component: FeatureGrid,
    argTypes: {
        title: { control: 'text' },
        heading: { control: 'text' },
        subheading: { control: 'text' },
    },
};

export const Primary = {
    args: {
        title: "Deploy faster",
        heading: "Everything you need to deploy your app",
        subheading: 'Streamline your infrastructure provision process with user-friendly tools and automated updates. Get your app to users quickly and efficiently—focus on building, while we handle the rest!',
    },
};