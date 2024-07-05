import { Tabs } from "rsuite";
import Tab from "rsuite/esm/Tabs/Tab";
const Goals = () => {
    return(
        <>
        <div className="flex">
            <Tabs defaultActiveKey="1" vertical>
                <Tab eventKey="1" title="Month">

                </Tab>
                <Tab eventKey="2" title="Day">

                </Tab>
            </Tabs>
        </div>
        </>
    );
}

export default Goals;