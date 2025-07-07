import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

export interface ClienteAttributes {
  id: number;
  nome: string;
  email?: string;
  telefone?: string;
  ultimaCompra?: Date;
  userId: number;
}

export interface ClienteCreationAttributes extends Optional<ClienteAttributes, 'id'> {}

export class Cliente extends Model<ClienteAttributes, ClienteCreationAttributes>
  implements ClienteAttributes {
  public id!: number;
  public nome!: string;
  public email?: string;
  public telefone?: string;
  public ultimaCompra?: Date;
  public userId!: number;
}

export function initClienteModel(sequelize: Sequelize) {
  Cliente.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ultimaCompra: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'cliente',
    tableName: 'clientes',
    timestamps: false,
  });
}
