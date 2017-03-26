/**
 * Created by sudarsanam on 15/3/17.
 */

const Sequelize = require ("sequelize");
const connection = new Sequelize("production", "root", "root");

const Sugardata = connection.define("sugardata", {

    d_ate            : Sequelize.DATE,
    belunch          : Sequelize.INTEGER,
    oes              : Sequelize.INTEGER,
    afbkfst          : Sequelize.INTEGER,
    aflunch          : Sequelize.INTEGER,
    bedinner         : Sequelize.INTEGER,
    afdinner         : Sequelize.INTEGER

});

connection.sync(
    {logging: console.log}
);

connection.sync() .then (function () {

    Sugardata.create({

        d_ate: '2017-04-20',
        oes:    200,
        afbkfast: 200,
        belunch:  185,
        aflunch:  289,
        bedinner:  195,
        afdinner:  300

        });

})


