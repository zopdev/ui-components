import { fn } from "@storybook/test";
import Faq from "./Faq";

export default {
  title: "Marketing/Faq",
  component: Faq,
  tags: ["autodocs"],
  argTypes: {
    data: { control: "array" },
  },
  args: { onClick: fn() },
};

export const COL = {
  args: {
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
    variant: "COL",
    title: "Frequently asked questions",
    onClick: undefined,
  },
};

export const ROW = {
  args: {
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
    variant: "ROW",
    title: "Frequently asked questions",
    onClick: undefined,
  },
};

export const GRID = {
  args: {
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
  },
};

export const Default = {
  args: {
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
    title: "Frequently asked questions",
    onClick: undefined,
  },
};
