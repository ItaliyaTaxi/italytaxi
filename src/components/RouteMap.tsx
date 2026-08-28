"use client";

import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { useMemo } from 'react';
import 'leaflet/dist/leaflet.css';

export interface RouteMapPoint {
    name: string;
    lat: number;
    lon: number;
}

interface RouteMapProps {
    origin: RouteMapPoint;
    destination: RouteMapPoint;
    /** [lat, lon] pairs describing the real driving route, sourced from a routing engine — never invented. */
    geometry: [number, number][];
}

function markerIcon(label: string, color: string) {
    return divIcon({
        className: '',
        html: `<div style="display:flex;flex-direction:column;align-items:center;transform:translateY(-6px);">
            <div style="background:${color};color:#fff;font:700 10px/1 Arial,sans-serif;letter-spacing:.04em;padding:3px 8px;border-radius:6px;white-space:nowrap;box-shadow:0 2px 6px rgba(0,0,0,.25);margin-bottom:2px;">${label}</div>
            <div style="width:14px;height:14px;border-radius:50%;background:${color};border:2.5px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.35);"></div>
        </div>`,
        iconSize: [0, 0],
        iconAnchor: [0, 0],
    });
}

export default function RouteMap({ origin, destination, geometry }: RouteMapProps) {
    const bounds = useMemo(() => {
        const lats = geometry.map((p) => p[0]).concat([origin.lat, destination.lat]);
        const lons = geometry.map((p) => p[1]).concat([origin.lon, destination.lon]);
        return [
            [Math.min(...lats), Math.min(...lons)],
            [Math.max(...lats), Math.max(...lons)],
        ] as [[number, number], [number, number]];
    }, [geometry, origin, destination]);

    return (
        <MapContainer
            bounds={bounds}
            boundsOptions={{ padding: [36, 36] }}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
            attributionControl={true}
        >
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                subdomains="abcd"
                maxZoom={19}
            />
            <Polyline
                positions={geometry}
                pathOptions={{ color: '#C9A84C', weight: 4, opacity: 0.9 }}
            />
            <Marker position={[origin.lat, origin.lon]} icon={markerIcon(origin.name, '#0F1C2E')}>
                <Popup>{origin.name}</Popup>
            </Marker>
            <Marker position={[destination.lat, destination.lon]} icon={markerIcon(destination.name, '#B3821A')}>
                <Popup>{destination.name}</Popup>
            </Marker>
        </MapContainer>
    );
}
