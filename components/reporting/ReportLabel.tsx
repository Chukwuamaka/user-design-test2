import { ReportLabelType } from "@/data";
import styles from "../../styles/Home.module.css";

interface ReportLabelProps extends ReportLabelType {
  active: ReportLabelType['label'];
}

export default function ReportLabel({ label, value, active }: ReportLabelProps) {
  return (
    <div className={`d-flex align-items-center me-4 ${styles.label_container}`}>
      <p className={`my-0 fw-semibold text-capitalize ${styles.label_text}`}>{label}</p>
      <p className={`m-0 p-2 rounded bg-white ${styles.label_value} ${active === label ? styles.active : ''}`}>
        {value}
      </p>
    </div>
  )
}
