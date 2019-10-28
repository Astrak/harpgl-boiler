import { MapView } from "@here/harp-mapview";
import { GeoCoordinates } from "@here/harp-geoutils";
import { APIFormat, OmvDataSource } from "@here/harp-omv-datasource";
import { MapControls, MapControlsUI } from "@here/harp-map-controls";

const map = new MapView({
    canvas: document.getElementsByTagName("canvas")[0],
    theme: "./resources/berlin_tilezen_base_globe.json"
});
window.addEventListener("resize", () => {
    map.resize(window.innerWidth, window.innerHeight);
});

const omvDataSource = new OmvDataSource({
    baseUrl: "https://xyz.api.here.com/tiles/herebase.02",
    concurrentDecoderScriptUrl: "dist/harp-worker.bundle.js",
    apiFormat: APIFormat.XYZOMV,
    styleSetName: "tilezen",
    maxZoomLevel: 17,
    authenticationCode: "AGln99HORnqL1kfIQtsQl70"
});
map.addDataSource(omvDataSource);

const controls = new MapControls(map);
const ui = new MapControlsUI(controls);
map.canvas.parentElement!.appendChild(ui.domElement);
