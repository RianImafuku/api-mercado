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

Controller e Rota listar
```
    GETpurchases:(req,res)=>{
        const query = "SELECT * FROM lista_compras";
        conn.query(query,(error,results)=>{
            if (error) throw error;
            res.status(200).json(results);
        })
    },
    
```

```
.get("/compras", purchases.GETpurchases)
```


Campos para POST e PUT
```
{ 
    nome: "Rian"
    valor: 23.40
}
```
