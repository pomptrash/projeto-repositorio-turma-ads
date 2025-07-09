export function Apiext(){
    return (
        <main className="container border p-3 h-100 d-flex gap-5 flex-wrap">
        <h1 className="w-100" >APIEXT I</h1>

        <section className="container" id="detalhesMateria">
            <p id="textoMateria">A disciplina de Atividades Práticas Interdisciplinares de Extensão (APIEXT) promove a aplicação prática dos conhecimentos adquiridos em sala de aula por meio de projetos interdisciplinares e ações de extensão. Envolve a integração de diferentes áreas do curso para a solução de problemas reais, incentivando o desenvolvimento de habilidades técnicas, trabalho em equipe, inovação e impacto social, aproximando os alunos do mercado e da comunidade.</p>
            <div id="material">
            <h4 className="border-start p-2">Material Didático</h4>
            </div>
        </section>

        <section onContextMenu={(e) => e.preventDefault()} className="container d-flex flex-column justify-content-center align-items-center border" id="detalhesProfessor">
            <img draggable={false} src="../assets/img/professores/regis.png" alt="imagem do professor"/>
            <div className="d-flex">
            <p>Professor(a): Régis Brito</p>
            <a href="https://www.linkedin.com/in/regis-brito-236727a2/" target="blank" rel="noopener noreferrer"> <i className=" ms-2 bi bi-linkedin"></i> </a>
            </div>
            <ol>
                <li>Formado em Ciências Econômicas pela Universidade Federal do Ceará-UFC</li>
                <li>Mestrado em Economia pela Universidade Federal do Ceará - UFC</li>
                <li>MBA em Gestão Comercial e Inteligência de Mercado pela Faculdade dos Diretores Lojistas - CDL</li>
                <li>Trabalhou como Gerente de Credenciamento na HAPVIDA de 2005 a 2016, foi Gerente de Negócios na FORTBRASIL DE 2016 A 2018</li>
                <li>Ministrou aulas nas seguintes universidades: UFC, Unifor, Unifanor, Uninassau Maracanati, Faculdade Fazped</li>
                <li>Atualmente é Coordenador Comercial do Grupo Omnimagem</li>
            </ol>
        </section>
        </main>
    )
}