
import Breadcrumbs from '../Components/Breadcrumbs';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Team from '../Components/About/TabTeam';
import TabHelp from '../Components/About/TabHelp';
import '../Assets/Css/style.css';
import TabContacts from '../Components/About/TabContacts';

function About() {
    const breadcrumbPaths = [
        { link: '/', label: 'Home' },
        { label: 'About us' },
    ];

    return (
        <main>
            <div className="container">
                <div className="row pt-5 mt-5">
                    <div className="col-12 breadcrumbs">
                        <Breadcrumbs paths={breadcrumbPaths} />
                    </div>
                </div>
                <div className="row pt-2 mb-5">
                    <h1 className="display-4 special-title main-header mb-4 mt-2">About us</h1>
                    <div className="col">
                        <Tabs>
                            <TabList>
                                <Tab><p className="lead mb-1 fw-bolder">Our team</p></Tab>
                                <Tab><p className="lead mb-1 fw-bolder">How can you help</p></Tab>
                                <Tab><p className="lead mb-1 fw-bolder">Contact us</p></Tab>
                            </TabList>
                            <TabPanel>
                                <Team/>
                            </TabPanel>
                            <TabPanel>
                                <TabHelp/>
                            </TabPanel>
                            <TabPanel>
                                <TabContacts/>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
            <div className="row">
                    <div className="col empty-background">
                    </div>
                </div>
            </div>
        </main>

    )
}

export default About;