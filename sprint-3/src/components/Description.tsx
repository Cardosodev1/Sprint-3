import { DescriptionMenu } from "../styled";
import Diagnostico from '../assets/diagnostico.png'
import Oficina from '../assets/oficina.png'
import Orcamento from '../assets/orcamento.png'

export default function Description() {
    return(
        <DescriptionMenu>
            <div className="description"> 
                <h1 className="title">O que é a <span>Auto Problems?</span></h1>
                <p className="text">A Auto Problems é uma plataforma completa para soluções automotivas. Desenvolvemos este espaço para facilitar o acesso a diagnósticos precisos, orçamentos personalizados, localização das oficinas da Porto Seguro mais próximas de você, agendar horários nas oficinas e comprar peças automotivas online.</p>
                <div className="features">
                    <ul>
                        <li className="feature">
                            <img src={Diagnostico} alt="Imagem Diagnostico"/>
                            <h3>Diagnóstico</h3>
                            <p>Identifique o problema do seu carro e saiba qual é o melhor conserto.</p>
                        </li>
                        <li className="feature">
                            <img src={Oficina} alt="Imagem Oficina"/>
                            <h3>Oficina</h3>
                            <p>Localize oficinas próximas e receba orçamentos de forma rápida.</p>
                        </li>
                        <li className="feature">
                            <img src={Orcamento} alt="Imagem Orçamento"/>
                            <h3>Orçamento</h3>
                            <p>Compare preços para serviços de mecânica nas oficinas perto de você.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </DescriptionMenu>
    )
}