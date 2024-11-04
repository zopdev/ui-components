import React from "react";

import PropTypes from "prop-types";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BlogSection({
  title,
  subtitle,
  posts = [],
  variants = "grid-image",
  orientation = "row",
}) {
  const containerClasses = classNames(
    "bg-white py-20 sm:py-28",
    orientation === "column" ? "max-w-2xl lg:max-w-4xl" : "max-w-7xl"
  );

  const headerClasses = classNames(
    "text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl",
    orientation !== "column" && "text-center"
  );

  const gridClasses = classNames(
    orientation === "column"
      ? "mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16"
      : "mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3",
    variants === "grid-text" && "border-t border-gray-200"
  );

  return (
    <div className={containerClasses}>
      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto">
          <h2 className={headerClasses}>{title}</h2>
          {subtitle && (
            <p className="mt-2 text-lg/8 text-gray-600">{subtitle}</p>
          )}
        </div>
        <div className={gridClasses}>
          {posts?.map((post) => (
            <article
              key={post.id}
              className={classNames(
                variants === "grid-image" && orientation === "column"
                  ? "relative isolate flex flex-col gap-8 lg:flex-row"
                  : "flex flex-col items-start justify-between"
              )}
            >
              {variants === "grid-image" && (
                <div
                  className={classNames(
                    orientation === "column"
                      ? "relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0"
                      : "relative w-full"
                  )}
                >
                  <img
                    alt={post.title}
                    src={post.imageUrl}
                    className={classNames(
                      orientation === "column"
                        ? "absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                        : "aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    )}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              )}
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    alt={post.author.name}
                    src={post.author.imageUrl}
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

BlogSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      datetime: PropTypes.string.isRequired,
      category: PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }).isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  variants: PropTypes.oneOf(["grid-image", "grid-text"]),
  orientation: PropTypes.oneOf(["row", "column"]),
};

// ImageGrid.defaultProps = {
//   subtitle: "",
//   variants: "grid-image",
//   orientation: "row",
// };
