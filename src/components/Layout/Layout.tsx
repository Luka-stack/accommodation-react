import { ReactNode } from "react";

interface LayoutProps {
  header: ReactNode;
  menu: ReactNode;
  content: ReactNode;
  footer: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <div>{props.header}</div>
      <div className="container">
        <div>{props.menu}</div>
        <div>{props.content}</div>
        <div>{props.footer}</div>
      </div>
    </div>
  );
}
