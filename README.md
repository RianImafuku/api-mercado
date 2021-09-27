UNIMAR

# API Nodejs Mercado 

Instalação:

Versão requerida do Node.js:
```
v13.12.0
```

MYSQL
```
Execute o Banco que está no diretório (database/script.sql)
```

Usuário do banco
```
host:localhost
user:root
password:
database:mercado
```

Instalar dependências:
```
npm i
```
Iniciar projeto com nodemon:
```
npm start
```

Iniciar projeto sem nodemon:
```
node index.js
```

Rotas
```
GET localhost:3000/compras
GET localhost:3000/compras/:id
POST localhost:3000/compras
PUT localhost:3000/compras/:id
DELETE localhost:3000/compras/:id
```

Campos para POST e PUT
```
{ 
    nome: "Rian"
    valor: 23.40
}
```
