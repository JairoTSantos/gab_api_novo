// models/pessoas_tipos.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuarios');

const PessoaTipo = sequelize.define('PessoaTipo', {
  pessoa_tipo_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  pessoa_tipo_nome: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  pessoa_tipo_descricao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  pessoa_tipo_criado_em: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  pessoa_tipo_criado_por: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'usuario_id'
    }
  }
}, {
  timestamps: true,
  createdAt: 'pessoa_tipo_criado_em',
  updatedAt: false
});

module.exports = PessoaTipo;
