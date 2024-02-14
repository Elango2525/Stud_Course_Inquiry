import React from 'react'
import DashboardCard01 from './DashboardCard01'
import DashboardCard02 from './DashboardCard02'
// import DashboardCard03 from './DashboardCard03'
import DashboardCard04 from './DashboardCard04'
import DashboardCard07 from './DashboardCard07'
import DashboardCard10 from './DashboardCard10'
import DashboardCard12 from './DashboardCard12'
import WelcomeBanner from './WelcomeBanner';
import Header from '../admin/header/Header'
import Footer from '../admin/footer/Footer'

const Dashboard = () => {
  return (
    <><Header/>
    <main>
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

      {/* Welcome banner */}
      <WelcomeBanner />

      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">

        {/* Line chart (Acme Plus) */}
        <DashboardCard01 />
        {/* Line chart (Acme Advanced) */}
        <DashboardCard02 />
       
        <DashboardCard07 />
        
      </div>

        <div>

        <div className='mt-10 mb-10'>
            <DashboardCard04 />
        </div> 
        <div className='mt-10 mb-10'>
            <DashboardCard10 />
        </div> 
        <div>
            <DashboardCard12 />
        </div> 
      </div>
    </div>
  </main>
  <Footer/>
  </>
  )
}

export default Dashboard