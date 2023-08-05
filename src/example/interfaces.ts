import { IExpression, IWorkFlowNode } from "../workflow-editor";

//后端需要的扩展，增加一些冗余配置项
export interface IExtWorkflowNode extends IWorkFlowNode {
  flowId?: string
  parentId?: string
  nodeLevel?: number
  parentNodeType?: string
  sort?: number
}

export interface IExtCondition extends IExpression {
  flowId?: string
  flowNodeId?: string
  sort?: number
  groupIndex?: number
}