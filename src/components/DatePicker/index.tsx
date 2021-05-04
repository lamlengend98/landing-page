import { DatePicker } from 'antd'
import moment from 'moment'
import React, { useEffect, useRef } from 'react'

interface PickerProps {
  onChange?: any;
  value?: string;
}

export const DateMonthPicker = ({ onChange, value }: PickerProps) => {
  const ref: any = useRef(null)
  useEffect(() => {
    let prop = ref.current.props
    console.log('prop', prop)
    if (prop) {
      prop = {
        ...prop,
        defaultValue: moment('02/2022').format('MM/YYYY'),
      }
      ref.current.props = prop
      Object.preventExtensions(prop)
    }
    console.log('====================================');
    console.log('ref', ref);
    console.log('====================================');
  }, [])
  return (
    <DatePicker
      ref={ref}
      picker="month"
      placeholder="Start time"
      onChange={onChange}
      style={{ paddingLeft: 0 }}
      className="ant-calendar-picker-input ant-input"
      // defaultValue={null}
      format="MM/YYYY"
    />
  )
}
