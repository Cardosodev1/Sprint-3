import { SectionMenu } from "../styled";

export default function Content() {
    return (
        <SectionMenu>
            <section className="content">
                <div className="diagnostico">
                    <h2>Realize o <span>diagnóstico</span> preciso para saber qual o problema com seu veículo</h2>
                    <form>
                        <select id="diagnosticos">
                            <option value="Bateria Fraca">Bateria Fraca</option>
                            <option value="Problema no Alternador">Problema no Alternador</option>
                            <option value="Vazamento de Óleo">Vazamento de Óleo</option>
                            <option value="Motor Quente Demais">Motor Quente Demais</option>
                            <option value="Freios com Problemas">Freios com Problemas</option>
                            <option value="Barulho na Suspensão">Barulho na Suspensão</option>
                            <option value="Dificuldade na Troca de Marchas">Dificuldade na Troca de Marchas</option>
                            <option value="Problema na Ignição">Problema na Ignição</option>
                        </select>
                        <button>Realizar Diagnóstico</button>
                    </form>
                </div>
                <div className="orcamentos">
                    <h2>Receba <span>orçamentos</span> das oficinas do conforto de sua casa.</h2>
                    <form>
                        <select id="orcamentos">
                            <option value="Troca de Óleo do Motor">Troca de Óleo do Motor</option>
                            <option value="Troca da Bateria">Troca da Bateria</option>
                            <option value="Troca dos Pneus">Troca dos Pneus</option>
                            <option value="Alinhamento e Balanceamento">Alinhamento e Balanceamento</option>
                            <option value="Troca de Pastilhas de Freio">Troca de Pastilhas de Freio</option>
                            <option value="Reparo na Suspensão">Reparo na Suspensão</option>
                            <option value="Troca de Filtros">Troca de Filtros</option>
                            <option value="Verificação de Transmissão">Verificação de Transmissão</option>
                        </select>
                        <button>Solicitar Orçamentos</button>
                    </form>
                </div>
                <div className="oficinas">
                    <h2>Veja as <span>oficinas</span> da Porto Seguro mais próximas a você.</h2>
                    <form>
                        <input type="text" placeholder="Digite o seu CEP"/>
                        <button>Procure Oficinas</button>
                    </form>
                </div>
                <div className="agendamento">
                    <h2>Agende um <span>horário</span> na oficina mais próxima</h2>
                    <p>Escolha a oficina, a data e o horário de sua preferência para agendar um serviço.</p>
                    <form>
                        <select id="oficinas-lista">
                            <option value="Oficina 1">Oficina 1</option>
                            <option value="Oficina 2">Oficina 2</option>
                            <option value="Oficina 3">Oficina 3</option>
                        </select>
                        <input type="date" id="data-agendamento"/>
                        <input type="time" id="hora-agendamento"/>
                        <button>Confirmar Agendamento</button>
                    </form>
                </div>
            </section>
        </SectionMenu>
    )
}