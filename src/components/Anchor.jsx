import PropTypes from "prop-types"

const AnchorTag = ({ children, href }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}

AnchorTag.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
}

export default AnchorTag