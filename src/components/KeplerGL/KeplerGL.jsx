import KeplerGl from "kepler.gl";

function KeplerGL() {

    return (
      <KeplerGl
        id="map"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    );
  }
  
 export default KeplerGL 