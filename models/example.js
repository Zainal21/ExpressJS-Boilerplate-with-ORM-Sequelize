/**
 * 
 module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    image_url: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.TEXT
    },
    status: {
      type: DataTypes.SMALLINT
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    tableName: 'News'
  });
  return News
}
*/