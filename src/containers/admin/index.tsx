import { Table, Divider, Tag } from 'antd'
import * as React from 'react'
import Edit from '@/assets/images/icon-edit.png'
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
      render:(params:string)=><img src={params}></img>
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
  export default class Admin extends React.Component<{}, {}>{
      public render(){
          return(
            <Table columns={columns} dataSource={data} />
          )
      }
  }
  