import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef {Object} ClassNames
 * @property {string} [root] - Class name for the root container.
 * @property {string} [container] - Class name for the main container.
 * @property {string} [textContainer] - Class name for the text container.
 * @property {string} [title] - Class name for the title.
 * @property {string} [heading] - Class name for the heading.
 * @property {string} [subheading] - Class name for the subheading.
 * @property {string} [featuresContainer] - Class name for the features container.
 * @property {string} [featuresGrid] - Class name for the features grid.
 * @property {string} [featureItem] - Class name for each feature item.
 * @property {string} [featureName] - Class name for the feature name.
 * @property {string} [featureIcon] - Class name for the feature icon.
 * @property {string} [featureDescription] - Class name for the feature description.
 * @property {string} [featureLink] - Class name for the feature link.
 */

/**
 * @typedef {Object} Feature
 * @property {string} name - The name of the feature.
 * @property {string} description - The description of the feature.
 * @property {React.ComponentType<React.SVGProps<SVGSVGElement>>} icon - The React component for the feature icon.
 */

/**
 * @typedef {{
 *   title: string,
 *   heading: string,
 *   subheading?: string,
 *   features: Feature[],
 *   classNames?: ClassNames,
 *   variant?: "GRID" | "ROW-LEFT" | "ROW-RIGHT"
 * }} FeatureGridProps
 */

/**
 * @param title
 * @param heading
 * @param subheading
 * @param features
 * @param classNames
 * @param variant
 * @param {FeatureGridProps} props - The component props.
 * @returns {JSX.Element}
 */

/**
 * FeatureGrid component for displaying a grid of features.
 */

export default function FeatureGrid({
  title,
  heading,
  subheading,
  features,
  classNames = {},
  variant = "GRID",
  ...props
}) {
  let defaultClassNames = {
    root: "bg-gray-50 py-24 mt-8 sm:py-32",
    container: "mx-auto max-w-7xl px-6 lg:px-8",
    textContainer: "mx-auto max-w-2xl lg:text-center",
    title: "text-base font-semibold leading-7 text-primary-600",
    heading: "mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
    subheading: "mt-6 text-lg leading-8 text-gray-600",
    featuresContainer:
      "mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none",
    featuresGrid:
      "grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3",
    featureItem: "flex flex-col",
    featureName:
      "flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900",
    featureIcon: "h-5 w-5 flex-none text-primary-600",
    featureDescription:
      "mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600",
    featureLink: "text-sm font-semibold leading-6 text-indigo-600",
  };

  switch (variant) {
    case "GRID":
      defaultClassNames = {
        ...defaultClassNames,
      };
      break;

    case "ROW-RIGHT":
      defaultClassNames = {
        ...defaultClassNames,
        root: "bg-gray-50 py-10",
        featuresGrid: "flex py-6 flex-wrap gap-4 md:min-w-100",
        featureItem: "flex flex-col min-w-52 max-w-64 flex-1 p-2 rounded-md",
        container: "flex flex-col gap-2 p-8 md:flex-row",
        textContainer: "text-center md:w-2/3 md:text-left",
        featuresContainer: "w-full",
      };
      break;

    case "ROW-LEFT":
      defaultClassNames = {
        ...defaultClassNames,
        root: "bg-gray-50 py-10",
        featuresGrid: "flex py-6 flex-wrap gap-4 md:min-w-100",
        featureItem: "flex flex-col min-w-52 max-w-64 flex-1 p-2 rounded-md",
        container: "flex flex-col gap-2 p-8 md:flex-row-reverse",
        textContainer: "text-center md:w-2/3 md:text-left",
        featuresContainer: "w-full",
      };
      break;
  }

  const formattedClassNames = {
    ...defaultClassNames,
    ...Object.keys(classNames).reduce((acc, className) => {
      acc[className] =
        `${defaultClassNames[className]} ${classNames[className]}`;
      return acc;
    }, {}),
  };

  return (
    <div className={formattedClassNames.root} {...props}>
      <div className={formattedClassNames.container}>
        <div className={formattedClassNames.textContainer}>
          <h2 className={formattedClassNames.title}>{title}</h2>
          <p className={formattedClassNames.heading}>{heading}</p>
          <p className={formattedClassNames.subheading}>{subheading}</p>
        </div>
        <div className={formattedClassNames.featuresContainer}>
          <dl className={formattedClassNames.featuresGrid}>
            {features.map((feature) => (
              <div
                key={feature.name}
                className={formattedClassNames.featureItem}
              >
                <dt className={formattedClassNames.featureName}>
                  <feature.icon
                    aria-hidden="true"
                    className={formattedClassNames.featureIcon}
                  />
                  {feature.name}
                </dt>
                <dd className={formattedClassNames.featureDescription}>
                  <p className="flex-auto">{feature.description}</p>
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
  /** Smaller text at the top of component - a couple of words */
  title: PropTypes.string.isRequired,
  /** Large heading - ideally a single statement */
  heading: PropTypes.string.isRequired,
  /** Small heading - can be descriptive */
  subheading: PropTypes.string,
  /** Array of feature objects */
  features: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      // Uncomment if you want to include href in the feature object
      // href: PropTypes.string,
    }),
  ).isRequired,
  /** Custom class names for overriding default styles */
  classNames: PropTypes.object,

  variant: PropTypes.oneOf(["GRID", "ROW-LEFT", "ROW-RIGHT"]),
};
