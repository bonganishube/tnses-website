import React from 'react';
import './Services.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import googleEducationImage from '../../assets/services/google-education.jpg';
import blueprintImage from '../../assets/services/blueprint.jpg';
import mentorshipImage from '../../assets/services/mentorship.jpg';

const Services = () => {
  return (
    <div className='services-section' id='services'>
      <div className='services-container'>
        <div className='services-info'>
          <h2>
            What We Can Do Together
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className='service-category'>
            <Tabs>
              <TabList >
                <div className='tab-list'>
                  <Tab className='tab-one'>Google for Education</Tab>
                  <Tab className='tab-two'>Blueprint</Tab>
                  <Tab className='tab-three'>Mentorship</Tab>
                </div>
              </TabList>
                
              <TabPanel >
                <div className='service-tab'>
                  <div className='service-info'>
                    <h3>
                      Google for Education
                    </h3>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <h4>
                      Benefits
                    </h4>
                    <div className='service-list'>
                      <p>Lorem Ipsum is simply dummy</p>
                      <p>Lorem Ipsum is simply dummy</p>
                      <p>Lorem Ipsum is simply dummy</p>
                    </div>
                    <a className='service-link'>
                      Register Now
                    </a>
                  </div>
                  <img src={googleEducationImage} alt='' className='service-image'/>
                </div>
              </TabPanel>
              <TabPanel>
              <div className='service-tab'>
                  <div className='service-info'>
                    <h3>
                      Blueprint
                    </h3>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <h4>
                      Benefits
                    </h4>
                    <div className='service-list'>
                      <p>Lorem Ipsum is simply dummy</p>
                      <p>Lorem Ipsum is simply dummy</p>
                      <p>Lorem Ipsum is simply dummy</p>
                    </div>
                    <a className='service-link'>
                      Register Now
                    </a>
                  </div>
                  <img src={blueprintImage} alt='' className='service-image'/>
                </div>
              </TabPanel>
              <TabPanel>
              <div className='service-tab'>
                  <div className='service-info'>
                    <h3>
                      Mentorship
                    </h3>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <h4>
                      Benefits
                    </h4>
                    <div className='service-list'>
                      <p>Lorem Ipsum is simply dummy</p>
                      <p>Lorem Ipsum is simply dummy</p>
                      <p>Lorem Ipsum is simply dummy</p>
                    </div>
                    <a className='service-link'>
                      Register Now
                    </a>
                  </div>
                  <img src={mentorshipImage} alt='' className='service-image'/>
                </div>
              </TabPanel>
            </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Services