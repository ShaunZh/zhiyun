import * as React from 'react'
import './index.scss'
import Admin from '../admin'
import { Breadcrumb, Button, Input, Table, Divider, Tag, Menu, Icon } from 'antd'
import { HashRouter, Switch, Redirect, Route,Link } from 'react-router-dom'

import classIcon from '@/assets/images/icon-class1.png'
import staffIcon from '@/assets/images/icon-staff1.png'
import platformIcon from '@/assets/images/icon-platform1.png'
import statisticsIcon from '@/assets/images/icon-statistics1.png'
import logo from '@/assets/images/tongjipage-logo @2x.png'
import avator from '@/assets/images/icon-user@2x.png'
import logout from '@/assets/images/logout2x.png'
const { SubMenu } = Menu

// import styled from 'styled-components'
// import px2rem from '@/utils/px2rem'
const { Search } = Input

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
              <img src={logo} className="logo"></img>
            </div>
          </div>
          <div className="topRight">
            <div className="breadLeft">
              <Breadcrumb separator=">">
                <Breadcrumb.Item>系统管理</Breadcrumb.Item>
                <Breadcrumb.Item href="">操作管理员</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="breadRight">
              <div className="avator">
                <img src={avator}></img>
              </div>
              <span>admin</span>
              <div className="logout">
                <img src={logout}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomBox">
          <div className="bottomLeft">
            <Menu
              onClick={this.handleClick}
              style={{ width: 169 }}
              //   defaultSelectedKeys={['1']}
              //   defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <img src={statisticsIcon} className="icon"></img>
                    <span>系统管理</span>
                  </span>
                }
              >
                <Menu.Item><Link to="/sidemenu/admin">操作员管理</Link></Menu.Item>
                <Menu.Item>角色管理</Menu.Item>
                <Menu.Item>系统消息</Menu.Item>
                <Menu.Item>反馈管理</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <img src={classIcon} className="icon"></img>
                    <span>课程管理</span>
                  </span>
                }
              >
                <Menu.Item>Option 5</Menu.Item>
                <Menu.Item>Option 6</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <img src={staffIcon} className="icon"></img>
                    <span>人员管理</span>
                  </span>
                }
              >
                <Menu.Item>Option 9</Menu.Item>
                <Menu.Item>Option 10</Menu.Item>
                <Menu.Item>Option 11</Menu.Item>
                <Menu.Item>Option 12</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <img src={platformIcon} className="icon"></img>
                    <span>平台管理</span>
                  </span>
                }
              >
                <Menu.Item>Option 9</Menu.Item>
                <Menu.Item>Option 10</Menu.Item>
                <Menu.Item>Option 11</Menu.Item>
                <Menu.Item>Option 12</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub5"
                title={
                  <span>
                    <img src={statisticsIcon} className="icon"></img>
                    <span>统计分析</span>
                  </span>
                }
              >
                <Menu.Item>Option 9</Menu.Item>
                <Menu.Item>Option 10</Menu.Item>
                <Menu.Item>Option 11</Menu.Item>
                <Menu.Item>Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          <div className="bottomRight">
            <div className="title">操作管理员</div>
            <div className="add">
              <span>状态：</span>
              <input placeholder="全部"></input>
              <Button type="primary">新增操作员</Button>
              <Search placeholder="输入搜索内容" style={{ width: 200 }} />
              {/* <Redirect from="/sidemenu" to="/sidemenu/admin" exact> */}
              <Route path="/sidemenu/admin">
                <Admin></Admin>
              </Route>
              <Route path="/sidemenu/role">123456</Route>
              {/* </Redirect> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
