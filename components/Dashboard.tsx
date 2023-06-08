import { PropsWithChildren } from "react";
import Sidenav from "./Sidenav";
import Topbar from "./Topbar";
import styles from "../styles/Dashboard.module.css";

export default function Dashboard({ children, ...props }: PropsWithChildren) {
  return (
    <div className="d-flex max-vh-100">
      <Sidenav />
      <div className={`overflow-hidden ${styles.main_content}`}>
        <Topbar />
        <div className={`position-relative overflow-auto ${styles.dynamic_content}`} {...props}>
          {children}
        </div>
      </div>
    </div>
  )
}
