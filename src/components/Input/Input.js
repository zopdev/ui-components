import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";
import React from "react";

/**
 * @typedef {Object} InputFieldProps
 * @property {string} [label]
 * @property {string} [helperText]
 * @property {string} [placeholder]
 * @property {string} [type]
 * @property {string} [value]
 * @property {boolean} [isError]
 * @property {boolean} [disabled]
 * @property {string} [labelHint]
 * @property {React.ReactNode} [leadingIcon]
 * @property {React.ReactNode} [trailingIcon]
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} [onChange]
 */

const inputClass = {
  error: "text-red-900 ring-red-300 focus:ring-red-500",
  default: "text-gray-900 ring-gray-300 focus:ring-primary-600",
};

const helperTextClass = {
  error: "text-red-600",
  default: "text-gray-500",
};

/**
 * @param {InputFieldProps} props
 */

export default function InputField({
  label,
  helperText,
  isError,
  disabled,
  labelHint,
  leadingIcon,
  trailingIcon,
  placeholder,
  value,
  type,
  onChange,
}) {
  return (
    <div>
      <div className="flex justify-between">
        {label && (
          <label
            htmlFor="zop-input"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            {label}
          </label>
        )}
        {labelHint && (
          <span
            id="zop-input-labelHint"
            className="text-sm leading-6 text-gray-500"
          >
            {labelHint}
          </span>
        )}
      </div>

      <div className="relative rounded-md shadow-sm">
        {leadingIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            {leadingIcon}
          </div>
        )}
        <input
          id="zop-input"
          name="zop-input"
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 ${
            leadingIcon ? "pl-10" : "pl-2"
          }  ${
            isError && !disabled ? inputClass["error"] : inputClass["default"]
          }`}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          {isError && (
            <ExclamationCircleIcon
              aria-hidden="true"
              className="h-5 w-5 text-red-500"
            />
          )}
          {!isError && trailingIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {trailingIcon}
            </div>
          )}
        </div>
      </div>
      {helperText && (
        <p
          id="zop-input-description"
          className={`mt-2 text-sm ${
            isError && !disabled
              ? helperTextClass["error"]
              : helperTextClass["default"]
          }`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}

InputField.propTypes = {
  /** The text label displayed above the input field */
  label: PropTypes.string,

  /** A short helper text displayed below the input field for additional information */
  helperText: PropTypes.string,

  /** Placeholder text displayed inside the input field when it's empty */
  placeholder: PropTypes.string,

  /** The type of input field, e.g., 'text', 'password', etc. */
  type: PropTypes.string,

  /** The current value of the input field */
  value: PropTypes.string,

  /** If true, displays the input field in an error state */
  isError: PropTypes.bool,

  /** If true, disables the input field, making it non-interactive */
  disabled: PropTypes.bool,

  /** Additional hint text displayed next to the label */
  labelHint: PropTypes.string,

  /** An optional icon component displayed at the beginning of the input field */
  leadingIcon: PropTypes.element,

  /** An optional icon component displayed at the end of the input field */
  trailingIcon: PropTypes.element,

  /** Callback function triggered when the input field's value changes */
  onChange: PropTypes.func,
};
