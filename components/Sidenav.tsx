import Image from "next/image";
import logo from '../public/logo.svg';
import styles from '../styles/Sidenav.module.css';
import { AdjustmentsHorizontalIcon, ArrowRightOnRectangleIcon, CalendarIcon, ChatBubbleLeftIcon, DocumentChartBarIcon, GlobeEuropeAfricaIcon, Squares2X2Icon, UserGroupIcon } from "@heroicons/react/24/outline";
import RoadmapIcon from "./icons/RoadmapIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import PeopleIcon from "./icons/PeopleIcon";

const sidenav_items = [
  { page_title: 'Board', page_url: '/dashboard/board', icon: Squares2X2Icon },
  { page_title: 'Plan Schedule', page_url: '/dashboard/plan', icon: CalendarIcon },
  { page_title: 'Reporting', page_url: '/', icon: DocumentChartBarIcon },
  { page_title: 'Messaging', page_url: '/dashboard/messaging', icon: ChatBubbleLeftIcon },
  { page_title: 'Team Members', page_url: '/dashboard/team', icon: PeopleIcon },
  { page_title: 'Tools Plugin', page_url: '/dashboard/tools', icon: GlobeEuropeAfricaIcon },
  { page_title: 'Roadmap', page_url: '/dashboard/roadmap', icon: RoadmapIcon },
  { page_title: 'Settings', page_url: '/dashboard/settings', icon: AdjustmentsHorizontalIcon },
]

export default function Sidenav() {
  const router = useRouter();

  return (
    <nav className={`navbar navbar-expand-lg d-block ps-4 pe-2 ${styles.sidenav_container}`}>
      <div className="w-100 mb-3">
        <Link href='/dashboard' className='navbar-brand ms-4'>
          <Image src={logo} alt='Compute logo' width={57} height={15} />
        </Link>
      </div>
      
      <div className="mt-4">
        <div className={`navbar-nav d-flex flex-column justify-between ${styles.navbar_nav}`}>
          <div className={`overflow-auto ${styles.sidenav_scrollable}`}>
            {sidenav_items.map((item, index) => {
              const { page_title, page_url, icon: Icon } = item;
              return (
                <Link key={page_title+index} href={page_url} aria-current={router.pathname === page_url ? "page" : false}
                  className={`nav-link fw-medium text-capitalize mb-4 d-flex align-items-center ${styles.nav_link} ${router.pathname === page_url ? styles.active : ''}`}
                >
                  <Icon className={styles.nav_icon} />
                  <span>{page_title}</span>
                </Link>
              )
            })}
          </div>
          <div className={`pt-4 ${styles.sidenav_unscrollable}`}>
            <Link href='/login' className={`nav-link fw-medium ${styles.nav_link}`}>
              <ArrowRightOnRectangleIcon className={styles.nav_icon} />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
