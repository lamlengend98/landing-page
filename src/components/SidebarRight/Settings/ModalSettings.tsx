import React, { FunctionComponent, useEffect, useState } from 'react'
import {
  Button, Modal, Tabs, Tab, Form,
} from 'react-bootstrap'
import AceEditor from 'react-ace'
import { useDispatch, useSelector } from 'react-redux'

import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/theme-tomorrow'
import 'ace-builds/src-noconflict/snippets/html'
import 'ace-builds/src-noconflict/ext-beautify'
import 'ace-builds/src-noconflict/ext-code_lens'
import 'ace-builds/src-noconflict/ext-language_tools'

import { ApplicationState } from '../../../store'
import { actionAddHistory, actionSaveHTML } from '../../../store/builder/actions'

export interface Props {
  eventKey: number
  visibleModal: boolean
  setVisibleModal: (data: boolean) => void
}

const ModalSettings: FunctionComponent<Props> = ({ eventKey, visibleModal, setVisibleModal }) => {
  const dispatch = useDispatch()
  const html = useSelector((state: ApplicationState) => state.builder.html)
  const history = useSelector((state: ApplicationState) => state.builder.history)
  const [facebookPixelID, setFacebookPixelID] = useState('')
  const [googleAnalyticsID, setGoogleAnalyticsID] = useState('')
  const [googleTagManagerID, setGoogleTagManagerID] = useState('')
  useEffect(() => {
    setFacebookPixelID(html?.conversionCode?.facebookPixelID || '')
    setGoogleAnalyticsID(html?.conversionCode?.googleAnalyticsID || '')
    setGoogleTagManagerID(html?.conversionCode?.googleTagManagerID || '')
  }, [html])

  const changeMeta = (type: string, value: string) => {
    dispatch(actionSaveHTML({
      ...html,
      meta: {
        ...html?.meta,
        [type]: value,
      },
    }))
  }

  const changeConversionCode = (type: string, value: string) => {
    dispatch(actionSaveHTML({
      ...html,
      conversionCode: {
        ...html?.conversionCode,
        [type]: value,
      },
    }))
    dispatch(actionAddHistory([
      ...history,
      {
        ...html,
        conversionCode: {
          ...html?.conversionCode,
          [type]: value,
        },
      },
    ]))
  }

  const changeJsCss = (type: string, value: string) => {
    dispatch(actionSaveHTML({
      ...html,
      code: {
        ...html?.code,
        [type]: value,
      },
    }))
    dispatch(actionAddHistory([
      ...history,
      {
        ...html,
        code: {
          ...html?.code,
          [type]: value,
        },
      },
    ]))
  }

  return (
    <Modal className="modal--publish" show={visibleModal} onHide={() => setVisibleModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Thi???t l???p trang</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs defaultActiveKey={String(eventKey)}>
          <Tab eventKey="0" title="SEO & SOCIAL" className="mt-3">
            <Form>
              <Form.Group>
                <Form.Label>Ti??u ????? trang</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nh???p ti??u ????? trang (????? d??i t???i ??u kh??ng v?????t qu?? 70 k?? t???)"
                  onChange={e => changeMeta('name', e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>M?? t??? trang</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Nh???p m?? t??? trang (????? d??i t???i ??u kh??ng v?????t qu?? 160 k?? t???)"
                  onChange={e => changeMeta('description', e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>T??? kho?? v??? trang</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nh???p t??? kho?? v??? trang"
                  onChange={e => changeMeta('keywords', e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>H??nh ???nh khi chia s???</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nh???p ???????ng d???n h??nh ???nh (K??ch th?????c khuy??n d??ng 1200x630px)"
                  onChange={e => changeMeta('image', e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>H??nh ???nh Favicon</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nh???p ???????ng d???n h??nh ???nh Favicon (K??ch th?????c khuy??n d??ng 256x256px)"
                  onChange={e => changeMeta('favicon', e.target.value)}
                />
              </Form.Group>
            </Form>
          </Tab>
          <Tab eventKey="1" title="M?? chuy???n ?????i" className="mt-3">
            <Form>
              <Form.Group>
                <Form.Label>Facebook Pixel ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nh???p Facebook Pixel ID (V?? d???: 1520656564722XXX)"
                  onChange={e => changeConversionCode('facebookPixelID', e.target.value)}
                  value={facebookPixelID}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Google Analytics ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nh???p Google Analytics ID (V?? d???: UA-86097XXX-1)"
                  onChange={e => changeConversionCode('googleAnalyticsID', e.target.value)}
                  value={googleAnalyticsID}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Google Tag Manager ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nh???p Google Tag Manager ID (V?? d???: GTM-KHSNXXX)"
                  onChange={e => changeConversionCode('googleTagManagerID', e.target.value)}
                  value={googleTagManagerID}
                />
              </Form.Group>
            </Form>
          </Tab>
          <Tab eventKey="2" title="M?? Javascript/CSS" className="mt-3">
            <h6>Tr?????c th??? &lt;/head&gt;</h6>
            <AceEditor
              placeholder="Nh???p m?? ..."
              mode="html"
              theme="tomorrow"
              fontSize={14}
              showPrintMargin
              showGutter
              highlightActiveLine
              value={html?.code?.head}
              width="100%"
              height="200px"
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
              }}
              onChange={(val: any) => changeJsCss('head', val)}
            />
            <hr />
            <h6>Tr?????c th??? &lt;/body&gt;</h6>
            <AceEditor
              placeholder="Nh???p m?? ..."
              mode="html"
              theme="tomorrow"
              fontSize={14}
              showPrintMargin
              showGutter
              highlightActiveLine
              value={html?.code?.body}
              width="100%"
              height="200px"
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
              }}
              onChange={(val: any) => changeJsCss('body', val)}
            />
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={() => setVisibleModal(false)}>????ng</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalSettings
