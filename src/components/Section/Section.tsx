import React, { ReactComponentElement } from 'react'

interface ISectionProps {
  hasContainer?: boolean
  noMargin?: boolean
  children: React.ReactNode
}

const Section = ({
  children,
  hasContainer = false,
  noMargin = false,
}: ISectionProps): JSX.Element => {
  return (
    <section className="section">
      {hasContainer ? <div className="container">{children}</div> : children}
    </section>
  )
}

export default Section
