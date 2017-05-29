module.exports = function (sequelize, datatype) {
    return sequelize.define('custorm', {
        id: {
            type: datatype.STRING,
            primaryKey: true
        },
        name: {
            type: datatype.STRING,
        },
        content: {
            type: datatype.TEXT,
        },
        from: {
            type: datatype.STRING,
        },
        create_time: {
            type: datatype.TEXT,
        }
    }, {
        tableName: 'message'
    });
}
