import React, { FC, useState, useEffect } from 'react'
import { Modal } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import './ChooseModal.module.less'

export interface ChooseModalItem {
  title: string
  icon: JSX.Element
  addonIcon?: JSX.Element
  description?: string
}

export interface ChooseModalProps {
  title: string
  subTitle?: string
  items: ChooseModalItem[]
  visible: boolean
  onSelected: (item: ChooseModalItem) => void
  onClose: () => void
}

export const ChooseModal: FC<ChooseModalProps> = ({
  title,
  subTitle,
  items,
  visible,
  onSelected,
  onClose,
}) => {
  const [showModal, setShowModal] = useState(false)
  const handleSelectItem = (item: ChooseModalItem) => {
    onSelected(item)
  }
  useEffect(() => {
    setShowModal(visible)
  }, [visible])
  return (
    <Modal
      visible={showModal}
      footer={null}
      width="100%"
      wrapClassName={"chooseModal"}
    >
      <div className={"chooseModalContent"}>
        <div className={"chooseModalHeader"}>
          {subTitle && <p>{subTitle}</p>}
          <h1>{title}</h1>
        </div>
        {items.map((item) => (
          <div
            key={item.title}
            className={"chooseServiceTypeItem"}
            onClick={() => {
              handleSelectItem(item)
            }}
          >
            <div>{item.icon}</div>
            <div>
              <div className={"chooseServiceTypeItemContent"}>
                <p>{item.title}</p>
                {item.description && <p>{item.description}</p>}
              </div>
              {item.addonIcon && <div>{item.addonIcon}</div>}
            </div>
          </div>
        ))}
        <div
          className={"closeChooseServiceType"}
          onClick={() => {
            setShowModal(false)
            onClose()
          }}
        >
          <span>Esc</span>
          <div>
            <CloseOutlined />
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ChooseModal
