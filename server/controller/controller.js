module.exports = {
    getInventory: (req, res, next) => {
        const db = req.app.get("db");

        db.get_inventory().then( inventory => {
            res.status(200).json(inventory).catch(err => {
                console.log(err.detail)
            });
        })
    },
    addInventory: (req, res, next) => {
        const db = req.app.get("db");
        const {name, price, image} = req.body;
        db.add_inventory([name, price, image]).then( inventory =>{
            res.status(200).json(inventory).catch(err => {
                console.log(err.detail)
            });
        })
    }
}