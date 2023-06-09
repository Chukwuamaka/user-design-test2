import Dashboard from '@/components/Dashboard';
import { PlusSmallIcon } from '@heroicons/react/24/solid';
import ReportLabel from '@/components/reporting/ReportLabel';
import { useState } from 'react';
import { ReportLabelType, labels, projects } from '@/data';
import ReportCard from '@/components/reporting/ReportCard';
import { ChartPieIcon, CreditCardIcon, DevicePhoneMobileIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import LaptopIcon from '@/components/icons/LaptopIcon';
import WalletIcon from '@/components/icons/WalletIcon';
import DatabaseIcon from '@/components/icons/DatabaseIcon';
import HeadphonesIcon from '@/components/icons/HeadphonesIcon';
import Page from '@/components/Page';
import styles from '@/styles/Home.module.css'

const card_icons = [
  { icon: DevicePhoneMobileIcon, bg: '#EA5B92' },
  { icon: LaptopIcon, bg: '#14C3A4' },
  { icon: CreditCardIcon, bg: '#4F96F7' },
  { icon: ChartPieIcon, bg: '#FA8035' },
  { icon: WalletIcon, bg: '#D189E1' },
  { icon: DatabaseIcon, bg: '#FB8135' },
  { icon: VideoCameraIcon, bg: '#7EBCE2' },
  { icon: HeadphonesIcon, bg: '#E65A8F' },
]

export default function Home() {
  const [active, setActive] = useState<ReportLabelType['label']>('all');

  return (
    <Page title='Compute App' description='A React app built with Next.js, Typescript, and Bootstrap'>
      <Dashboard>
        <div className='d-flex justify-content-between align-items-end'>
          <div>
            <h1 className={`fw-semibold ${styles.main_heading}`}>Reporting</h1>
            <p className='fw-semibold m-0'>All projects in current month</p>
          </div>
          <div className={`bg-blue rounded text-white ${styles.add_icon_container}`}>
            <PlusSmallIcon className={styles.add_icon} />
          </div>
        </div>

        <hr />

        <div className='d-flex flex-wrap'>
          {labels.map(({ label, value }) => (
            <ReportLabel key={label+value} label={label} value={value} active={active} />
          ))}
        </div>

        <div className={`row gx-4 gy-5 align-items-stretch ${styles.grid}`}>
          {projects.map((project, index) => (
            <div key={project.name+index} className='col-sm-6 col-md-4 col-lg-3'>
              <ReportCard project={project} card_icon={card_icons[index].icon} icon_bg={card_icons[index].bg} />
            </div>
          ))}
        </div>
      </Dashboard>
    </Page>
  )
}
