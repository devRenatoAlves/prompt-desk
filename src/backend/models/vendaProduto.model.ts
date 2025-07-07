import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

export interface VendaProdutoAttributes {
  id: number;
  vendaId: number;
  produtoId: number;
  quantidade: number;
  precoUnitario: number;
}

export interface VendaProdutoCreationAttributes extends Optional<VendaProdutoAttributes, 'id'> {}

export class VendaProduto extends Model<VendaProdutoAttributes, VendaProdutoCreationAttributes>
  implements VendaProdutoAttributes {
  public id!: number;
  public vendaId!: number;
  public produtoId!: number;
  public quantidade!: number;
  public precoUnitario!: number;
}

export function initVendaProdutoModel(sequelize: Sequelize) {
  VendaProduto.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    vendaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    produtoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precoUnitario: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'vendaProduto',
    tableName: 'vendas_produtos',
    timestamps: false,
  });
}
