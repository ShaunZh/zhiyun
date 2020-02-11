import * as React from 'react'
import { createHashHistory } from 'history'
import './index.scss'
import Admin from '../admin'
import Systeminfo from '../synsteminfo'
import { Menu} from 'antd'
import { Route } from 'react-router-dom'

import classIcon from '@/assets/images/icon-class1.png'
import staffIcon from '@/assets/images/icon-staff1.png'
import platformIcon from '@/assets/images/icon-platform1.png'
import statisticsIcon from '@/assets/images/icon-statistics1.png'
import logo from '@/assets/images/tongjipage-logo @2x.png'
// import avator from '@/assets/images/icon-user@2x.png'
// import logout from '@/assets/images/logout2x.png'
const { SubMenu } = Menu

// import styled from 'styled-components'
// import px2rem from '@/utils/px2rem'

export default class SideMenu extends React.Component<{}, {}> {
  handleClick = () => {
    console.log('click ')
  }
  public render() {
    return (
      <div>
        <div className="topBox">
          <div className="topLeft">
            <div className="logoBox">
              <img src={logo} alt="" className="logo"></img>
            </div>
          </div>
        </div>
        <div className="bottomBox">
          <div className="bottomLeft">
            <Menu mode="inline" style={{ width: 256 }}>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <img src={statisticsIcon} className="icon" alt=""></img>
                    <span>系统管理</span>
                  </span>
                }
              >
                <Menu.Item
                  key="1"
                  onClick={() => {
                    createHashHistory().push('/sidemenu/admin')
                  }}
                >
                  操作员管理
                </Menu.Item>
                <Menu.Item key="2">角色管理</Menu.Item>
                <Menu.Item
                  key="3"
                  onClick={() => {
                    createHashHistory().push('/sidemenu/systeminfo')
                  }}
                >
                  系统消息
                </Menu.Item>
                <Menu.Item key="4">反馈管理</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <img src={classIcon} className="icon" alt=""></img>
                    <span>课程管理</span>
                  </span>
                }
              >
                <SubMenu key="sub3" title="课程管理" className="secondsubmenu">
                  <Menu.Item key="7">查看人员信息</Menu.Item>
                  <Menu.Item key="8">查看课程资源</Menu.Item>
                  <Menu.Item key="13">直播间详情</Menu.Item>
                  <Menu.Item key="14">查看报名信息</Menu.Item>
                </SubMenu>
                <Menu.Item key="5">分类管理</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <img src={staffIcon} className="icon" alt=""></img>
                    <span>人员管理</span>
                  </span>
                }
              >
                <SubMenu key="sub3" title="用户信息管理" className="secondsubmenu">
                  <Menu.Item key="9">云盘信息管理</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu
                key="sub5"
                title={
                  <span>
                    <img src={platformIcon} className="icon" alt=""></img>
                    <span>平台管理</span>
                  </span>
                }
              >
                <Menu.Item key="21">网校管理</Menu.Item>
                <Menu.Item key="22">订单管理</Menu.Item>
                <Menu.Item key="23">热搜关键字管理</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub6"
                title={
                  <span>
                    <img src={statisticsIcon} className="icon" alt=""></img>
                    <span>统计分析</span>
                  </span>
                }
              >
                <Menu.Item key="31">财务统计</Menu.Item>
                <Menu.Item key="32">用户统计</Menu.Item>
                <Menu.Item key="33">课程统计</Menu.Item>
                <Menu.Item key="34">存储统计</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          <div className="bottomRight">
            <Route path="/sidemenu/admin">
              <Admin></Admin>
            </Route>
            <Route path="/sidemenu/systeminfo">
              <Systeminfo></Systeminfo>
            </Route>
          </div>
        </div>
      </div>
    )
  }
}
