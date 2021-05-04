import React from 'react'
import { useSelector } from 'react-redux'
import './style.scss'
import LoadingOverlay from 'react-loading-overlay'

export const Loading = () => {
  const { loading } = useSelector((store) => store.ui)

  return (
    <>
      {loading && (
        <div style={{
          height: '100%', zIndex: 10000, position: 'fixed', width: '100%',
        }}
        >
          <LoadingOverlay
            active
            spinner
          />
        </div>
      )}
    </>
  )
}
