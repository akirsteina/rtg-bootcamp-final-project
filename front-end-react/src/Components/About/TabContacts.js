import GoogleMaps from "../About/GoogleMaps";
import SocialIcons from "../SocialIcons";
import SubscribeField from "../SubscribeField";

function TabContacts() {

    return (
        <div className="row p-5">
            <div className="col-12 col-lg-6">
                <GoogleMaps />
            </div>
            <div className="col-12 col-lg-6 px-4 d-flex flex-column">
                <div>
                    <h3 className="about-title special-title pb-3">
                        Contact us
                    </h3>
                    <div className="py-2">
                        <p className="lead fw-bold d-inline">Address: </p>
                        <p className="lead d-inline">Some street 555, Riga, Latvia, LV-1000</p>
                    </div>
                    <div className="py-2">
                        <p className="lead fw-bold d-inline">Phone number: </p>
                        <p className="lead d-inline">+371 200 000 00</p>
                    </div>
                    <div className="py-2">
                        <p className="lead fw-bold d-inline">Email: </p>
                        <p className="lead d-inline">happyplants@plantsareawesome.com</p>
                    </div>
                    <div className="row">
                        <div className="col lead fs-5 fw-bold pt-2">
                            <SocialIcons />
                        </div>
                    </div>
                </div>
                <SubscribeField className="mt-auto"/>
            </div>
        </div>
    )
}

export default TabContacts;