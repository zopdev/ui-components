import {
  EnvelopeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import InputField from "./Input";
import { fn } from "@storybook/test";

export default {
  title: "Atom/Input",
  component: InputField,
  argTypes: {
    label: { control: "text" },
    helperText: { control: "text" },
    placeholder: { control: "text" },
    type: { control: "text" },
    value: { control: "text" },
    labelHint: { control: "text" },
    isError: { control: "boolean" },
    disabled: { control: "boolean" },
    leadingIcon: {
      control: "object",
    },
    trailingIcon: {
      control: "object",
    },
  },
  args: { onChange: fn() },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    label: "Email",
    helperText: "We'll only use this for spam.",
    placeholder: "say something",
    isError: false,
    disabled: false,
    labelHint: "Optional",
    type: "email",
    onChange: fn(),
    leadingIcon: (
      <EnvelopeIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
    ),
    trailingIcon: (
      <QuestionMarkCircleIcon
        aria-hidden="true"
        className="h-5 w-5 text-gray-400"
      />
    ),
  },
};

export const Input_with_label = {
  args: {
    label: "Email",
    placeholder: "say something",
  },
};

export const Input_with_help_text = {
  args: {
    label: "Email",
    placeholder: "say something",
    helperText: "We'll only use this for spam.",
  },
};

export const Input_with_validation_error = {
  args: {
    label: "Email",
    placeholder: "say something",
    helperText: "Not a valid email address.",
    value: "adityacom",
    isError: true,
  },
};

export const Input_with_disabled_state = {
  args: {
    label: "Email",
    placeholder: "say something",
    value: "you@example.com",
    disabled: true,
  },
};

export const Input_without_label = {
  args: {
    value: "you@example.com",
  },
};

export const Input_with_label_hint = {
  args: {
    label: "Email",
    placeholder: "say something",
    value: "you@example.com",
    labelHint: "Optional",
  },
};

export const Input_with_leading_icon = {
  args: {
    label: "Email",
    placeholder: "say something",
    value: "you@example.com",
    leadingIcon: (
      <EnvelopeIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
    ),
  },
};

export const Input_with_trailing_icon = {
  args: {
    label: "Email",
    placeholder: "say something",
    value: "you@example.com",
    trailingIcon: (
      <QuestionMarkCircleIcon
        aria-hidden="true"
        className="h-5 w-5 text-gray-400"
      />
    ),
  },
};
