import { Link } from 'react-router-dom'
import './styles.scss'

export const Register = () => {
    return (
        <div className='login-container'>
            <h1>Register</h1>
            <form className='login-form'>
                <input required type='text' placeholder='Usuário'/>
                <input required type='email' placeholder='E-mail'/>
                <input required type='password' placeholder='Senha'/>
                <button>Cadastro</button>
                <p>Dados inválidos</p>
                <span> Já possui uma conta? <Link to='/login'>Login</Link></span>
            </form>
        </div>
    )
}