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

Controller e Rota listar o selecionado
```
    GETpurchase:(req,res)=>{
        const id = req.params.id;
        const query = `SELECT * FROM lista_compras WHERE id='${id}'`;
        conn.query(query,(error,results)=>{
            if (error) throw error;
            res.status(200).json(results[0]);
        })
    },
    
```

```
.get("/compras/:id", purchases.GETpurchase) 
```
Controller e Rota inserir
```
    POSTpurchases:(req,res)=>{
        const { nome, valor } = req.body;
        const query = `INSERT INTO lista_compras SET nome='${nome}', valor='${valor}'`;
        conn.query(query,(error,results)=>{
            if (error) throw error;
            res.status(200).json({ success:"produto inserido com sucesso" });
        })
    },
    
```

```
.post("/compras", purchases.POSTpurchases) 
```

Controller e Rota atualizar
```
    PUTpurchase:(req,res)=>{
        const id = req.params.id;
        const { nome, valor } = req.body;
        const query = `UPDATE lista_compras SET nome='${nome}', valor='${valor}' WHERE id='${id}'`;
        conn.query(query,(error,results)=>{
            if (error) throw error;
            res.status(200).json({ success:"produto atualizado com sucesso" });
        })
    },
    
```

```
.put("/compras/:id", purchases.PUTpurchase) 
```

Controller e Rota deletar
```
    DELETEpurchase:(req,res)=>{
        const id = req.params.id;
        const query = `DELETE FROM lista_compras WHERE id='${id}'`;
        conn.query(query,(error,results)=>{
            if (error) throw error;
            res.status(200).json({ success:"produto deletado com sucesso" });
        })
    }
    
```

```
.delete("/compras/:id", purchases.DELETEpurchase) 
```

Campos para POST e PUT
```
{ 
    nome: "Rian"
    valor: 23.40
}
```
