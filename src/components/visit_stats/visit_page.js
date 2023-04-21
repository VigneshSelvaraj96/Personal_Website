import { useEffect } from "react"
import L from "leaflet";
import { useState, useRef } from "react";
import "leaflet/dist/leaflet.css";



export default function VisitPage() {

    //use state to set data
    const [data, setData] = useState([]);
    const mapRef = useRef(null);
    const [totalvisits, setTotalvisits] = useState(1);


    function getTotalvisits(data) {
        let total = 0;
        data.forEach((d) => {
            total += parseInt(d.count);
        });
        return total;
    }

    //useeffect to update data from api
    useEffect(() => {
        fetch('https://ipapi.co/region_code/')
            .then(res => res.text())
            .then(state =>  fetch(`https://sxrwu24kff6ogd3el72jtozljm0wsccb.lambda-url.us-east-2.on.aws/?state=${state}`))
            .then(res => res.json())
            .then(data => { setData(data); return data; })
            .then((data) => { setTotalvisits(getTotalvisits(data));})
            .catch(err => console.log(err))
    }, []);

    //useeffect to set map
    useEffect(() => {
        const stateCoords = {
            AL: { lat: 32.318231, lng: -86.902298 },
            AK: { lat: 66.160507, lng: -153.369141 },
            AZ: { lat: 34.048927, lng: -111.093735 },
            AR: { lat: 34.799999, lng: -92.199997 },
            CA: { lat: 36.778259, lng: -119.417931 },
            CO: { lat: 39.113014, lng: -105.358887 },
            CT: { lat: 41.599998, lng: -72.699997 },
            DE: { lat: 39.0, lng: -75.5 },
            FL: { lat: 27.994402, lng: -81.760254 },
            GA: { lat: 32.157435, lng: -82.907123 },
            HI: { lat: 19.741755, lng: -155.844437 },
            ID: { lat: 44.068203, lng: -114.742043 },
            IL: { lat: 40.0, lng: -89.0 },
            IN: { lat: 40.273502, lng: -86.126976 },
            IA: { lat: 42.032974, lng: -93.581543 },
            KS: { lat: 38.5, lng: -98.0 },
            KY: { lat: 37.839333, lng: -84.27002 },
            LA: { lat: 30.39183, lng: -92.329102 },
            ME: { lat: 45.367584, lng: -68.972168 },
            MD: { lat: 39.045753, lng: -76.641273 },
            MA: { lat: 42.407211, lng: -71.382439 },
            MI: { lat: 44.182205, lng: -84.506836 },
            MN: { lat: 46.39241, lng: -94.63623 },
            MS: { lat: 33.0, lng: -90.0 },
            MO: { lat: 38.573936, lng: -92.60376 },
            MT: { lat: 46.96526, lng: -109.533691 },
            NE: { lat: 41.5, lng: -100.0 },
            NV: { lat: 39.876019, lng: -117.224121 },
            NH: { lat: 44.0, lng: -71.5 },
            NJ: { lat: 39.833851, lng: -74.871826 },
            NM: { lat: 34.307144, lng: -106.018066 },
            NY: { lat: 43.0, lng: -75.0 },
            NC: { lat: 35.782169, lng: -80.793457 },
            ND: { lat: 47.650589, lng: -100.437012 },
            OH: { lat: 40.367474, lng: -82.996216 },
            OK: { lat: 36.084621, lng: -96.921387 },
            OR: { lat: 44.0, lng: -120.5 },
            PA: { lat: 41.203323, lng: -77.194527 },
            RI: { lat: 41.580095, lng: -71.477429 },
            SC: { lat: 33.836081, lng: -81.163725 },
            SD: { lat: 43.969515, lng: -99.901813 },
            TN: { lat: 35.517491, lng: -86.580447 },
            TX: { lat: 31.968599, lng: -99.901813 },
            UT: { lat: 39.32098, lng: -111.093731 },
            VT: { lat: 44.558803, lng: -72.577841 },
            VA: { lat: 37.431573, lng: -78.656894 },
            WA: { lat: 47.751074, lng: -120.740139 },
            WV: { lat: 38.597626, lng: -80.454903 },
            WI: { lat: 43.78444, lng: -88.787868 },
            WY: { lat: 43.075968, lng: -107.290284 }

        };

        const getRadius = (count, totalvisits) => {
            if(count === 0) return 0;
            const MIN_RADIUS = 10;
            const maxCount = Math.max(totalvisits * 0.2, 1); // set a maximum count to avoid very large radii
            const normalizedCount = Math.min(count, maxCount) / maxCount;
            const radius = MIN_RADIUS + normalizedCount * 25;
            return radius;
        };

        if (mapRef.current) {
            mapRef.current.remove();
        }

        // Initialize the map
        const map = L.map("map").setView([37.8, -96], 4);
        mapRef.current = map;

        // Add a tile layer
        L.tileLayer('https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=OyNIPW1UxlJQ7ECUTUtRCx47sl2zLpHKgv1xxAEXDwKB8b75AbYirJflBSifrZm5', {}).addTo(map);
        map.attributionControl.addAttribution("<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors")

        // Add the circle markers to the map
        data.forEach((d) => {
            const { state, count } = d;
            const radius = getRadius(count,totalvisits);
            const latlng = stateCoords[state];
            if(count>0){ 
            L.circleMarker(latlng, { radius, fillColor:'red', color:'white', weight:'0.8', opacity:'0.6', fillOpacity:'0.1' }).addTo(map)
            .bindTooltip('Visits: ' + count, { permanent: false, direction: 'top' });
            }
        });
    }, [data,totalvisits]);

    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-7 mx-auto text-center mb-2 fs-4 mt-5">
                    Visit Stats by state in the US (Bubble size is proportional to number of visits)
                    </div>
                    </div>
        </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <div id="map" style={{height:'500px', boxShadow:'0 .5rem 1rem rgba(0,0,0,0.4)'}}></div>
                    </div>
                </div>
            </div>
        </>

    )
}