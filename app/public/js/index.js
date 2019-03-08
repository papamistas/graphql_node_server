import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient();
const query = gql`
query {
    casas {
      cod_casa
      designacao
      destino
      destino_complex
        periodos {
          id 
          inicio
          fim
          precoSemana
        }
        feedbacks {
          comment
          valor_voto
          
        }
    
  }
}
`;

const body = document.body;
debugger;
client.query({query}).then((results) => {
    debugger;
    results.data.casas.forEach((casa) => renderCasa(body, casa));

});

const renderCasa = (body, casa) => {
    const section = document.createElement('section');
    const domString = `
<p>
      <strong>id: </strong>${casa.cod_casa}
    </p>
    <p>
      <strong>Nome casa: </strong>${casa.designacao}
    </p>
    <p>
      <strong>Pais: </strong>${casa.destino}
    </p>
    <p>----------PERIODOS----------</p>
  `
    section.innerHTML = domString;
    body.appendChild(section);
    casa.periodos.forEach((periodo) => renderPeriodo(body, periodo,section));
};
const renderPeriodo = (body, periodo,section) => {
    const anotherSection = document.createElement('section');
    const domString = `
    
    <p>
      <strong>inicio: </strong>${periodo.inicio}
    </p>
    <p>
      <strong>fim: </strong>${periodo.fim}
    </p>
    <p>
      <strong>preco: </strong>${periodo.precoSemana}
    </p>
  `

    anotherSection.innerHTML = domString;
    section.appendChild(anotherSection);
};





