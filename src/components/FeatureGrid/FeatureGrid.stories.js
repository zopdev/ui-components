import FeatureGrid from "./FeatureGrid";
import { fn } from "@storybook/test";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

export default {
  title: "Marketing/FeatureGrid",
  component: FeatureGrid,
  argTypes: {
    title: { control: "text" },
    heading: { control: "text" },
    subheading: { control: "text" },
  },
  tags: ["autodocs"],
};

const features = [
  {
    name: "Multicloud Deployment",
    description:
      "Seamlessly deploy and manage infrastructure across AWS, Google Cloud, and Azure, all from a single platform.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Observability",
    description:
      "Built-in monitoring and visibility with integrated tools like Prometheus, Grafana, and FluentBit, ensuring real-time insights and log management.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "In-Built Tracing Support",
    description:
      "Native support for distributed tracing, enabling detailed tracking and optimization of application performance across microservices.",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "Container Image Management",
    description:
      "Automatically sets up container registries, handles permissions, and manages credentials for deploying images within your cluster.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Service Configurations",
    description:
      "Manages service settings by handling YAML configurations automatically and requiring only essential input from you.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Secure Datastore Connections",
    description:
      "Simplifies database setup, including creating datastores, managing firewalls, and securely attaching credentials to service pods.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export const Primary = {
  args: {
    title: "Deploy faster",
    heading: "Everything you need to deploy your app",
    subheading:
      "Streamline your infrastructure provision process with user-friendly tools and automated updates. Get your app to users quickly and efficiently—focus on building, while we handle the rest!",
    features: features,
  },
};

export const RightHandedText = {
  args: {
    title: "Deploy Faster",
    heading: "Everything you need to deploy your app",
    subheading:
      "Streamline your infrastructure provision process with user-friendly tools and automated updates.",
    features: features,
    variant: "ROW-RIGHT",
  },
};

export const LeftHandedText = {
  args: {
    title: "Deploy Faster",
    heading: "Everything you need to deploy your app",
    subheading:
      "Streamline your infrastructure provision process with user-friendly tools and automated updates.",
    features: features,
    variant: "ROW-LEFT",
  },
};
