import React from 'react'

const SectionTitle = ({title, position}) => {
  return (
    <p className={`text-4xl font-extrabold ${position }`}>{title}</p>
  )
}

export default SectionTitle