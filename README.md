## Tarefa Desafio API Rst NestJs
Equipe de FRONT e BACK elaborar uma api rest com NEST desenvolvendo endpoints para o crud.

Definition of done
 - [x] NestJs
 - [x] Docker
 - [x] Swagger
 - [x] Crud
 - [x] Documentação
 - [x] Apresentação
 - EXTRAS:  
 - [x] Testes
 - [x] Log
 - [x] Padrão
---------------------

##### Versão atual do projeto
1.0.0.0

---------------------
##### Links úteis

[LINK DA APRESENTAÇÃO](https://docs.google.com/presentation/d/1tVDc5Vw4MvyhIA1yJ-u24kkOpmsntx_EJo9sRuMCICI/edit?usp=sharing)

[LINK DO REPOSOTÓRIO](https://github.com/Maryucha/tarefaDesafio)

[LINK DO TUTORIAL](https://medium.com/@iago.maiasilva/construindo-uma-api-com-nestjs-postgresql-e-docker-parte-1-criando-nosso-primeiro-endpoint-248d4b8ecc9c)

---------------------
### Estrutura de pastas
 Aqui temos listados as pastas que estão no projeto

> - dist: Pasta que contém os arquivos de build da API
> - logs: Contém o arquivo de log da api
>  - src: 
    >> - configs: Contem arquivos de configuração do ORM e do Winston que faz o log
    >> - Interceptors: Arquivo responsável em observar a api e seus estados, populando o arquivo de log;
    >> - Users: Pasta que representa todo o módulo de usuário e suas camadas.
---------------------

### Tecnologias utilizadas
Aqui temos listados algumas das tecnologias usadas no projeto.

- PostgreSQL V 0.0
- NestJs
- Docker
- Jest
- Swagger
- TypeOrm
- Winston

---------------------
### Install the app

```bash
$ npm install
```

### Running the app

```bash
# watch mode
$ npm run start:dev
```

### Test

```bash
# JEST tests
$  npm run test:watch
```
---------------------
> Autor
 >- Fundação CERTI

---------------------
