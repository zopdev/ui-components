import PropTypes from "prop-types";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function Faq({
  data,
  title,
  variant,
  classNames = {},
  ...props
}) {
  const [openedQuestion, setOpenedQuestion] = useState();

  let defaultClassNames = {
    root: "bg-white",
    wrapper: "mx-auto max-w-4xl divide-y divide-gray-900/10 px-4",
    heading: "text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl",
    cardHolder: "flex flex-col mt-10 divide-y divide-gray-900/10",
    card: "py-6",
    questionWrapper:
      "group flex w-full items-start justify-between text-left text-gray-900",
    question: "text-base font-semibold leading-7",
    controlWrapper: "ml-6 flex h-7 items-center",
    control: "h-6 w-6 cursor-pointer",
    answerWrapper: "mt-2 pr-12",
    answer: "text-base leading-7 text-gray-600",
  };

  switch (variant) {
    case "GRID":
      defaultClassNames = {
        ...defaultClassNames,
        cardHolder: "flex flex-wrap mt-10 gap-4 justify-between p-4",
        card: "py-6 px-4 w-96 shadow-sm rounded-md border border-gray-200",
      };
      break;
    case "COL":
      defaultClassNames = {
        ...defaultClassNames,
      };
      break;
    case "ROW":
      defaultClassNames = {
        ...defaultClassNames,
        cardHolder: "flex overflow-auto mt-10 gap-4 justify-between py-6",
        card: "py-6 px-4 min-w-96 shadow-sm rounded-md border border-gray-200",
      };
      break;
    default:
      defaultClassNames = {
        ...defaultClassNames,
      };
  }

  const formattedClassNames = {
    ...defaultClassNames,
    ...classNames,
  };

  return (
    <div className={formattedClassNames.root}>
      <div className={formattedClassNames.wrapper}>
        <h2 className={formattedClassNames.heading}>{title}</h2>
        <dl className={formattedClassNames.cardHolder}>
          {data.map((faq, i) => (
            <div key={faq.question} className={formattedClassNames.card}>
              <div className={formattedClassNames.questionWrapper}>
                <span className={formattedClassNames.question}>
                  {faq.question}
                </span>
                <span className={formattedClassNames.controlWrapper}>
                  {variant === "COL" ? (
                    openedQuestion === i ? (
                      <MinusIcon
                        onClick={() => {
                          setOpenedQuestion();
                        }}
                        aria-hidden="true"
                        className={formattedClassNames.control}
                      />
                    ) : (
                      <PlusIcon
                        onClick={() => {
                          setOpenedQuestion(i);
                        }}
                        aria-hidden="true"
                        className={formattedClassNames.control}
                      />
                    )
                  ) : (
                    <></>
                  )}
                </span>
              </div>
              <div className={formattedClassNames.answerWrapper}>
                {/*<AnimateHeight customAnimation={"duration-200"}>*/}
                {variant === "COL" ? (
                  openedQuestion === i && (
                    <p className={formattedClassNames.answer}>{faq.answer}</p>
                  )
                ) : (
                  <p className={formattedClassNames.answer}>{faq.answer}</p>
                )}
                {/*</AnimateHeight>*/}
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

Faq.propTypes = {
  /** What is the orientation of button? */
  variant: PropTypes.oneOf(["GRID", "COL", "ROW"]),

  /** Button contents */
  data: PropTypes.array.isRequired,

  /** Title of the component */
  title: PropTypes.string.isRequired,

  /** Optional click handler */
  onChange: PropTypes.func,
};

Faq.defaultProps = {
  data: [
    {
      question: "What is your return policy?",
      answer: "You can return items within 30 days of receipt.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order using the tracking link provided in your confirmation email.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we offer international shipping to select countries.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact us via email at support@example.com or call us at (123) 456-7890.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, PayPal, and Apple Pay.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "You can reset your password by clicking on 'Forgot Password' at the login screen.",
    },
  ],
  variant: "GRID",
  title: "Frequently asked questions",
  onClick: undefined,
};
