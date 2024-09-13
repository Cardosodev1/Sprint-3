import { ContainerMenu } from "../styled";
import FiltroDeOleo from '../assets/filtroDeOleo.png'
import PastilhaDeFreio from '../assets/pastilhaDeFreio.png'
import VelasDeIgnicao from '../assets/velasDeIgnição.png'
import BateriaDeCarro from '../assets/bateriaDeCarro.png'
import Pneu from '../assets/pneu.png'
import DiscoDeFreio from '../assets/discoDeFreio.png'

export default function Container() {
    return (
        <ContainerMenu>
            <div className="container">
                <div className="pecas">
                    <h2>Compre <span>Peças Automotivas</span> com facilidade</h2>
                    <p>Encontre as peças certas para o seu veículo com nossa ferramenta de busca.</p>
                    <form>
                        <input type="text" placeholder="Digite o nome da peça ou código"/>
                        <button type="submit">Pesquisar Peças</button>
                    </form>
                    <div className="pecas-lista">
                        <div className="peca-item">
                            <img src={FiltroDeOleo} alt="Filtro de Óleo" />
                            <h3>Filtro de Óleo</h3>
                            <p>R$ 29,90</p>
                            <button id="carrinho">Adicionar ao Carrinho</button>
                        </div>
                        <div className="peca-item">
                            <img src={PastilhaDeFreio} alt="Pastilha de Freio" />
                            <h3>Pastilha de Freio</h3>
                            <p>R$ 79,90</p>
                            <button id="carrinho">Adicionar ao Carrinho</button>
                        </div>
                        <div className="peca-item">
                            <img src={VelasDeIgnicao} alt="Velas de Ignição" />
                            <h3>Velas de Ignição</h3>
                            <p>R$ 44,90</p>
                            <button id="carrinho">Adicionar ao Carrinho</button>
                        </div>
                        <div className="peca-item">
                            <img src={BateriaDeCarro} alt="Bateria de Carro" />
                            <h3>Bateria de Carro</h3>
                            <p>R$ 350,00</p>
                            <button id="carrinho">Adicionar ao Carrinho</button>
                        </div>
                        <div className="peca-item">
                            <img src={Pneu} alt="Pneu" />
                            <h3>Pneu 185/70 R14</h3>
                            <p>R$ 250,00</p>
                            <button id="carrinho">Adicionar ao Carrinho</button>
                        </div>
                        <div className="peca-item">
                            <img src={DiscoDeFreio} alt="Disco de Freio" />
                            <h3>Disco de Freio</h3>
                            <p>R$ 180,00</p>
                            <button id="carrinho">Adicionar ao Carrinho</button>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerMenu>
    )
}