import PropTypes from "prop-types";

export default function Button({ label, size, ...props}) {
    let classes = "bg-primary-500 shadow-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 hover:bg-primary-400 "
    switch (size) {
        case 'XS':
            classes += 'rounded px-2 py-1 text-xs'
            break;
        case 'S':
            classes += 'rounded px-2 py-1 text-sm'
            break;
        case 'M':
            classes += 'rounded-md px-2.5 py-1.5 text-sm'
            break;
        case 'L':
            classes += 'rounded-md px-3 py-2 text-sm'
            break;
        case 'XL':
            classes += 'rounded-md px-3.5 py-2.5 text-sm'
            break;
        default:
            classes += 'rounded-md px-2.5 py-1.5 text-sm'
    }

    return (
        <button type="button" className={classes} {...props}>{label}</button>
    )
}

Button.propTypes = {
    /** How large should the button be? */
    size: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL']),
    /** Button contents */
    label: PropTypes.string.isRequired,
    /** Optional click handler */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    label: 'Get Started',
    size: 'M',
    onClick: undefined,
};