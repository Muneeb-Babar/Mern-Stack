import { getMyAdsFromDb,auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState,useEffect } from "react";
import Card from 'react-bootstrap/Card';

function GetMyAd(){
    const [myAd, setMyAd] = useState([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getMyAds();
            } else {
                // User is signed out
                // ...
            }
        });

        return () => {
            unsubscribe();
        };
    }, []); 

    async function getMyAds() {
        const uid = auth.currentUser.uid;
        console.log('uid', uid);
        const ads = await getMyAdsFromDb(uid);
        setMyAd(ads);
    }
if(!myAd){
    return <div>You dont have to post any ad</div>
}
    return <div>
        {myAd.map(item=>{
            const{brand,image,description}=item
            return <div>
                <div className="container" style={{marginTop:'20px'}}>
                    <h1>My Ads</h1>
                <Card style={{ width: '18rem' }}>
    <Card.Img />
    <img src={image}/>
    <Card.Body>
        <Card.Title>{brand}</Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
    </Card.Body>
    </Card></div>
            </div>
        })}
    </div>
}
export default GetMyAd