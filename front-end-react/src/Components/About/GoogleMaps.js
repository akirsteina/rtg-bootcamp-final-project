import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


function GoogleMaps() {
    const mapStyles = {
        height: "50vh",
        width: "100%",
        borderRadius: "5px",
    };

    const defaultCenter = {
        lat: 56.95161690583854, lng: 24.11349429026629
    }

    const locations = [
        {
            name: "We are here",
            location: {
                lat: 56.95161690583854,
                lng: 24.11349429026629
            },
        },
    ];


    return (
        <LoadScript
            googleMapsApiKey=''>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}>
                {
                    locations.map(item => {
                        return (
                            <Marker key={item.name} position={item.location} />
                        )
                    })
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default GoogleMaps;