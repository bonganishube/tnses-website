import React from 'react';
import './Services.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Services = () => {
  return (
    <div className='services-section' id='services'>;
      <div className='services-container'>
        <div>
          <h2>
            What We Can Do Together
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
        <div className='service-category'>
            <Tabs>
              <TabList className='tab-list'>
                <Tab>Google for Education</Tab>
                <Tab>Blueprint</Tab>
                <Tab>Mentorship</Tab>
              </TabList>
                <div>
                  <h3 claddName='google-for-education'>
                    Google for Education
                  </h3>
                </div>
              <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 3</h2>
              </TabPanel>
            </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Services