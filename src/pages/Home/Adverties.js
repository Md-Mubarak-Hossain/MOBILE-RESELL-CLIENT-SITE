import React, { useEffect } from 'react';
import config from '../../config';
import {
    AdvertisingProvider,
    AdvertisingSlot,
    logVersionInfo
} from 'react-advertising';

const Advertise = () => {
    useEffect(() => {
        fetch('http://localhost:5000/mobile')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    logVersionInfo();
    return (
        <div>
            <AdvertisingProvider config={config}>
                <div>
                    <img
                        src="https://developer.sabre.com/sites/default/files/2019-10/Picture4-1-1024x242_3.png"
                        alt="logo"
                    />
                    <h1>
                        React Advertising Demo
                        <br />

                    </h1>
                </div>
                <div>
                    <p>
                        This demo shows how to integrate advertising into your React
                        application using Google Publisher Tags and Prebid.
                    </p>
                    <h2>Slot <em>banner-ad</em>:</h2>
                    <AdvertisingSlot id="banner-ad" />
                    <p>
                        This version uses the ES6 modules from the npm package, which is the
                        default and recommended way, also used by <em>create-react-app</em>
                    </p>
                </div>
            </AdvertisingProvider>
        </div >
    );
}

export default Advertise;
