import PropTypes from 'prop-types'
import { Button } from './styles'

function DefaultButton({children, theme, ...props}){ //... + nome da variavél = pegar as demais informações ex: props = propriedades
    return(
        <Button {...props} theme={theme}>{children}</Button>
    )
}

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

export default DefaultButton