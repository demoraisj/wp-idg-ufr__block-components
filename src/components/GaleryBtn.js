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
export default function GaleryBtn({
  text,
  icon,
  allowedTypes,
  setter,
  multiple,
  selection = [],
  attrs = { img: 'url' }
}) {
  const setSelectedIds = (ids) => setter({ selection: ids })

  const methods = {
    /**
     * Executa quando selecionado um item da galeria e atualiza o valor do atributo do bloco
     * @param selected
     */
    onSelect(selected) {
      const attributes = {}
      const requiredAttrs = Object.entries(attrs)

      requiredAttrs.forEach(([key, value]) => {
        if (Array.isArray(selected)) {
          const values = []
          const ids = []

          selected.forEach((item) => {
            ids.push(item.id)
            values.push(item[value])
          })

          setSelectedIds(ids)
          attributes[key] = values
          return
        }

        setSelectedIds([selected.id])
        attributes[key] = selected[value]
      })

      setter(attributes)
    }
  }

  return (
    <MediaUploadCheck>
      <MediaUpload
        onSelect={methods.onSelect}
        allowedTypes={allowedTypes}
        value={selection}
        multiple={multiple}
        render={({ open }) => (
          <button id='galeryBtn' className='big-btn' onClick={open}>
            <i className={icon ?? 'fas fa-photo-video'} />
            {text ?? 'Selecione a mídia'}
          </button>
        )}
      />
    </MediaUploadCheck>
  )
}
