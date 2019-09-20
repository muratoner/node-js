
'use_strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                type: dataTypes.UUID,
                defaultValue: dataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            username: {
                type: dataTypes.STRING,
                allowNull: false
            },
            firstname: {
                type: dataTypes.STRING,
                allowNull: false
            },
            lastname: {
                type: dataTypes.STRING,
                allowNull: false
            },
            password: {
                type: dataTypes.STRING,
                allowNull: false
            },
            email: {
                type: dataTypes.STRING,
                allowNull: false,
                unique: true
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
}