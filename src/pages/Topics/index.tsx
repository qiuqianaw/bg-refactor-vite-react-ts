import { Table, TableColumnProps, Space, Button } from '@arco-design/web-react'
import { IconDelete, IconEdit } from '@arco-design/web-react/icon'
import { useEffect, useState } from 'react'
import ITopic from '../../model/http'
import { http } from '../../utils'

const Topics = () => {
  const [topics, setTopics] = useState([])
  const columns: TableColumnProps[] = [
    {
      title: '题目',
      dataIndex: 'topic'
    },
    {
      title: '持方',
      dataIndex: 'side'
    },
    {
      title: '所属比赛',
      dataIndex: 'game_name'
    },
    {
      title: '胜负',
      dataIndex: 'outcome'
    },
    {
      title: '资料',
      dataIndex: 'document_id'
    },
    {
      title: '比赛时间',
      dataIndex: 'time'
    },
    {
      title: '操作',
      render: () => {
        return (
          <Space size={10}>
            <Button shape="circle">
              <IconEdit />
            </Button>
            <Button shape="circle">
              <IconDelete />
            </Button>
          </Space>
        )
      }
    }
  ]
  useEffect(() => {
    const loadTopics = async () => {
      const res: ITopic = await http.get('result/findAllResult')
      console.log(res)
      setTopics(res)
    }
    loadTopics()
  }, [])
  return (
    <>
      <Table columns={columns} data={topics} />
    </>
  )
}
export default Topics
