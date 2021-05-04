import React from 'react'
import {
  DeleteOutlined,
} from '@ant-design/icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SettingContentProps {
  onClick?: any;
}

export const SettingContent = ({onClick}: SettingContentProps) => {
  return (
    <div style={{cursor: 'pointer'}} onClick={onClick}>
      <FontAwesomeIcon size="lg" color={'red'} icon={faTrash} />
    </div>
  )
}