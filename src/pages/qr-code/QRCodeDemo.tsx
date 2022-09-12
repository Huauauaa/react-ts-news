import React, { useEffect } from 'react'
import QRCode from 'qrcode'

type Props = {}

const QRCodeDemo = (props: Props) => {
  useEffect(() => {
    const canvas = document.getElementById('canvas')
    QRCode.toCanvas(canvas, 'http://www.baidu.com', function (error) {
      if (error) console.error(error)
      console.log('success!')
    })
  }, [])
  return (
    <div id="query">
      <canvas id="canvas"></canvas>
    </div>
  )
}

export default QRCodeDemo
