import React from 'react'

type Props = {
  foo: any
}

const ChildPage = ({ foo }: Props) => {
  const len = (foo as string).length

  return (
    <div>
      {foo}-{len}
    </div>
  )
}

export default ChildPage
