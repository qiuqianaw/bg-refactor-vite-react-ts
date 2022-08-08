import { Table, TableColumnProps, Space, Button } from '@arco-design/web-react'
import Text from '@arco-design/web-react/es/Typography/text'
import { IconDelete, IconEdit } from '@arco-design/web-react/icon'
import { useEffect, useState } from 'react'
import ITopic from '../../model/http'
import { http } from '../../utils'

const Topics = () => {
  const [topics, setTopics] = useState<ITopic[]>([])
  const columns: TableColumnProps[] = [
    {
      title: '题目',
      dataIndex: 'topic'
    },
    {
      title: '持方',
      dataIndex: 'side',
      render: (side) => {
        return <Text>{side === 0 ? '正方' : '反方'}</Text>
      }
    },
    {
      title: '所属比赛',
      dataIndex: 'game_name'
    },
    {
      title: '胜负',
      dataIndex: 'outcome',
      render: (outcome) => {
        return <Text>{outcome === 0 ? '负' : '胜'}</Text>
      }
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
      const res: ITopic[] = await http.get('result/findAllResult')
      setTopics(res)
    }
    loadTopics()
  }, [])
  return (
    <>
      <Table rowKey="competition_id" columns={columns} data={topics} />
    </>
  )
}
export default Topics
