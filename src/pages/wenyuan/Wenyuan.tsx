import { Button } from 'wenyuan'

type Props = {}

const Wenyuan = (props: Props) => {
  return (
    <div>
      Wenyuan
      <Button>foo</Button>
      <Button type="primary">foo</Button>
      <Button type="success">foo</Button>
    </div>
  )
}

export default Wenyuan
