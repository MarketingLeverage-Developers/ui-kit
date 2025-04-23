'use client';
import React from 'react';
import { Container as MapDiv, Marker, NaverMap, NavermapsProvider, useNavermaps } from 'react-naver-maps';
import { dimensionToString } from '../../utils';

type LocationMapProps = {
    latitude: number;
    longitude: number;
    width: number | string;
    height: number | string;
    radius: number;
};

const LocationMap = ({ latitude, longitude }: LocationMapProps) => {
    const navermaps = useNavermaps();
    return (
        <NaverMap defaultCenter={new navermaps.LatLng(latitude, longitude)} defaultZoom={15}>
            <Marker defaultPosition={new navermaps.LatLng(latitude, longitude)} />
        </NaverMap>
    );
};

function withProvider<P extends { width: number | string; height: number | string; radius: number }>(
    WrappedComponent: React.ComponentType<P>
): React.FC<P> {
    return (props: P) => {
        return (
            <MapDiv
                style={{
                    width: dimensionToString(props.width),
                    height: dimensionToString(props.height),
                    borderRadius: props.radius,
                }}
            >
                <NavermapsProvider ncpClientId="reieinsg3c">
                    <WrappedComponent {...(props as any)} />
                </NavermapsProvider>
            </MapDiv>
        );
    };
}

export default withProvider(LocationMap);
