import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  useEffect(() => {
    const map = L.map("map").setView([9.937666928675405, -84.10438180322753], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);
    

    
    L.marker([10.019687860640232, -84.1306062816132]).addTo(map)
      .bindPopup("Macro Lucem Barva")
      ;
    
    L.marker([9.92897813972258, -84.04130137337182]).addTo(map)
      .bindPopup("BIO SALUD	B.S Plaza del Sol")
    ;

    L.marker([9.93578876867833, -84.18713271580155]).addTo(map)
      .bindPopup("BIO SALUD	B.S Santa Ana")
    ;

    L.marker([9.939019283798636, -84.14363902875013]).addTo(map)
      .bindPopup("BIO SALUD	B.S Escazu")
    ;

    L.marker([9.939093378681338, -84.14193439056697]).addTo(map)
      .bindPopup("MERCADO AVENIDA	Escazu")
    ;
    
    L.marker([9.94651784127657, -84.15062587785863]).addTo(map)
      .bindPopup("MERCADITO CENTRAL COMBAI	Escazu")
    ;
      
    L.marker([10.07934474356002, -84.46987003535628]).addTo(map)
      .bindPopup("VEGGY MARKET	San Ramon")
    ;

    L.marker([9.930505403990422, -84.14948785315826]).addTo(map)
      .bindPopup("GREEN CENTER Escazu")
    ;

    L.marker([9.997300591309871, -84.11594482014529]).addTo(map)
      .bindPopup("Farmacia Provida	Heredia")
    ;

    L.marker([9.9612380430726, -84.04835334662695]).addTo(map)
      .bindPopup("MACRO ARMONIA NATURAL	Moravia")
    ;

    L.marker([9.993307999649545, -84.13204127161181]).addTo(map)
      .bindPopup("MACRO BIO NATURAL MARKET Mall Oxigeno")
    ;

      //No lo encontre
      //NUTRIMARKET	Sabana

      //No estoy seguro
      //Auto Mercado	AM Centro


    L.marker([9.934410349252575, -84.06084813587194]).addTo(map)
      .bindPopup("Auto Mercado Yoses")
    ;

    L.marker([9.9290981707342, -84.04110146173109]).addTo(map)
      .bindPopup("Auto Mercado Plaza del Sol")
    ;

    L.marker([9.945221911127268, -84.11714293027316]).addTo(map)
      .bindPopup("Auto Mercado Plaza Mayor")
    ;

    L.marker([9.944563316486203, -84.15195291569985]).addTo(map)
      .bindPopup("Auto Mercado Multiplaza Escazu")
    ;

    L.marker([9.961989230422567, -84.06176100220752]).addTo(map)
      .bindPopup("Auto Mercado Moravia")
    ;

    L.marker([10.008283160503428, -84.11648893701125]).addTo(map)
      .bindPopup("Auto Mercado Heredia")
    ;

    L.marker([9.933851317368779, -84.19035949908296]).addTo(map)
      .bindPopup("Auto Mercado Santa Ana")
    ;

    L.marker([9.92792190719015, -84.13397522065823]).addTo(map)
      .bindPopup("Auto Mercado Escazú")
    ;
    
      //Hay que comprobar
    L.marker([9.664533999690683, -84.64078480814595]).addTo(map)
      .bindPopup("Auto Mercado Herradura")
    ;

    L.marker([10.320039125974375, -85.83464248529617]).addTo(map)
      .bindPopup("Auto Mercado Tamarindo")
    ;
    
    L.marker([10.551336244313553, -85.69510411825804]).addTo(map)
      .bindPopup("Auto Mercado Coco")
    ;






    
      //Hay que comprobar
    L.marker([10.029083428057458, -84.21628801506624]).addTo(map)
      .bindPopup("Auto Mercado Alajuela")
    ;
    
    L.marker([9.909793822765149, -84.00468599082403]).addTo(map)
      .bindPopup("Auto Mercado Tres Rios")
    ;
    
    L.marker([9.940300052426466, -84.15576198871551]).addTo(map)
      .bindPopup("Auto Mercado Guachipelín")
    ;

    L.marker([9.956305957372912, -84.26218000961369]).addTo(map)
      .bindPopup("Auto Mercado Guacima")
    ;

    L.marker([9.998634741953111, -84.14600994823842]).addTo(map)
      .bindPopup("Auto Mercado San Francisco Heredia")
    ;

    L.marker([9.988713383234794, -84.11198827522291]).addTo(map)
      .bindPopup("Auto Mercado Plaza Bratsi")
    ;

    L.marker([9.933809081930507, -84.19032720405924]).addTo(map)
      .bindPopup("Auto Mercado Rio Oro")
    ;

    L.marker([9.988370057581202, -84.07646809635406]).addTo(map)
      .bindPopup("Auto Mercado Santo Domingo")
    ;

    L.marker([9.951779068641539, -84.04618600405907]).addTo(map)
      .bindPopup("Auto Mercado Guadalupe")
    ;

    L.marker([9.926066196149245, -84.0229074635827]).addTo(map)
      .bindPopup("Auto Mercado Guayabos")
    ;

    L.marker([9.862221135734433, -83.93040168690517]).addTo(map)
      .bindPopup("Auto Mercado Cartago")
    ;

    L.marker([9.983472803121384, -84.18603137670083]).addTo(map)
      .bindPopup("Auto Mercado Belén")
    ;
  }, []);

  return (
    <div
      id="map"
      className="w-full h-[400px] rounded-lg shadow-md"
    ></div>
  );
}
