//create a functional component

import { useEffect } from "react"




export default function VisitPage() {


    //useeffect to set ipaddress of user
    useEffect(() => {
        fetch('https://ipapi.co/region_code/')
        .then(res => res.text())
        .then(state => fetch(`https://sxrwu24kff6ogd3el72jtozljm0wsccb.lambda-url.us-east-2.on.aws/?state=${state}`))
        .then(res => res.json())
        .then(data => {console.log(data)})
        .catch(err => console.log(err))
    }, []);

    
    
    function graph(){}
    return (
        <div>
        </div>
    )
}