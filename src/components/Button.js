import PropTypes from 'prop-types'

function Button({ color, name, onClick }) {
    return (
        <>
        <button className='btn' style={{ backgroundColor: color }} onClick= {onClick}>{name}</button>
        </>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
