import { Table, Button, Input, Pagination } from 'antd'
import * as React from 'react'
import Edit from '@/assets/images/icon-edit.png'
import './index.scss'
const { Search } = Input
const columns = [
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
    render: (params: string) => <img src={params} alt="编辑"></img>
  }
]
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
export default class Admin extends React.Component<{}, {}> {
  onChange=(pageNumber:number)=>{
    console.log('Page: ', pageNumber);
  }
  public render() {
    return (
      <div>
        <div className="title">操作管理员</div>
        <div className="add">
          <span>状态：</span>
          <input placeholder="全部"></input>
          <Button type="primary">新增操作员</Button>
          <Search placeholder="输入搜索内容" style={{ width: 200 }} />
        </div>
        <Table columns={columns} dataSource={data} pagination={false}/>
        <Pagination showQuickJumper defaultCurrent={2} total={60} onChange={this.onChange} showSizeChanger/>
      </div>
    )
  }
}
