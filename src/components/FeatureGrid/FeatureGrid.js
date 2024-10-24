import React from 'react';
import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid';
import PropTypes from "prop-types";

const features = [
    {
        name: 'Multicloud Deployment',
        description:
            'Seamlessly deploy and manage infrastructure across AWS, Google Cloud, and Azure, all from a single platform.',
        href: '#',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Observability',
        description:
            'Built-in monitoring and visibility with integrated tools like Prometheus, Grafana, and FluentBit, ensuring real-time insights and log management.',
        href: '#',
        icon: LockClosedIcon,
    },
    {
        name: 'In-Built Tracing Support',
        description:
            'Native support for distributed tracing, enabling detailed tracking and optimization of application performance across microservices.',
        href: '#',
        icon: ArrowPathIcon,
    },
    {
        name: 'Container Image Management',
        description:
            'Automatically sets up container registries, handles permissions, and manages credentials for deploying images within your cluster.',
        href: '#',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Service Configurations',
        description:
            'Manages service settings by handling YAML configurations automatically and requiring only essential input from you.',
        href: '#',
        icon: LockClosedIcon,
    },
    {
        name: 'Secure Datastore Connections',
        description:
            'Simplifies database setup, including creating datastores, managing firewalls, and securely attaching credentials to service pods.',
        href: '#',
        icon: ArrowPathIcon,
    },
    //   {
    //     name: 'Ingress Management',
    //     description:
    //       'Automatically configures host attachments and manages TLS certificates to securely expose your services to the internet.',
    //     href: '#',
    //     icon: CloudArrowUpIcon,
    //   },
    //   {
    //     name: 'Permission Management',
    //     description:
    //       'Streamlines user permission setup by allowing you to assign RBAC using email addresses, simplifying access control.',
    //     href: '#',
    //     icon: LockClosedIcon,
    //   },
];

export default function FeatureGrid({ title, heading, subheading, ...props }) {
    return (
        <div className="bg-gray-50 py-24 mt-8 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary-600">{title}</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {heading}
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        {subheading}
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                    <feature.icon aria-hidden="true" className="h-5 w-5 flex-none text-primary-600" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                    <p className="mt-6">
                                        {/* <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a> */}
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}

FeatureGrid.propTypes = {
    /** Smaller text at the top of component - couple of words */
    title: PropTypes.string,
    /** Large heading - ideally a single statement */
    heading: PropTypes.string,
    /** Small heading - can be descriptive */
    subheading: PropTypes.string,
};