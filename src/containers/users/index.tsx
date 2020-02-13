import * as React from 'react'
import './index.scss'
import { Breadcrumb, DatePicker, Button, Tabs } from 'antd'
import avator from '@/assets/images/icon-user@2x.png'
import logout from '@/assets/images/logout2x.png'
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/line')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
const { RangePicker } = DatePicker
const { TabPane } = Tabs
const operations = (
  <div>
    <span className="date">日</span>
    <span className="date">周</span>
    <span className="date">月</span>
    <Button>下载</Button>
  </div>
)
export default class Users extends React.Component<{}, {}> {
  componentDidMount() {
    var myChart1 = echarts.init(document.getElementById('main1'))
    var myChart2 = echarts.init(document.getElementById('main2'))
    myChart1.setOption({
      xAxis: {
        type: 'category',
        data: [
          '2019-1',
          '2019-2',
          '2019-3',
          '2019-4',
          '2019-5',
          '2019-6',
          '2019-7',
          '2019-8',
          '2019-9',
          '2019-10',
          '2019-11',
          '2019-12'
        ]
      },
      tooltip: {},
      yAxis: {
        min: 0,
        max: 500,
        interval: 100
      },
      series: [
        {
          data: [100, 209, 305, 210, 205, 405, 308, 400, 450, 400, 500, 400],
          type: 'line'
        }
      ]
    })
    myChart2.setOption({
        xAxis: {
          type: 'category',
          data: [
            '2019-1',
            '2019-2',
            '2019-3',
            '2019-4',
            '2019-5',
            '2019-6',
            '2019-7',
            '2019-8',
            '2019-9',
            '2019-10',
            '2019-11',
            '2019-12'
          ]
        },
        tooltip: {},
        yAxis: {
          min: 0,
          max: 500,
          interval: 100
        },
        series: [
          {
            data: [100, 209, 305, 210, 205, 405, 308, 400, 450, 400, 500, 400],
            type: 'line'
          }
        ]
      })
  }
  callback = (key: string) => {
    console.log(key)
  }
  render() {
    return (
      <div>
        <div className="breadRight">
          <div className="avator">
            <img src={avator} alt=""></img>
          </div>
          <span>admin</span>
          <div className="logout">
            <img src={logout} alt=""></img>
          </div>
        </div>
        <div className="topRight">
          <div className="breadLeft">
            <Breadcrumb separator=">">
              <Breadcrumb.Item>统计分析</Breadcrumb.Item>
              <Breadcrumb.Item href="">用户统计</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className="title2">用户统计</div>
        <div className="datepicker">
          <span>时间: </span>
          <RangePicker />
          <Button type="primary">导出</Button>
        </div>
        <div className="count">
          <div className="amount2">
            <div>注册用户数</div>
            <div className="m">437</div>
          </div>
          <div className="total2">
            <div>付费用户数</div>
            <div className="m">8000</div>
          </div>
          <div className="total2">
            <div>当前在线活跃用户数</div>
            <div className="m">8000</div>
          </div>
          <div className="total2">
            <div>一月未登录用户数</div>
            <div className="m">8000</div>
          </div>
        </div>
        <div className="wrap">
          <Tabs tabBarExtraContent={operations} onChange={this.callback}>
            <TabPane tab="活跃用户数" key="1">
              <div className="main">
                <div className="y">数量个数</div>
                <div id="main1"></div>
              </div>
            </TabPane>
            <TabPane tab="付费用户数" key="2" forceRender>
              <div className="secondmain">
                <div className="y">数量个数</div>
                <div id="main2">123</div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}
