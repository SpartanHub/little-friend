<h3 align="center">
    <img alt="Logo" title="#logo" width="300px" src=".github/logo.png">
    <br><br>
    <b>Adoção de animais segura e responsável perto de você!</b>
    <br>
</h3>

<!-- <p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>
  <a>
  <img alt="License" src="https://img.shields.io/github/license/vitorserrano/ecoleta?color=%237519C1">
  <br><br>
  <a href="" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p> -->

# Índice

- [Sobre](#sobre)
- [Como Construir Este App do Zero](#tutorial)
- [Tutorial](#tutorial)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Configurando o Ambiente de Desenvolvimento](#como-usar)
- [Contribua](#como-contribuir)

<a id="sobre"></a>

## :bookmark: Sobre

O <strong>Litle Friend</strong> é uma aplicação Web e Mobile para conectar doadores de animais a pessoas interessadas em fazer um amigo pet.

<a id="tutorial"></a>

## :dart: (Em Breve) Como Construir Este App do Zero

Este pode encontar o passo a passo completo para desenvolver este app na trilha **[Web Spartan](https://www.spartandev.com.br/webspartan)** distribuída gratuitamente por [Jimmy Bastos](https://github.com/jimmybastos) aqui da [Spartan Dev.](https://www.spartandev.com.br).

<a id="tecnologias-utilizadas"></a>

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)

## :heavy_check_mark: :computer: Web App

- O layout está disponível no **[Figma](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/)**;

<h1 align="center">
    <img alt="Web" src=".github/Video.gif" width="900px">
</h1>

## :heavy_check_mark: :iphone: Mobile App

<h1 align="center">
    <img alt="Mobile Home" src=".github/Home.png" width="300px">
    <img alt="Mobile Detail" src=".github/Detail.svg" width="300px">
</h1>

<a id="como-usar"></a>

## :fire: Configurando o Ambiente de Desenvolvimento

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes, se você já tem o Node.js, então o **[NPM](https://www.npmjs.com/)** já vai estar disponível.
  - Por fim, é **essencial** seguir as intruções para instalar **[Expo](https://expo.io/)**

1. Faça um clone :

```sh
  $ git clone https://github.com/SpartanHub/little-friend.git
```

2. Executando a Aplicação:

```sh
  # Execute o comando abaixo nas pastas web, app e server
  $ npm install

  ## Crie o banco de dados
  $ cd server
  $ npm run knex:migrate
  $ npm run knex:seed

  # Inicie a API
  $ npm run dev

  # Inicie a aplicação web
  $ cd web
  $ npm start

  # Inicie a aplicação mobile
  $ cd app
  $ npm start
```

<a id="como-contribuir"></a>

## :dog: Contribua

- Faça um Fork desse repositório
- Clone o repositório
```sh
  $ git clone https://github.com/<SEU_USUARIO_GIT>/little-friend.git
```
- Crie um branch com sua feature: `git checkout -b nome-da-feature`
- Comite suas mudanças: `git commit -m 'feat: Breve descrição da feature'`
- Envie a feature: `git push origin nome-da-feature`

## :memo: License

Esse projeto está sob a licença MIT. Acesse o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<h4 align="center">
    Feito com 💜 by <a href="https://www.linkedin.com/in/jimmybastos" target="_blank">Jimmy Bastos</a>
</h4>
