import {
  Layout,
  Menu,
  Breadcrumb,
  Link,
  Image,
  Button,
  Space,
  Input
} from '@arco-design/web-react'
import {
  IconHome,
  IconCaretRight,
  IconCaretLeft,
  IconSun,
  IconMoon,
  IconNotification,
  IconSettings,
  IconUser,
  IconSubscribeAdd,
  IconUserGroup,
  IconDragDot,
  IconSubscribed
} from '@arco-design/web-react/icon'
import './index.scss'
import { Link as RLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Text from '@arco-design/web-react/es/Typography/text'
import ContentLayout from '../ContentLayout'

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu
const { Sider, Header, Footer, Content } = Layout
const InputSearch = Input.Search

const PageLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const handleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const { pathname } = useLocation()

  const changeArcoTheme = () => {
    const arcoTheme = document.body.getAttribute('arco-theme')
    document.body.setAttribute(
      'arco-theme',
      arcoTheme === 'dark' ? 'light' : 'dark'
    )
  }
  return (
    <Layout className="layout-collapse-demo">
      <Sider
        collapsed={collapsed}
        onCollapse={handleCollapsed}
        collapsible
        trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}
        breakpoint="xl"
      >
        <div className="logo">
          <Image
            className="logo-img"
            width={40}
            src="https://picbedd.oss-cn-beijing.aliyuncs.com/20210821175125.png"
          ></Image>
          <Text className="logo-text">{collapsed ? '' : 'DNUI数据平台'}</Text>
        </div>
        <Menu
          defaultOpenKeys={['/data']}
          defaultSelectedKeys={[pathname]}
          style={{
            width: '100%'
          }}
        >
          <MenuItem key="/">
            <IconHome />
            <RLink to={'/'}>Dashboard</RLink>
          </MenuItem>

          <SubMenu
            key="/data"
            title={
              <span>
                <IconSubscribed />
                数据管理
              </span>
            }
          >
            <MenuItem key="/topics">
              <RLink to={'/topics'}>所有题目</RLink>
            </MenuItem>
            <MenuItem key="/games">
              <RLink to={'/games'}>所有比赛</RLink>
            </MenuItem>
          </SubMenu>
          <SubMenu
            key="2"
            title={
              <span>
                <IconSubscribeAdd />
                数据添加
              </span>
            }
          >
            <MenuItem key="/addtopic">
              <RLink to={'/addtopic'}>添加题目</RLink>
            </MenuItem>
            <MenuItem key="/addgame">
              <RLink to={'/addgame'}>添加比赛</RLink>
            </MenuItem>
          </SubMenu>
          <SubMenu
            key="3"
            title={
              <span>
                <IconUserGroup />
                用户管理
              </span>
            }
          >
            <MenuItem key="/debaters">
              <RLink to={'/debaters'}>所有辩手</RLink>
            </MenuItem>
          </SubMenu>
          <SubMenu
            key="4"
            title={
              <span>
                <IconDragDot />
                其他相关
              </span>
            }
          >
            <MenuItem key="opensource">
              <RLink to={'/opensource'}>开放下载</RLink>
            </MenuItem>
            <MenuItem key="updatenote">
              <RLink to={'/updatenote'}>更新公告</RLink>
            </MenuItem>
            <MenuItem key="feedback">
              <RLink to={'/feedback'}>Bug反馈</RLink>
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            paddingLeft: 20
          }}
        >
          <Space className="header-right" size={25}>
            <InputSearch
              allowClear
              placeholder="Please search"
              style={{
                width: 200
              }}
              className="header-right-search"
            />
            <Button
              onClick={changeArcoTheme}
              shape="circle"
              icon={
                document.body.getAttribute('arco-theme') === 'dark' ? (
                  <IconMoon />
                ) : (
                  <IconSun />
                )
              }
            />
            <Button shape="circle" icon={<IconNotification />} />
            <Button shape="circle" icon={<IconSettings />} />
            <Button shape="circle" type="primary" icon={<IconUser />} />
          </Space>
        </Header>
        <Layout
          style={{
            padding: '0 24px'
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0'
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content>
            <ContentLayout />
          </Content>
          <Footer>
            <Link
              icon
              href="https://beian.miit.gov.cn/"
              style={{
                color: 'var(--color-grey)'
              }}
            >
              蜀ICP备2022003677号
            </Link>
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default PageLayout
