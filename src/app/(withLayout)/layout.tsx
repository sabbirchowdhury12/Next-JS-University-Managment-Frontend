import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
