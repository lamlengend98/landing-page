import React, { FunctionComponent, useState } from 'react'
import {
  Button, ButtonGroup, OverlayTrigger, Popover,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationState } from '../../../../../store'
import { actionAddHistory, actionSaveHTML } from '../../../../../store/builder/actions'

export interface Props {
  el: any, type: string
}

const BackgroundRepeat: FunctionComponent<Props> = ({ el, type }) => {
  const dispatch = useDispatch()

  const html = useSelector((state: ApplicationState) => state.builder.html)
  const history = useSelector((state: ApplicationState) => state.builder.history)

  const [backgroundRepeat, setBackgroundRepeat] = useState(el?.backgroundRepeat)

  const onChangeValue = (value: any) => {
    if (type === 'elements') {
      if (el?.type !== 'form') {
        const elements = html[type]?.map((item: any) => {
          if (item?.id === el?.id) {
            return {
              ...item,
              backgroundRepeat: value,
            }
          }
          return item
        })
        dispatch(actionSaveHTML({
          ...html,
          elements,
        }))
        dispatch(actionAddHistory([
          ...history,
          {
            ...html,
            elements,
          },
        ]))
      } else {
        const elements = html?.elements?.map((item: any) => {
          if (item?.id === el?.id) {
            return {
              ...item,
              backgroundRepeat: value,
            }
          }
          return item
        })
        const formItem = html?.formItem?.map((item: any) => {
          if (item?.formId === el?.id) {
            return {
              ...item,
              backgroundRepeat: value,
            }
          }
          return item
        })
        dispatch(actionSaveHTML({
          ...html,
          elements,
          formItem,
        }))
        dispatch(actionAddHistory([
          ...history,
          {
            ...html,
            elements,
            formItem,
          },
        ]))
      }
    }
    if (type === 'formItem') {
      const formItem = html[type]?.map((item: any) => {
        if (item?.id === el?.id) {
          return {
            ...item,
            backgroundRepeat: value,
          }
        }
        return item
      })
      dispatch(actionSaveHTML({
        ...html,
        formItem,
      }))
      dispatch(actionAddHistory([
        ...history,
        {
          ...html,
          formItem,
        },
      ]))
    }
    if (type === 'sections') {
      const sections = html[type]?.map((item: any) => {
        if (item?.id === el?.id) {
          return {
            ...item,
            backgroundRepeat: value,
          }
        }
        return item
      })
      dispatch(actionSaveHTML({
        ...html,
        sections,
      }))
      dispatch(actionAddHistory([
        ...history,
        {
          ...html,
          sections,
        },
      ]))
    }
    setBackgroundRepeat(value)
  }
  const renderColor = (value: string) => {
    switch (value) {
      case 'no-repeat': return <>Kh??ng l???p</>
      case 'repeat': return <>L???p t???t c???</>
      case 'repeat-x': return <>L???p ngang</>
      case 'repeat-y': return <>L???p d???c</>
      default: return null
    }
  }

  return (
    <div className="d-flex align-items-center justify-content-between my-2">
      <label>Ch???n ki???u</label>
      <div className="__collapse__content">
        <OverlayTrigger
          trigger="focus"
          placement="bottom"
          overlay={(
            <Popover id="popover-basic" className="settings__popover">
              <Popover.Content>
                <ButtonGroup vertical size="sm">
                  <Button
                    variant="outline-primary"
                    onClick={() => onChangeValue('no-repeat')}
                  >
                    Kh??ng l???p
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => onChangeValue('repeat')}
                  >
                    L???p t???t c???
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => onChangeValue('repeat-x')}
                  >
                    L???p ngang
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => onChangeValue('repeat-y')}
                  >
                    L???p d???c
                  </Button>
                </ButtonGroup>
              </Popover.Content>
            </Popover>
          )}
        >
          <Button className="__title">
            {renderColor(backgroundRepeat)}
          </Button>
        </OverlayTrigger>
      </div>
    </div>
  )
}

export default BackgroundRepeat
