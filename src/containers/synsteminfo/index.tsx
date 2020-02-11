import { Table, Button, Input, Pagination, Modal,Breadcrumb } from 'antd'
import * as React from 'react'
import Edit from '@/assets/images/icon-edit.png'
import './index.scss'
import '../admin/index.scss'
import avator from '@/assets/images/icon-user@2x.png'
import logout from '@/assets/images/logout2x.png'
const { Search } = Input

const data = [
  {
    key: '1',
    No: '1',
    title: 123456,
    content: 'wwwwwe',
    time: '2018.1.1',
    operators: Edit
  },
  {
    key: '2',
    No: '1',
    title: 123456,
    content: 'wwwwwe',
    time: '2018.1.1',
    operators: Edit
  },
  {
    key: '3',
    No: '1',
    title: 123456,
    content: 'wwwwwe',
    time: '2018.1.1',
    operators: Edit
  },
  {
    key: '4',
    No: '1',
    title: 123456,
    content: 'wwwwwe',
    time: '2018.1.1',
    operators: Edit
  },
  {
    key: '5',
    No: '1',
    title: 123456,
    content: 'wwwwwe',
    time: '2018.1.1',
    operators: Edit
  },
  {
    key: '6',
    No: '1',
    title: 123456,
    content: 'wwwwwe',
    time: '2018.1.1',
    operators: Edit
  }
]
interface stateType {
  visible: boolean
  columns: {
    title: string
    key: string
    dataIndex: string
    render?: (params: string) => JSX.Element
  }[]
}
export default class Admin extends React.Component<{}, stateType> {
  addinfo = () => {
    this.setState({
      visible: true
    })
  }
  state = {
    visible: false,
    columns: [
      {
        title: 'No.',
        dataIndex: 'No',
        key: 'No'
      },
      {
        title: '消息名称',
        dataIndex: 'infotitle',
        key: 'infotitle'
      },

      {
        title: '消息内容',
        dataIndex: 'content',
        key: 'content'
      },
      {
        title: '时间',
        key: 'time',
        dataIndex: 'time'
      },
      {
        title: '操作',
        key: 'operators',
        dataIndex: 'operators',
        render: (params: string) => <img src={params} alt="编辑"></img>
      }
    ]
  }
  handleOk = () => {
    // console.log(e);
    this.setState({
      visible: false
    })
  }
  handleCancel = () => {
    // console.log(e);
    this.setState({
      visible: false
    })
  }
  onChange = (pageNumber: number) => {
    console.log('Page: ', pageNumber)
  }
  public render() {
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
              <Breadcrumb.Item href="">系统消息</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className="title">系统消息</div>
        <div className="add">
          <span>状态：</span>
          <input placeholder="全部"></input>
          <Button type="primary" onClick={this.addinfo}>
            新增消息
          </Button>
          <Search placeholder="输入搜索内容" style={{ width: 200 }} />
        </div>
        <Table columns={this.state.columns} dataSource={data} pagination={false} />
        <Pagination showQuickJumper defaultCurrent={2} total={60} onChange={this.onChange} showSizeChanger />
        <Modal title="新增消息" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <div>
            消息标题 <input></input>
          </div>
          <div>
            消息内容 <textarea></textarea>
          </div>
        </Modal>
      </div>
    )
  }
}
