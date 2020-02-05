import styled from 'styled-components'

import px2rem from '@/utils/px2rem'


// let widths:number=document.documentElement.clientWidth
// let heights:number=document.documentElement.clientHeight
// console.log(document.body)

const logoImg = styled.div`
  width: ${px2rem('85px')};
  height: ${px2rem('30px')};
  margin: ${px2rem('40px')} 0 0 ${px2rem('350px')};
`


export default logoImg