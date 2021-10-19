import React from 'react'
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor'

/**
 * Componente Botão para acesso a galeria wordpress
 *
 * @param text
 * @param icon
 * @param allowedTypes
 * @param attr
 * @param setter
 * @uses @wordpress/block-editor
 * @returns {JSX.Element}
 * @constructor
 */
export default function GaleryBtn({ text, icon, allowedTypes, attr, setter }) {
  const methods = {
    /**
     * Executa quando selecionado um item da galeria e atualiza o valor do atributo do bloco
     * @param url
     */
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
