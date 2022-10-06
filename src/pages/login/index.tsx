import { Link } from 'react-router-dom'
import './styles.scss'


export const Login = () => {
    return (
        <div className='login-container'>
            <h1>Login</h1>
            <form className='login-form'>
                <input required type='text' placeholder='Usuário'/>
                <input required type='password' placeholder='Senha'/>
                <button>Login</button>
                <p>Dados inválidos</p>
                <span> Não possui uma conta? <Link to='/register'>Registre-se</Link></span>
            </form>
        </div>
    )
}