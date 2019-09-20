'use strict';
module.exports = (sequelize, dataTypes) => {
    var Lead = sequelize.define('Lead', {
        id: {
            type: dataTypes.UUID,
            defaultValue: dataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        }
    })
    return Lead;
}