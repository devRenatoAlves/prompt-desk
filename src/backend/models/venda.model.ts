import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

export interface VendaAttributes {
  id: number;
  clienteId: number;
  data: Date;
  valorTotal: number;
  userId: number;
}

export interface VendaCreationAttributes extends Optional<VendaAttributes, 'id'> {}

export class Venda extends Model<VendaAttributes, VendaCreationAttributes>
  implements VendaAttributes {
  public id!: number;
  public clienteId!: number;
  public data!: Date;
  public valorTotal!: number;
  public userId!: number;
}

export function initVendaModel(sequelize: Sequelize) {
  Venda.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    valorTotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'venda',
    tableName: 'vendas',
    timestamps: false,
  });
}
