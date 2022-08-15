import React from 'react'
import ChildPage from './ChildPage'

type Props = {}

const TsPage = (props: Props) => {
  const foo: any = 'a'
  const len = (foo as string).length
  let bar = 2
  // Property 'length' does not exist on type 'number'.ts(2339)
  // console.log(bar.length)
  return (
    <div>
      {len}
      <ChildPage foo={foo} />
      <ChildPage foo={1} />
    </div>
  )
}

export default TsPage
