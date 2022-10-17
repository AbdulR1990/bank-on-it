import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP
} from './ServicesElements';

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
                <ServicesP>Tailor Your Wealth to Grow as You Do - Play Chess, not Checkers</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;