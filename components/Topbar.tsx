import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { BellIcon } from '@heroicons/react/24/outline';
import styles from '../styles/Topbar.module.css';
import Image from 'next/image';
import anna_newman from '../public/anna_newman.webp';

export default function Topbar() {
  return (
    <div className={`d-flex justify-content-between align-items-center ${styles.topbar_container}`}>
      <form>
        <div>
          <label htmlFor="search-dashboard" className="form-label visually-hidden">Search through dashboard</label>
          <div className={`input-group p-1 ${styles.search_input}`}>
            <div className="input-group-text bg-white p-1">
              <MagnifyingGlassIcon className={styles.magnifying_glass_icon} />
            </div>
            <input type="search" className="form-control border-start-0 py-1" id="search-dashboard" />
          </div>
        </div>
      </form>
      <div className='d-flex align-items-center text-black'>
        <BellIcon className={styles.bell_icon} />
        <div className={'ms-5 d-flex align-items-center'}>
          <Image src={anna_newman} alt='Anna Newman' width={24} height={24} />
          <div className='d-flex flex-column ms-2 fw-semibold'>
            <p className={`mb-0 ${styles.user_name}`}>Anna Newman</p>
            <p className={`mb-0 ${styles.user_designation}`}>Head HR</p>
          </div>
        </div>
      </div>
    </div>
  )
}
