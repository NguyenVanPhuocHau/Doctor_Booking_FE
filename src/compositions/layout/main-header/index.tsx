import { ContainerFixed } from "@components";
import { EBreakpoint, EFlexAlign, EInputTextSize, EJustifyFlex, templateStringToClassName, routerPathFull } from "@core";
import { Header } from "antd/es/layout/layout";
import {
  Button,
  Flex,
  Form,
  FormItem,
  Image,
  InputSearch,
} from "@components";
import { memo } from "react";
import { useForm } from "antd/es/form/Form";
import { SPACE_BETWEEN_ITEMS } from "@constant";
import { cx } from "@emotion/css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
const logo = require("../../../images/logo.png");

export function MainHeader() {
  const [form] = useForm();
  const navigator = useNavigate();

  const onFinish = (values: any) => {
    return values.keyWord
      ? navigator(`${routerPathFull.search.root}?keyWord=${values.keyWord}`)
      : navigator("/");
  };
  return (
    <Header style={{ backgroundColor: 'white' }}>
      <ContainerFixed
        className={templateStringToClassName()`height: 100%; display: flex;`}
        breakpoint={EBreakpoint.XL}
        position="center">
        <Link to={routerPathFull.home.root}>
          <Image width="auto" height="100%" src={logo} preview={false} />
        </Link>
        <Flex
          align={EFlexAlign.Center}
          justify={EJustifyFlex.SpaceBetween}
          className={cx(templateStringToClassName()`background: #fff`)}
        >
          <Flex align={EFlexAlign.Center} gap={SPACE_BETWEEN_ITEMS} >
            <Form form={form} onFinish={onFinish} layout="vertical">
              <FormItem name="keyWord">
                <InputSearch
                  placeholder="Nhập từ bạn cần tìm kiếm ..."
                  enterButton="Search"
                  size={EInputTextSize.Middle}
                  onSearch={() => form.submit()}
                />
              </FormItem>
            </Form>
            <div style={{ fontSize: "28px", margin: "auto", marginRight: "5px" }} >
              <UserOutlined style={{ margin: "10px" }} />
              <LogoutOutlined style={{ margin: "10px" }} />
            </div>

          </Flex>

        </Flex>
      </ContainerFixed>
    </Header>
  );
}

export default memo(MainHeader);
