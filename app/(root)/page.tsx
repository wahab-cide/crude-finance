import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Wahab'};

  return (
    <section className="home bg-black">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox type = "greeting" 
          title = "Welcome" 
          user={ loggedIn?.firstName || 'Guest'} 
          subtext = "Manage your accounts, transactions, and subscriptions in one place"
          />
        </header>
       <TotalBalanceBox 
        accounts = {[]}
        totalBanks = {1}
        totalCurrentBalance = {1705.24}
        />
      </div>
    </section>
  )
}

export default Home