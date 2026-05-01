import './hero.css';
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
        <a href="#formulario" className="hero-btn">
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