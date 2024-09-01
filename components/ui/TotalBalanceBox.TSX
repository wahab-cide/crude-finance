import React from 'react'

const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotlaBalanceBoxProps) => {
  return (
    <section className="flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 shadow-chart sm:gap-6 sm:p-6">
        <div className="total-balance-chart">
            {/*DoughnutChart*/}
        </div>

        <div className="flex flex-col gap-6">
            <h2 className="header-2">
                Bank Accounts: {totalBanks}
            </h2>
            <div className="flex flex-col gap-2">
                <p className="total-balance-label">
                    Total Current Balance
                </p>
                <p className='total-balance-amount flex-center gap-2'>
                    {totalCurrentBalance}
                </p>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox