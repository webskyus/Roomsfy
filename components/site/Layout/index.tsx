import React, { ReactNode } from "react";
import HeadMeta, { HeadMetaProps } from "@/components/site/HeadMeta";

interface LayoutProps {
  meta?: HeadMetaProps;
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children, meta } = props;

  return (
    <>
      <HeadMeta {...meta} />

      <main>{children}</main>
    </>
  );
};

export default Layout;
