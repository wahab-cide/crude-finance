import React from 'react'
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotlaBalanceBoxProps) => {
  return (
    <section style={{
        display: 'flex',                  
        width: '100%',                     
        alignItems: 'center',             
        gap: '1rem',                      
        borderRadius: '0.75rem',           
        border: '1px solid #6B7280',       
        padding: '1rem',                  
        boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.10), 0px 1px 2px rgba(16, 24, 40, 0.06)'}}>
        <div className="total-balance-chart">
            <DoughnutChart accounts={accounts}/>
        </div>

        <div className="flex flex-col gap-6">
            <h2 className="header-2">
                Bank Accounts: {totalBanks}
            </h2>
            <div className="flex flex-col gap-2">
                <p className="total-balance-label">Total Current Balance</p>
                <div className='total-balance-amount flex-center gap-2'>
                    <AnimatedCounter amount={totalCurrentBalance}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox