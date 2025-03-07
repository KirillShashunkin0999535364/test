'use client';

import dynamic from 'next/dynamic';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import { paths } from 'src/routes/paths';

import { MAPBOX_API } from 'src/config-global';


import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import ComponentHero from 'src/sections/_examples/component-hero';
//
const MapHeatmap = dynamic(() => import('./heatmap'));
const MapClusters = dynamic(() => import('./clusters'));
const MapInteraction = dynamic(() => import('./interaction'));
const MapSideBySide = dynamic(() => import('./side-by-side'));
const MapChangeTheme = dynamic(() => import('./change-theme'));
const MapMarkersPopups = dynamic(() => import('./map-markers-popups'));
const MapDraggableMarkers = dynamic(() => import('./draggable-markers'));
const MapViewportAnimation = dynamic(() => import('./viewport-animation'));
const MapGeoJSONAnimation = dynamic(() => import('./map-geo-json-animation'));
const MapHighlightByFilter = dynamic(() => import('./map-highlight-by-filter'));

// ----------------------------------------------------------------------

const THEMES = {
  streets: 'mapbox://styles/mapbox/streets-v11',
  outdoors: 'mapbox://styles/mapbox/outdoors-v11',
  light: 'mapbox://styles/mapbox/light-v10',
  dark: 'mapbox://styles/mapbox/dark-v10',
  satellite: 'mapbox://styles/mapbox/satellite-v9',
  satelliteStreets: 'mapbox://styles/mapbox/satellite-streets-v11',
};

const baseSettings = {
  mapboxAccessToken: MAPBOX_API,
  minZoom: 1,
};

const StyledMapContainer = styled('div')(({ theme }) => ({
  zIndex: 0,
  height: 560,
  overflow: 'hidden',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right': {
    display: 'none',
  },
}));

// ----------------------------------------------------------------------

export default function MapView() {
  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Map"
          links={[
            {
              name: 'Components',
              href: paths.components,
            },
            { name: 'Map' },
          ]}
          moreLink={[
            'http://visgl.github.io/react-map-gl',
            'http://visgl.github.io/react-map-gl/examples',
          ]}
        />
      </ComponentHero>

      <Container sx={{ my: 10 }}>
        <Stack spacing={5}>
          <Card>
            <CardHeader title="Change Theme" />
            <CardContent>
              <StyledMapContainer>
                <MapChangeTheme {...baseSettings} themes={THEMES} />
              </StyledMapContainer>
            </CardContent>
          </Card>


          <Card>
            <CardHeader title="Draggable Markers" />
            <CardContent>
              <StyledMapContainer>
                <MapDraggableMarkers {...baseSettings} mapStyle={THEMES.light} />
              </StyledMapContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Geojson Animation" />
            <CardContent>
              <StyledMapContainer>
                <MapGeoJSONAnimation {...baseSettings} mapStyle={THEMES.satelliteStreets} />
              </StyledMapContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Clusters" />
            <CardContent>
              <StyledMapContainer>
                <MapClusters {...baseSettings} mapStyle={THEMES.light} />
              </StyledMapContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Interaction" />
            <CardContent>
              <StyledMapContainer>
                <MapInteraction {...baseSettings} mapStyle={THEMES.light} />
              </StyledMapContainer>
            </CardContent>
          </Card>


          <Card>
            <CardHeader title="Highlight By Filter" />
            <CardContent>
              <StyledMapContainer>
                <MapHighlightByFilter {...baseSettings} mapStyle={THEMES.light} />
              </StyledMapContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Heatmap" />
            <CardContent>
              <StyledMapContainer>
                <MapHeatmap {...baseSettings} mapStyle={THEMES.light} />
              </StyledMapContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader title="Side By Side" />
            <CardContent>
              <StyledMapContainer>
                <MapSideBySide {...baseSettings} />
              </StyledMapContainer>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
