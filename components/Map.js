import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

// Fix for default marker icons in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Map = () => {
    const [activeTab, setActiveTab] = useState('been');
    const [countries, setCountries] = useState(null);

    const countryLists = {
        been: ['USA', 'IND', 'AUS', 'AUT', 'CZE', 'HRV', 'JPN', 'THA', 'MEX', 'SGP', 'MYS'],
        lived: ['USA', 'IND'],
        wish: ['GBR', 'ESP', 'BRA', 'ITA']
    };

    const getStyle = (feature) => {
        const countryCode = feature.properties.ISO_A3;
        const isHighlighted = countryLists[activeTab].includes(countryCode);
        
        return {
            fillColor: isHighlighted ? '#e74c3c' : '#f8f9fa',
            weight: 0.5,
            opacity: 0.5,
            color: '#999',
            fillOpacity: isHighlighted ? 0.8 : 0.2,
        };
    };

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson')
            .then(response => response.json())
            .then(data => setCountries(data));
    }, []);

    return (
        <div className="map-section">
            <div className="map-tabs-container">
                <button 
                    className={`map-tab ${activeTab === 'been' ? 'active' : ''}`}
                    onClick={() => setActiveTab('been')}
                >
                    Been 
                </button>
                <button 
                    className={`map-tab ${activeTab === 'lived' ? 'active' : ''}`}
                    onClick={() => setActiveTab('lived')}
                >
                    Lived 
                </button>
                <button 
                    className={`map-tab ${activeTab === 'wish' ? 'active' : ''}`}
                    onClick={() => setActiveTab('wish')}
                >
                    Wish
                </button>
            </div>
            <div className="map-container">
                <MapContainer
                    center={[20, 0]}
                    zoom={1}
                    minZoom={1}
                    maxZoom={6}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {countries && (
                        <GeoJSON
                            data={countries}
                            style={getStyle}
                        />
                    )}
                </MapContainer>
            </div>
        </div>
    );
};

export default Map; 