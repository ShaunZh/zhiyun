import * as React from 'react'
import './index.scss'
import { Breadcrumb, Button, Tabs, Table } from 'antd'
import avator from '@/assets/images/icon-user@2x.png'
import logout from '@/assets/images/logout2x.png'
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/pie')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')
require('echarts/lib/component/legend')
const { TabPane } = Tabs
const operations = <Button>导出</Button>
interface dataType {
  key: string
  class: string
  G100: string
  storage: string
  G70: string
}
const columns = [
  {
    title: '课程总资源',
    dataIndex: 'class'
  },
  {
    title: '100G',
    dataIndex: 'G100',
    // defaultSortOrder: 'descend',
    sorter: (a: dataType, b: dataType) =>
      Number(a.G100.substring(0, a.G100.length - 2)) - Number(b.G100.substring(0, a.G100.length - 2))
  },
  {
    title: '云盘总资源',
    dataIndex: 'storage'
  },
  {
    title: '79G',
    dataIndex: 'G70',
    // defaultSortOrder: 'descend',
    sorter: (a: dataType, b: dataType) =>
      Number(a.G70.substring(0, a.G100.length - 2)) - Number(b.G70.substring(0, a.G100.length - 2))
  }
]
const data = [
  {
    key: '1',
    class: '复旦金融专硕培训课程',
    G100: '100kb',
    storage: '云盘1',
    G70: '24KB'
  },
  {
    key: '2',
    class: '复旦金融专硕培训课程',
    G100: '24kb',
    storage: '云盘1',
    G70: '21KB'
  }
]
export default class Storage extends React.Component<{}, {}> {
  componentDidMount() {
    var myChart = echarts.init(document.getElementById('main'))
    myChart.setOption({
    //   title: {
    //     text: '某站点用户访问来源',
    //     subtext: '纯属虚构',
    //     left: 'center'
    //   },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['课程', '云盘', '剩余']
      },
      series: [
        {
          name: '资源使用情况',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 300, name: '课程' },
            { value: 500, name: '云盘' },
            { value: 200, name: '剩余' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
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
              <Breadcrumb.Item>统计分析</Breadcrumb.Item>
              <Breadcrumb.Item href="">财务统计</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className="title2">存储统计</div>
        <div className="sbox">
          <div className="lbox">
            <Tabs tabBarExtraContent={operations}>
              <TabPane tab="全部服务器" key="1">
                <div className="nbox">
                  <div className="nsbox">
                    <div>总空间</div>
                    <div>
                      <span>3451</span>G
                    </div>
                  </div>
                  <div className="nsbox">
                    <div>已用空间</div>
                    <div>
                      <span>3383</span>G
                    </div>
                  </div>
                  <div className="nsbox">
                    <div>剩余空间</div>
                    <div>
                      <span>268</span>G
                    </div>
                  </div>
                </div>
                <Table columns={columns} dataSource={data} />
              </TabPane>
              <TabPane tab="服务器1" key="2">
                Content of tab 2
              </TabPane>
              <TabPane tab="服务器2" key="3">
                Content of tab 3
              </TabPane>
              <TabPane tab="服务器3" key="4">
                Content of tab 3
              </TabPane>
            </Tabs>
          </div>
          <div className="rbox">
            <div className="r1box">
              <span>资源使用情况(所有服务器)</span>
              <Button>下载</Button>
            </div>
            <div id="main"></div>
          </div>
        </div>
      </div>
    )
  }
}
