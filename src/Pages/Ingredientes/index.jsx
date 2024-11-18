import React from 'react';
import './ingredientes.css';
import Header from '../../Components/Header';

const Ingredientes = () => {
  return (
    <>
<Header/>
    <div className="container">
      <div className="main-content">
        <div className="pizza-image">
          <img src="src\assets\Lasanha.jpg" alt="Pizza Portuguesa" />
          <button type="button">Curtir ❤️</button>
        </div>
        <div className="content">
          <h1>PIZZA PORTUGUESA</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet hendrerit ligula. Curabitur et purus vel magna condimentum.</p>
          <div className="ingredients">
            <h2>Ingredientes</h2>
            <ul>
              <li>Para a massa (se você for fazer em casa):
500g de farinha de trigo
10g de fermento biológico seco
1 colher de chá de açúcar
1 colher de sopa de azeite
1 colher de chá de sal
300 ml de água morna
Para o molho de tomate:
1 lata de tomate pelado ou 400g de tomates frescos picados
1 dente de alho picado
1 colher de sopa de azeite
Sal e pimenta a gosto
Manjericão fresco ou seco (opcional)
Cobertura:
100g de presunto fatiado
1 ovo cozido, fatiado
1 cebola roxa fatiada
1 pimentão verde fatiado
1 pimentão vermelho fatiado
100g de azeitonas pretas fatiadas
Queijo sem lactose (opcional) ou queijo vegetal (opcional)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="preparation">
        <h2>Preparo</h2>
        <p>
          1. Pré-aqueça o forno a 180°C.<br />
          2. Abra a massa de pizza e espalhe o molho de tomate.<br />
          3. Adicione o presunto, queijo, cebola, ovo cozido e azeitonas.<br />
          4. Polvilhe orégano e leve ao forno por 15-20 minutos ou até dourar.<br />
          5. Sirva quente e aproveite!
        </p>
      </div>
    </div>
    </>
  );
};

export default Ingredientes;
