import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

export interface ProdutoAttributes {
  id: number;
  nome: string;
  preco: number;
  userId: number;
}

export interface ProdutoCreationAttributes extends Optional<ProdutoAttributes, 'id'> {}

export class Produto extends Model<ProdutoAttributes, ProdutoCreationAttributes>
  implements ProdutoAttributes {
  public id!: number;
  public nome!: string;
  public preco!: number;
  public userId!: number;
}

export function initProdutoModel(sequelize: Sequelize) {
  Produto.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'produto',
    tableName: 'produtos',
    timestamps: false,
  });
}
