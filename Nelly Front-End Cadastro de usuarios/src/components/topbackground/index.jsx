import UsersImage from '../../../src/assets/img.png'
import { Background } from './styles'

function TopBackground() {
    return (
        <Background>
            <img src={UsersImage} alt="Imagem de usuários" />
        </Background>
    )
}


export default TopBackground