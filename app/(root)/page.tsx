import HeaderBox from '@/components/ui/HeaderBox'
import RightSideBar from '@/components/ui/RightSideBar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Wahab', lastName: 'Cide', email: 'ac44@williams.edu'};

  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox type = "greeting" 
          title = "Welcome" 
          user={ loggedIn?.firstName || 'Guest'} 
          subtext = "Manage your accounts, transactions, and subscriptions in one place"
          />
       
       <TotalBalanceBox 
        accounts = {[]}
        totalBanks = {3}
        totalCurrentBalance = {8600.45}
        />
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSideBar 
      user ={loggedIn}
      transactions = {[]}
      banks = {[{currentBalance: 400.25}, {currentBalance: 375.68}]}/>
    </section>
  )
}

export default Home