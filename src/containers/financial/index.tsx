import * as React from 'react'
import './index.scss'
import { Breadcrumb, DatePicker, Button } from 'antd'
import avator from '@/assets/images/icon-user@2x.png'
import logout from '@/assets/images/logout2x.png'
const { RangePicker } = DatePicker
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/line')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default class Financial extends React.Component<{}, {}> {
  componentDidMount() {
    var myChart = echarts.init(document.getElementById('main'))
    myChart.setOption({
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
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
          type: 'line',
          smooth: true,
          areaStyle: {}
        }
      ]
    })
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
              <Breadcrumb.Item>系统管理</Breadcrumb.Item>
              <Breadcrumb.Item href="">操作管理员</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className="title2">财务统计</div>
        <div className="datepicker">
          <span>时间: </span>
          <RangePicker />
          <Button type="primary">导出</Button>
        </div>
        <div className="count">
          <div className="amount">
            <div>订单数</div>
            <div className="m">437</div>
          </div>
          <div className="total">
            <div>订单总额</div>
            <div className="m">￥8000</div>
          </div>
        </div>
        <div className="bar">
          <div className="bleft">查看数据项</div>
          <div className="bright">
            <span className="grid">全部</span>
            <span className="grid">订单</span>
            <span className="grid">订单总额</span>
            <Button>下载</Button>
          </div>
        </div>
        <div className="main">
          <div className="y">数量个数</div>
          <div id="main"></div>
        </div>
      </div>
    )
  }
}
