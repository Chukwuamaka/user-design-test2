import Image from "next/image";
import AlarmIcon from "../icons/AlarmIcon";
import CompassIcon from "../icons/CompassIcon";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Project } from "@/data";
import styles from "../../styles/Home.module.css";

interface ReportCardProps {
  project: Project;
  card_icon: any;
  icon_bg: string;
}

export default function ReportCard({ project, card_icon: CardIcon, icon_bg }: ReportCardProps) {
  const { name, team, deadline, team_members, progress } = project;

  return (
    <div className={`bg-white position-relative h-100 ${styles.report_card_container}`}>
      <div className={`position-absolute rounded-circle ${styles.card_icon}`}
        style={{backgroundColor: icon_bg, boxShadow: `0px 10px 11px -6px ${icon_bg}`}}
      >
        <CardIcon className='text-white' />
      </div>
      <h2 className={`mb-1 fw-semibold text-capitalize ${styles.project_name}`}>
        {name}
      </h2>
      <div className="d-flex align-items-center mb-2">
        <CompassIcon className={styles.compass_icon} />
        <p className={`fw-medium m-0 text-capitalize ${styles.project_team}`}>{team}</p>
      </div>
      <div className="d-flex align-items-center">
        <AlarmIcon className={styles.alarm_icon} />
        <p className={`fw-medium m-0 text-capitalize ${styles.project_deadline}`}>{deadline} left</p>
      </div>

      <hr />

      <div className="d-flex justify-content-between">
        <div>
          <p className={`fw-medium mb-2 ${styles.team_heading}`}>Team Members</p>
          <div className="d-flex align-items-center">
            {team_members.map(({image, name}, index) => (
              <Image key={name+index} src={image} alt={name} width={13} height={13} className="me-1" />
            ))}
            <PlusCircleIcon style={{width: 15, height: 15}} />
          </div>
        </div>
        <div>
          <p className={`fw-medium mb-2 ${styles.progress_heading}`}>Progress</p>
          <p className={`fw-medium ${styles.progress}`}>{progress}</p>
        </div>
      </div>
    </div>
  )
}
