import styled from 'styled-components'

import px2rem from '@/utils/px2rem'

const inputAreas = styled.div`
  width: ${px2rem('420px')};
  height: ${px2rem('360px')};
  position: absolute;
  top: ${px2rem('317px')};
  left: ${px2rem('1153px')};
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 12px 0px rgba(57, 86, 142, 0.2);
  border-radius: 15px;
  padding:${px2rem('41px')} ${px2rem('39px')} ${px2rem('48px')} ${px2rem('41px')}
`

export default inputAreas
