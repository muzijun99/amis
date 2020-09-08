import {BaseSchema, SchemaClassName, SchemaExpression} from './Schema';
import {ActionSchema} from './Action';

/**
 * Button Group 渲染器，文档：https://baidu.gitee.io/amis/docs/components/button-group
 */
export interface ButtonGroupSchema extends BaseSchema {
  /**
   * 指定为提交按钮类型
   */
  type: 'button-group';

  /**
   * 给 Button 配置 className。
   */
  btnClassName?: SchemaClassName;

  /**
   * 按钮集合
   */
  buttons?: Array<ActionSchema>;

  /**
   * 是否为禁用状态。
   */
  disabled?: boolean;

  /**
   * 通过 JS 表达式来配置当前表单项的禁用状态。
   */
  disabledOn?: SchemaExpression;

  /**
   * 是否显示
   */
  visible?: boolean;

  /**
   * 通过 JS 表达式来配置当前表单项是否显示
   */
  visibleOn?: SchemaExpression;

  /**
   * 按钮大小
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
}
