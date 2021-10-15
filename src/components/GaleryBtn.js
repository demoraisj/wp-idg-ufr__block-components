import React from 'react'
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor'

export default function GaleryBtn({
  text,
  icon,
  allowedTypes,
  attr,
  setter
}) {
  const methods = {
    onSelect({ url }) {
      const attributes = {}

      attributes[attr] = url
      setter(attributes)
    }
  }

  return (
    <MediaUploadCheck>
      <MediaUpload
        onSelect={methods.onSelect}
        allowedTypes={allowedTypes}
        render={({ open }) => (
          <button id='galeryBtn' className='big-btn' onClick={open}>
            <i className={icon} />
            {text}
          </button>
        )}
      />
    </MediaUploadCheck>
  )
}
