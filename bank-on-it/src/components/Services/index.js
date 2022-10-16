import React from 'react'

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Reduce Expenses</ServicesH2>
                <ServicesP>Reduce Fees, Reduce Costs, Increase Revenue, Simple As That</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Virtual Offices</ServicesH2>
                <ServicesP>Access Our Platform Anywhere on the Planet - Free of Charge</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Investment Portfolio</ServicesH2>
                <ServicesP>Tailor Your Wealth to Grow as You Do - Play Chess, Not Checkers</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;