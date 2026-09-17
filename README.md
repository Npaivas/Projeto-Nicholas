
# Projeto Individual - 3º Semestre

Projeto individual desenvolvido com o intuito de testar e aplicar os conhecimentos adquiridos em Front-end e Back-end.

##  Estrutura do Projeto

```text

Projeto-Nicholas/
├── backend/
├── frontend/
└── README.md
```

## Tecnologias Utilizadas

### Back-end
- Java
- Spring Boot
- JdbcTemplate
- H2 Database

### Front-end
- React
- JavaScript
- JSX
- CSS Modules

### Comunicação
- API REST

## Funcionamento

A aplicação funciona seguindo o fluxo:

```text
React → API REST → Spring Boot → H2
```

- **React:** Interface do usuário e interação com a aplicação.
- **API REST:** Comunicação entre o Front-end e o Back-end.
- **Spring Boot:** Processamento das requisições e regras da aplicação.
- **H2:** Banco de dados utilizado para armazenamento das informações.

## Como Executar o Projeto

### 1. Back-end

Abra a pasta `backend` no IntelliJ IDEA.

Execute a classe principal do Spring Boot para iniciar o servidor.

O Back-end estará disponível em:

```text
http://localhost:8080
```

### 2. Front-end

Abra o terminal na pasta `frontend`:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

O Front-end estará disponível em:

```text
http://localhost:5173
```

## Endereços da Aplicação

| Serviço | Endereço |
|---|---|
| Back-end | http://localhost:8080 |
| Front-end | http://localhost:5173 |

