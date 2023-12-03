"use client";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  return <Content style={{ height: "100vh" }}>{children}</Content>;
};

export default Contents;
