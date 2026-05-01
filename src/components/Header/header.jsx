import './Header.css';

function Header(){


    
    return(
       <header className="header">


            {/*LOGO*/}
            <div className='logo'>
                 <img src="/logo-siqueira.png" alt="logo" className='logo' />
            </div>

            {/*MENU*/}
            <nav className='nav'>
                <a href="#serviços">Serviços
                </a>
                <a href="#especialista">Especialista</a>
            </nav>

            {/*BOTÃO CTA*/}
            <a href="#formulario" className='btn-cta'>
               Agendar consulta gratuita
            </a>


















        </header>
    );
}
export default Header;