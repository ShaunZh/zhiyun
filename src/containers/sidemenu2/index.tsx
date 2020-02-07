import * as React from 'react'
import { Menu, Icon } from 'antd'
import './index.scss'
import classIcon from '@/assets/images/icon-class1.png'
import staffIcon from '@/assets/images/icon-staff1.png'
import platformIcon from '@/assets/images/icon-platform1.png'
import statisticsIcon from '@/assets/images/icon-statistics1.png'
const { SubMenu } = Menu
export default class sideMenu extends React.Component<{}, {}> {
  handleClick = () => {
    console.log('click ')
  }
  render() {
    return (
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
          <Menu.Item>操作员管理</Menu.Item>
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
    )
  }
}
