Acesse o demo em: http://starwarsapi.s3-website-eu-west-1.amazonaws.com/

# Learning

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

-------------------------------------------------------------------

# README

## PLANEJAMENTO: PASSO A PASSO DO DESENVOLVIMENTO DO PROJETO

### PASSO 1 – Criar um novo Projeto

*	Abrir o prompt de comando

*	Criar um diretório para a aplicação

*	Criar novo projeto "Angular CLI" (o nome do diretório será o nome da aplicação)
**	Isso inclui o Angular 5, o Webpack 2, o Typescript, o Nodemon e outros - ou seja, a estrutura básica do projeto (selecionada esta abordagem por ser robusta, confiável e rápida para iniciar um projeto, embora tudo pudesse ser feito manualmente)
**	o comando utilizado para criar o projeto é "ng new <nome>"

*	Entrar no diretório criado

*	Rodar a aplicação usando "ng serve"

### PASSO 2 – Realizar a “Concepção” e o “Planejamento” do Projeto

*	Definir as features a serem desenvolvidas
**	Conforme o exercício, apenas 1 Feature ou US: “Pesquisar Pessoas de Star Wars”

*	Selecionar ferramentas de apoio
**	IDE: selecionado o Atom, por questões de familiaridade e gosto, no entanto, poderíamos usar também o Visual Studio, Sublime, etc...
**	Repositório: conforme solicitado no exercício, selecionado o “GitHub”, para armazenamento do código e controle de versões.

*	Desenhar a arquitetura de software e infraestrutura
**	Conforme o exercício, é necessário um Frontend, que acessará diretamente uma API pública. Ele será construído em Angular 5 (utilizando Typescript), num projeto criado a partir do Angular CLI.
** Necessário analisar a documentação de “StarWars API”, que utiliza o formato JSON.
**	O leiaute será implementado com HTML e CSS, utilizando Bootstrap.
**	O código será disponibilizado em um ambiente da plataforma “Heroku”, plataforma que abstrai o ambiente AWS – também poderia ser disponibilizado diretamente na AWS, utilizando o serviço S3, que apresenta alta disponibilidade (99,999999999%) e durabilidade. (ACABEI USANDO O SERVIÇO S3, POR TER MAIOR FAMILIARIDADE COM A AWS)

*	Ambientes de desenvolvimento
**	O ambiente de desenvolvimento local rodará com o comando “ng serve”;
**	Os testes unitários serão realizados automaticamente, utilizando Karma e Jasmine;
**	O buid em JS será gerado através do comando “ng build”, e será disponibilizado no “Heroku”; (DISPONIBILIZADO NA AWS)
**	Os testes funcionais serão realizados manualmente, diretamente na aplicação disponível no Heroku (este seria considerado o ambiente de “Testes/ Homologação” para o projeto em questão). (REALIZADO NA AWS)

*	Passados os testes funcionais, num cenário prático, faríamos uso de um ambiente de produção, mas como é apenas um exercício, isso não será necessário.
**	Também poderíamos usar práticas adicionais de integração e entrega contínua, mas esse não é o foco do exercício.

### PASSO 3 – Realizar a “Execução” do projeto

*	Planejar tarefas para a Feature (Feature única, e MVP também único)

**	1 – Configurar o módulo principal e a rota correspondente
**	2 – Criar 2 componentes
***	“search”
***	“results”

**	3 – Criar os 3 elementos visuais solicitados
***	“search-bar”
***	“search-button”
***	“list-results”

**	4 – Criar um componente para o serviço de busca na API
***	_service (por praticidade, foi criado dentro de results - dado o tempo sugerido)
**	5 – Implementar filtro (“entry-serch”)
**	6 – Implementar resultados (“results”)

*	Tarefas gerais para a aplicação:
**	1 – Realizar ajustes no leiaute
**	2 – Criar testes unitários
**	3 – Gerar build
**	4 – Disponibilizar arquivos no Heroku

### PASSO 4 – Realizar os testes funcionais

### PASSO 5 – Realizar entrega do projeto em homologação

### PASSO 6 – Coletar feedback do usuário

### PARA RODAR O PROJETO

*	AMBIENTE DE DESENVOLVIMENTO

**	Avaliar o código gerado
***	Clone este repositório no seu ambiente local.
***	No diretório do projeto, use o comando “npm install”, para baixar as dependências conforme o “package.json” do projeto.
***	Após o download das dependências, para iniciar a aplicação, use o comando “ng serve”.

**	Realizar testes unitários
***	No diretório do projeto, via prompt, após realizada a inicialização do projeto com o download das dependências (passo anterior), utilize o comando “ng test” para iniciar o Karma + Jasmine e avaliar se os casos de testes especificados estão passando. (O tempo sugerido não foi suficiente para esta etapa ser automatizada - foram realizados testes manuais)

*	AMBIENTE DE TESTES/ HOMOLOGAÇÃO
**	URL para acessar o projeto: http://starwarsapi.s3-website-eu-west-1.amazonaws.com/

### TEMPO DE DESENVOLVIMENTO DO PROJETO

*	Planejamento e elaboração do README: cerca de 45 minutos
*	Desenvolvimento do projeto: cerca de 4 horas
*	Execução de testes: cerca de 20 minutos
*	Disponibilização do código na “AWS”: cerca de 10 minutos (perdi 20 no Heroku)
*	TEMPO TOTAL GASTO: cerca de 5h35min
