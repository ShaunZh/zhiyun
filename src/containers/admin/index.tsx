import { Table, Button, Input, Pagination, Modal, Breadcrumb } from 'antd'
import * as React from 'react'
import Edit from '@/assets/images/icon-edit.png'
import avator from '@/assets/images/icon-user@2x.png'
import logout from '@/assets/images/logout2x.png'
import './index.scss'
const { Search } = Input
// const columns = [
//   {
//     title: 'No.',
//     dataIndex: 'No',
//     key: 'No'
//   },
//   {
//     title: '账号',
//     dataIndex: 'count',
//     key: 'count'
//   },

//   {
//     title: '操作员',
//     dataIndex: 'admin',
//     key: 'admin'
//   },
//   {
//     title: '手机号',
//     dataIndex: 'tel',
//     key: 'tel'
//   },
//   {
//     title: '角色',
//     dataIndex: 'role',
//     key: 'role'
//   },
//   {
//     title: '状态',
//     key: 'status',
//     dataIndex: 'status'
//   },
//   {
//     title: '发送时间',
//     key: 'time',
//     dataIndex: 'time'
//   },
//   {
//     title: '操作',
//     key: 'operators',
//     dataIndex: 'operators',
//     render: (params: string) => <img src={params} alt="编辑" onClick={Admin.edit}></img>
//   }
// ]
const data = [
  {
    key: '1',
    No: '1',
    count: 123456,
    admin: 'wwwwwe',
    tel: 1254698,
    role: 'admin',
    status: 'yes',
    time: '2018.1.1',
    operators: Edit
  },
  {
    key: '2',
    No: '1',
    count: 123456,
    admin: 'wwwwwe',
    tel: 1254698,
    role: 'admin',
    status: 'yes',
    time: '2018.1.1',
    operators: Edit
  },
  {
    key: '3',
    No: '1',
    count: 123456,
    admin: 'wwwwwe',
    tel: 1254698,
    role: 'admin',
    status: 'yes',
    time: '2018.1.1',
    operators: Edit
  },
  {
    key: '4',
    No: '1',
    count: 123456,
    admin: 'wwwwwe',
    tel: 1254698,
    role: 'admin',
    status: 'yes',
    time: '2018.1.1',
    operators: Edit
  },
  {
    key: '5',
    No: '1',
    count: 123456,
    admin: 'wwwwwe',
    tel: 1254698,
    role: 'admin',
    status: 'yes',
    time: '2018.1.1',
    operators: Edit
  },
  {
    key: '6',
    No: '1',
    count: 123456,
    admin: 'wwwwwe',
    tel: 1254698,
    role: 'admin',
    status: 'yes',
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
  edit = () => {
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
        title: '账号',
        dataIndex: 'count',
        key: 'count'
      },

      {
        title: '操作员',
        dataIndex: 'admin',
        key: 'admin'
      },
      {
        title: '手机号',
        dataIndex: 'tel',
        key: 'tel'
      },
      {
        title: '角色',
        dataIndex: 'role',
        key: 'role'
      },
      {
        title: '状态',
        key: 'status',
        dataIndex: 'status'
      },
      {
        title: '发送时间',
        key: 'time',
        dataIndex: 'time'
      },
      {
        title: '操作',
        key: 'operators',
        dataIndex: 'operators',
        render: (params: string) => <img src={params} alt="编辑" onClick={this.edit}></img>
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
              <Breadcrumb.Item href="">操作管理员</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className="title">操作管理员</div>
        <div className="add">
          <span>状态：</span>
          <input placeholder="全部"></input>
          <Button type="primary">新增操作员</Button>
          <Search placeholder="输入搜索内容" style={{ width: 200 }} />
        </div>
        <Table columns={this.state.columns} dataSource={data} pagination={false} />
        <Pagination showQuickJumper defaultCurrent={2} total={60} onChange={this.onChange} showSizeChanger />
        <Modal title="编辑用户" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <div>
            账号 <input></input>
          </div>
          <div>
            用户名 <input></input>
          </div>
          <div>
            手机号 <input></input>
          </div>
          <div>
            角色{' '}
            <select>
              <option value="admin">管理员</option>
              {2 > 1 ? (
                <option value="user" selected>
                  用户
                </option>
              ) : (
                <option value="user">用户</option>
              )}
            </select>
          </div>
        </Modal>
      </div>
    )
  }
}
