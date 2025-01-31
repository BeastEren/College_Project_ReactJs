import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useState } from 'react';

export default function QrPage() {
    const [scanResult, setScanResult] = useState(null)

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250
            },
            fps: 5,
        });

        scanner.render(success, error);

        function success(result) {
            scanner.clear();
            setScanResult(result);
        }

        function error(err) {
            console.warn(err);
        }
    }, []);

    return (
        <div>
            <h1>qrPage</h1>
            {
                scanResult
                    ? <div>Success: <a href={'http://' + scanResult}>{scanResult}</a></div>
                    : <div className='reader'></div>
            }
        </div>
    )
}