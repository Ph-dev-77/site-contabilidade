import './Hero.css';
import { ShieldCheck, Clock, TrendingUp } from "lucide-react";

function Hero() {
  return (
    <section className="hero">

      {/* ESQUERDA */}
      <div className="hero-left">
        <h1>
          Regularize seu <span>CNPJ</span> sem dor de cabeça
        </h1>

        <p>
          Soluções contábeis completas para sua empresa ficar 
          <strong> 100% regularizada</strong> e crescer com segurança.
        </p>

        {/* BENEFÍCIOS */}
        <div className="hero-benefits">
          <div className="benefit">
            <ShieldCheck size={20} />
            Segurança e conformidade
          </div>

          <div className="benefit">
            <Clock size={20} />
            Atendimento rápido
          </div>

          <div className="benefit">
            <TrendingUp size={20} />
            Crescimento seguro
          </div>
        </div>

        {/* BOTÃO */}
        <a href="https://wa.me/5511981845984?text=Olá,%20acessei%20o%20site%20da%20Siqueira%20Regulariza%20e%20quero%20agendar%20minha%20consulta%20gratuita." 
        className="hero-btn" 
        target='_blank'
        rel="noopener noreferrer"
        >
          Solicitar consulta gratuita
        </a>
      </div>
{/*
      {/* DIREITA (IMAGEM) }
      <div className="hero-right">
        <img src="/img-contadora.png" alt="contadora" />
      </div>
      */}

    </section>
  );
}

export default Hero;