"use client";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import UMBreadcrumb from "./UMBreadcrumb";

const { Header, Content, Footer, Sider } = Layout;

const base = "admin";

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content style={{ height: "100vh" }}>
      <UMBreadcrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: `student`,
            link: `/${base}/student`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;
