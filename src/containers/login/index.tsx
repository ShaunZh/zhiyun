import * as React from 'react'
import './index.scss'
import { Button } from 'antd'
import loginPageLogo from '@/assets/images/loginPage-logo@2x.png'
import leftBG from '@/assets/images/left-bg@2x.png'
// import px2rem from '@/utils/px2rem'
import LeftBox from './components/leftImg'
import LogoImg from './components/logoImg'
import InputAreas from './components/inputArea'


class Login extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="pageBox">
        <LogoImg>
          <img src={loginPageLogo} className="logo"></img>
        </LogoImg>

        <LeftBox>
          <img src={leftBG} className="leftBG"></img>
        </LeftBox>
        <InputAreas>
          <div className="title">用户登录</div>
          <input className="input inputone" placeholder="请输入账号"></input>
          <input className="input inputtwo" placeholder="请输入登录密码"></input>
          <Button type="primary" block>
            登录
          </Button>
        </InputAreas>
      </div>
    )
  }
}


export default Login
