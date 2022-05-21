import React, { FC } from 'react'
import { Tree } from 'antd'
import  './CheckboxTree.module.less'

export interface TreeDataType {
  title: string
  key: string
  children?: TreeDataType[]
}
export interface CheckboxTreeProps {
  treeData: TreeDataType[]
  expandedKeys: string[]
  checkedKeys: string[]
  onExpand?: (value: string[]) => void
  onCheck?: (value: string[]) => void
  autoExpandParent?: boolean
}

export const CheckboxTree: FC<CheckboxTreeProps> = ({
  treeData,
  onCheck,
  onExpand,
  expandedKeys,
  autoExpandParent,
  checkedKeys,
  ...props
}) => {
  return (
    <div className={"checkboxTreeWrapper"}>
        Hello
      <Tree
        className={"treeCheckbox"}
        checkable
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        onCheck={onCheck}
        checkedKeys={checkedKeys}
        treeData={treeData}
        {...props}
      />
    </div>
  )
}

export default CheckboxTree
