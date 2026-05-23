import './Servicos.css';
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react';
function Servicos(){
    const servicos = [
        {
            titulo: 'Abertura de empresa',
            descricao: 'Abrimos sua empresa com rapidez e segurança, cuidando de toda a documentação necessária.'
        },

        {
            titulo: 'Regularização de CNPJ',
            descricao: 'Regularizamos pendências fiscais e cadastrais para manter sua empresa em conformidade.'
        },

        {
            titulo: 'Abertura de empresa',
            descricao: 'Abrimos sua empresa com rapidez e segurança, cuidando de toda a documentação necessária.'
        },

        {
            titulo: 'Abertura de empresa',
            descricao: 'Abrimos sua empresa com rapidez e segurança, cuidando de toda a documentação necessária.'
        },

        {
            titulo: 'Abertura de empresa',
            descricao: 'Abrimos sua empresa com rapidez e segurança, cuidando de toda a documentação necessária.'
        },

        {
            titulo: 'Abertura de empresa',
            descricao: 'Abrimos sua empresa com rapidez e segurança, cuidando de toda a documentação necessária.'
        },
    ]

    const [servicoAtual, setServicoAtual] = useState(0)

    function proximoServico(){
        if(servicoAtual === servicos.length - 1){
              setServicoAtual(0)

        }else{
            setServicoAtual(servicoAtual + 1)

        }
          

    }

    function servicoAnterior(){

        if(servicoAtual === 0){
            setServicoAtual(servicos.length - 1)
        }else{
            setServicoAtual(servicoAtual - 1)
        }
    }


    return  (
        <section className='servicos'>

            <div className='servicos-container'>
                <button 
                 className='arrow-btn'
                onClick={servicoAnterior}>
                    <ChevronLeft size={32}/>

                </button>

                <div className='servico-conteudo'>

                    <h2>
                        {servicos[servicoAtual].titulo}
                    </h2>

                    <p>
                        {servicos[servicoAtual].descricao}
                    </p>
                </div>

                <button
                className='arrow-btn'
                 onClick={proximoServico}>
                    <ChevronRight size={32}/>

                </button>


            </div>
        </section>


    );

    
}
export default Servicos;