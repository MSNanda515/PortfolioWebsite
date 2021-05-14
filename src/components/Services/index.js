import React from 'react';
import Icon1 from '../../assets/images/svg3.svg';
import Icon2 from '../../assets/images/svg4.svg';
import Icon3 from '../../assets/images/svg5.svg';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon,
    ServicesH2, ServicesP} from './ServicesElements'


const Services = ({projects}) => {
    return (
        <ServicesContainer id="projects">
            <ServicesH1>Projects</ServicesH1>
            {projects.map(rItem => (
                <ServicesWrapper>
                    {rItem.map(cItem => (
                        <ServicesCard>
                            <ServicesIcon src={cItem.img}/>
                            <ServicesH2>{cItem.prjName}</ServicesH2>
                            <ServicesP>{cItem.prjDes}</ServicesP>
                        </ServicesCard>
                    ))}
                    
                    {/* <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>You can access our offices anywhere from the world</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Premium Benefits</ServicesH2>
                        <ServicesP>Unlock our special membership card that returns 5% cashback</ServicesP>
                    </ServicesCard> */}
                </ServicesWrapper>
            ))}
            
        </ServicesContainer>
    )
}

export default Services;
