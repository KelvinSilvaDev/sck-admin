


# Sck Admin | Front-End

Esse projeto foi desenvolvido para gestão pessoal da  **SCK**.  O projeto é desenvolvido em javascript e possui dois repositórios separados, um para o Back-End, utilizando NestJs como base, e este respositório para o Front-End da plataforma desenvolvida.

O repositório da api fica localizado na URL: https://github.com/KelvinSilvaDev/sck-api


# Observações

Foi implementada uma tratativa de autenticação de login, dessa forma a Api, após receber um e-mail e senha válidos, retorna um token de acesso.

Não foi possível elaborar melhor essa funcionalidade no frontend, devido ao prazo para entrega do projeto, foram prioziadas outras coisas de maior importância.

## Tecnologias que compõem o projeto

 - TypeScript
 - React com Vite para o Front-End
 - Styled-Components para estilização das páginas
 - NestJs para o Back-End
 - Banco de dados MongoDB



#### Telas:

-   Login
-   Registro
-   Área logada

#### Backend:

-   Criação de usuário
-   Login autenticado
-   Guardar usuários no banco de dados


##### Nota:
Foi utilizado Styled-Components para esse projeto por uma questão deixar o código o mais claro possível evitando assim utilização de classes do Taillwind ou o acréscimo de qualquer biblioteca de estilização foi evitado para que o projeto fosse desenvolvido do absoluto zero utilizando CSS para reproduzir todas as telas do protótipo aprezentadas no link do Figma.

##### Nota 2:
O Vite foi escolhido por ser uma ferramenta atualmente muito melhor para se trabalhar com React do que o já conhecido `Create-React-App`, além de iniciar um servidor de forma mais rápida ele também tem um ótimo suporte ao Typescript que foi utilizado em todo o projeto, sendo assim se tornou uma ótima opção para esse caso.


## Variáveis de ambiente

O Back-End precisa de duas variáveis de ambiente:

`JWT_SECRET=`
`DATABASE_URL=`

O Front-End precisa de uma única variável chamada `VITE_REACT_APP_BASE_URL` que aponta o endereço da Api de autenticação que foi criada.

## Executando a aplicação localmente

Para isso é necessário clonar os dois respositórios e configurar suas variáveis de ambiente respectivamente, após isso basta, seguir os passos abaixo:

### Backend:

`npm install` para instalar as dependências do projeto

`npm run start:dev` para rodar o projeto localmente

### Frontend:

`yarn install` para instalar as dependências do projeto

`yarn dev` para inicar o projeto

## Deploy

O deploy da aplicação ocorrerá em duas plataformas difrentes, o Front-End na Vercel enquanto que o Back-End na Render.

Cada uma funcionou respectivamente bem em diversos testes de deploy, configuração e funcionamento, desta forma foram os que tiveram melhor compatibilidade com as tecnologias utilizadas nos projetos da Api e da aplicação Vite.


# Como utilizar a plataforma?

Para utilizar a plataforma é basta acessar os links inseridos acima, o usuário será redirecionado para a tela de Login conforme mostra a imagem abaixo:

![Captura de tela 2023-01-18 085610](https://user-images.githubusercontent.com/63024154/213127477-a1bf2da4-c38a-43ec-a894-1905d3279cb5.png)

Após isso basta inserir um e-mail e senha válidos ou clicar no botão 'Sign Up', a direita do cabeçalho da página para cadastrar um novo usuário. Caso escolha essa opção o usuário será redirecionado à página de Cadastro:

![image](https://user-images.githubusercontent.com/63024154/213128310-d406f57b-2e61-4898-bc00-39d3d4282696.png)

Após realizar um cadastro ou fazer login, o usuário será redirecionado para a página Home, que nesse caso é a única página da aplicação além das outras duas citadas:


![image](https://user-images.githubusercontent.com/63024154/213128784-de19c52b-2852-46d7-9a77-afed6157504d.png)

Para realizar logoff basta clicar no botão 'Sign Out' que agora está no lugar do botão 'Sign In' dos passos anteriores.
