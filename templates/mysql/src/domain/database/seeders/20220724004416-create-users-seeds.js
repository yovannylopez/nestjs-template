const sql = `
    INSERT INTO Users (
        id,
        name,
        created_at,
        updated_at
    ) values (
        '12f78c0b-1899-4fd5-a43b-ea9f8fbd14e1',
        'John',
        '2022-07-22 14:23:55',
        '2022-07-22 14:23:55'
    );
`;

module.exports = {
  up: (queryInterface) => queryInterface.sequelize.query(sql),
};
