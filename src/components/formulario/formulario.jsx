import './Formulario.css'
import { useState } from 'react';


function Formulario() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [servico, setServico] = useState('');
    const [enviado, setEnviado] = useState(false);
    const [dadosEnviados, setDadosEnviados] = useState(null);
    const [erros, setErros] = useState({});

    function formatarTelefone(valor) {
        const numeros = valor.replace(/\D/g, '');


        if (numeros.length <= 2) {
            return numeros;
        }

        if (numeros.length <= 7) {
            return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
        }

        return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7, 11)}`;
    }
    return (
        <div className="app">

           


            <h1>Siqueira Regulariza</h1>
            <h2>Solicite sua consulta gratuita</h2>
            <h4>Preencha os dados abaixo e nossa equipe entrará em contato</h4>
            <div className='card'>
                <form onSubmit={(e) => {
                    e.preventDefault();

                    const novosErros = {};

                    if (!nome.trim()) {
                        novosErros.nome = 'Nome é obrigatorio'
                    }

                    if (!email.includes('@') || !email.includes('.')) {
                        novosErros.email = 'Email inválido'
                    }

                    if (!telefone) {
                        novosErros.telefone = 'Telefone obrigatório'
                    } else if (telefone.length < 11) {
                        novosErros.telefone = 'Telefone inválido'
                    }

                    if (!servico) {
                        novosErros.servico = 'Selecione um serviço'
                    }

                    //se tiver erro, PARA aqui 
                    if (Object.keys(novosErros).length > 0) {
                        setErros(novosErros)
                        return
                    }

                    //linpa erros se estiver tudo certo
                    setErros({});

                    const dados = {
                        nome,
                        email,
                        telefone,
                        servico

                    };
                    console.log(dados)
                    setDadosEnviados(dados)
                    setEnviado(true)


                    // 👇 LIMPAR FORMULÁRIO
                    setNome('')
                    setEmail('')
                    setTelefone('')
                    setServico('')
                }}
                >
                    <div className='input-group'>
                        <input
                            placeholder='Nome completo'
                            type='text'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />

                        {erros.nome && <p style={{ color: 'red' }}> {erros.nome}</p>}
                        <br />
                    </div>

                    <div className='input-group'>
                        <input
                            placeholder='Email'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {erros.email && <p style={{ color: 'red' }}> {erros.email}</p>}
                        <br />
                    </div>

                    <div className='input-group'>
                        <input
                            type="tel"
                            placeholder="Ex: (11) 91234-5678"
                            value={telefone}
                            onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
                        />
                        {erros.telefone && <p style={{ color: 'red' }}> {erros.telefone}</p>}
                    </div>


                    <h2 className='text-de-escolha'>Qual serviço você precisa?</h2>

                    <div className='radio-group'>
                        <div className='radio-item'>
                            <label
                                htmlFor="Abertura">Abertura

                            </label>
                            <input
                                type="radio"
                                id="Abertura"
                                name="servico"
                                value="Abertura"
                                checked={servico === 'Abertura'}
                                onChange={(e) => setServico(e.target.value)}

                            />

                        </div>



                        {/*Regularização*/}
                        <div className='radio-item'>
                            <label
                                htmlFor="Regularização">Regularização de CNPJ

                            </label>

                            <input

                                type="radio"
                                id="Regularização"
                                name="servico"
                                value="Regularização"
                                checked={servico === 'Regularização'}
                                onChange={(e) => setServico(e.target.value)}

                            />

                        </div>



                        {/*Consultoria*/}
                        <div className='radio-item'>
                            <label htmlFor="Consultoria">
                                Consultoria
                            </label>

                            <input
                                className='servicos'
                                type="radio"
                                name="servico"
                                id="Consultoria"
                                value="Consultoria"
                                checked={servico === 'Consultoria'}
                                onChange={(e) => setServico(e.target.value)}
                            />


                        </div>



                        {/*imposto*/}
                        <div className='radio-item'>
                            <label htmlFor="Imposto">
                                Imposto
                            </label>

                            <input
                                className='servicos'
                                type="radio"
                                name="servico"
                                id="Imposto"
                                value="Imposto"
                                checked={servico === 'Imposto'}
                                onChange={(e) => setServico(e.target.value)}
                            />

                        </div>



                        {/*MEI*/}
                        <div className='radio-item'>
                            <label htmlFor="MEI">
                                MEI
                            </label>

                            <input
                                className='servicos'
                                type="radio"
                                name="servico"
                                id="MEI"
                                value="MEI"
                                checked={servico === 'MEI'}
                                onChange={(e) => setServico(e.target.value)}
                            />


                        </div>


                        {/*simples nacional*/}
                        <div className='radio-item'>
                            <label htmlFor="Simples-nacional">
                                Simples nacional
                            </label>


                            <input
                                className='servicos'
                                type="radio"
                                name="servico"
                                id="Simples-nacional"
                                value="Simples nacional"
                                checked={servico === 'Simples nacional'}
                                onChange={(e) => setServico(e.target.value)}
                            />


                        </div>
                    </div>

                    {erros.servico && <p style={{ color: 'red' }}>{erros.servico}</p>}

                    {enviado && (
                        <>
                            <div className='list-lead'>

                                <h2 className='dados-do-cadastro'>Dados do cadastro</h2>
                                <p> Nome: {dadosEnviados?.nome}</p>
                                <p>Email: {dadosEnviados?.email}</p>
                                <p>  Telefone: {formatarTelefone(dadosEnviados?.telefone || '')}
                                </p>
                                <p>Serviço: {dadosEnviados?.servico}</p>

                                <h3>Formulário enviado com sucesso!</h3>

                                {/*BOTÃO NOVO*/}

                                <button onClick={() => {
                                    setEnviado(false)
                                    setDadosEnviados(null)
                                }}>
                                    Fazer novo cadastro
                                </button>
                            </div>
                        </>
                    )}
                    <br />
                    <button type="submit" disabled={enviado}>
                        {enviado ? 'Enviado ✅' : 'Enviar'}
                    </button>


                </form>
            </div>

        </div>
    )
}
export default Formulario;