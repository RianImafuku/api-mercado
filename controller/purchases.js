const conn = require("../config/database");

module.exports = {
    
    GETpurchases:(req,res)=>{
        const query = "SELECT * FROM lista_compras";
        conn.query(query,(error,results)=>{
            if (error) throw error;
            res.status(200).json(results);
        })
    },

    GETpurchase:(req,res)=>{
        const id = req.params.id;
        const query = `SELECT * FROM lista_compras WHERE id='${id}'`;
        conn.query(query,(error,results)=>{
            if (error) throw error;
            res.status(200).json(results[0]);
        })
    },

    POSTpurchases:(req,res)=>{
        const { nome, valor } = req.body;
        const query = `INSERT INTO lista_compras SET nome='${nome}', valor='${valor}'`;
        conn.query(query,(error,results)=>{
            if (error) throw error;
            res.status(200).json({ success:"produto inserido com sucesso" });
        })
    },

    PUTpurchase:(req,res)=>{
        const id = req.params.id;
        const { nome, valor } = req.body;
        const query = `UPDATE lista_compras SET nome='${nome}', valor='${valor}' WHERE id='${id}'`;
        conn.query(query,(error,results)=>{
            if (error) throw error;
            res.status(200).json({ success:"produto atualizado com sucesso" });
        })
    },

    DELETEpurchase:(req,res)=>{
        const id = req.params.id;
        const query = `DELETE FROM lista_compras WHERE id='${id}'`;
        conn.query(query,(error,results)=>{
            if (error) throw error;
            res.status(200).json({ success:"produto deletado com sucesso" });
        })
    }
}

