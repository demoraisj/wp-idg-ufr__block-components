import React from 'react'

export default function Select({ label, attr, options, value, setter }) {
  const methods = {
    renderOptions(opts) {
      const optionsList = []

      opts.forEach((opt) => {
        const selected = opt.value === value

        optionsList.push(
          <option value={opt.value} selected={selected}>
            {opt.label}
          </option>
        )
      })

      return optionsList
    },

    onChange(event) {
      const attributes = {}

      attributes[attr] = event.target.value
      setter(attributes)
    }
  }

  return (
    <div style={{ margin: '10px 0' }}>
      <label htmlFor={attr}>{label}</label>
      <select name={attr} id={attr} onChange={methods.onChange}>
        {methods.renderOptions(options)}
      </select>
    </div>
  )
}
