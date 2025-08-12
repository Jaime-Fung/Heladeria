import { useEffect, useMemo, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import CustomSelect from "../Ubicacion_y_FAQ/CustomSelect";

export default function MapaUbicacion() {
  const mapContainerRef = useRef(null);
  const leafletRef = useRef(null);
  const markersGroupRef = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);

  const locations = useMemo(
    () => [
      {
        lat: 10.019687860640232,
        lon: -84.1306062816132,
        popup: "Macro Lucem Barva",
        province: "Heredia",
      },
      {
        lat: 9.92897813972258,
        lon: -84.04130137337182,
        popup: "BIO SALUD B.S Plaza del Sol",
        province: "San José",
      },
      {
        lat: 9.93578876867833,
        lon: -84.18713271580155,
        popup: "BIO SALUD B.S Santa Ana",
        province: "San José",
      },
      {
        lat: 9.939019283798636,
        lon: -84.14363902875013,
        popup: "BIO SALUD B.S Escazu",
        province: "San José",
      },
      {
        lat: 9.939093378681338,
        lon: -84.14193439056697,
        popup: "MERCADO AVENIDA Escazu",
        province: "San José",
      },
      {
        lat: 9.94651784127657,
        lon: -84.15062587785863,
        popup: "MERCADITO CENTRAL COMBAI Escazu",
        province: "San José",
      },
      {
        lat: 10.07934474356002,
        lon: -84.46987003535628,
        popup: "VEGGY MARKET San Ramon",
        province: "Otros",
      },
      {
        lat: 9.930505403990422,
        lon: -84.14948785315826,
        popup: "GREEN CENTER Escazu",
        province: "San José",
      },
      {
        lat: 9.997300591309871,
        lon: -84.11594482014529,
        popup: "Farmacia Provida Heredia",
        province: "Heredia",
      },
      {
        lat: 9.9612380430726,
        lon: -84.04835334662695,
        popup: "MACRO ARMONIA NATURAL Moravia",
        province: "San José",
      },
      {
        lat: 9.993307999649545,
        lon: -84.13204127161181,
        popup: "MACRO BIO NATURAL MARKET Mall Oxigeno",
        province: "Heredia",
      },
      {
        lat: 9.933837211370301,
        lon: -84.09741065277929,
        popup: "Centro de Nutrición Larisa Páez",
        province: "San José",
      },
      {
        lat: 9.934410349252575,
        lon: -84.06084813587194,
        popup: "Auto Mercado Yoses",
        province: "San José",
      },
      {
        lat: 9.9290981707342,
        lon: -84.04110146173109,
        popup: "Auto Mercado Plaza del Sol",
        province: "San José",
      },
      {
        lat: 9.945221911127268,
        lon: -84.11714293027316,
        popup: "Auto Mercado Plaza Mayor",
        province: "San José",
      },
      {
        lat: 9.944563316486203,
        lon: -84.15195291569985,
        popup: "Auto Mercado Multiplaza Escazu",
        province: "San José",
      },
      {
        lat: 9.961989230422567,
        lon: -84.06176100220752,
        popup: "Auto Mercado Moravia",
        province: "San José",
      },
      {
        lat: 10.008283160503428,
        lon: -84.11648893701125,
        popup: "Auto Mercado Heredia",
        province: "Heredia",
      },
      {
        lat: 9.933851317368779,
        lon: -84.19035949908296,
        popup: "Auto Mercado Santa Ana",
        province: "San José",
      },
      {
        lat: 9.92792190719015,
        lon: -84.13397522065823,
        popup: "Auto Mercado Escazú",
        province: "San José",
      },
      {
        lat: 9.664533999690683,
        lon: -84.64078480814595,
        popup: "Auto Mercado Herradura",
        province: "Otros",
      },
      {
        lat: 10.320039125974375,
        lon: -85.83464248529617,
        popup: "Auto Mercado Tamarindo",
        province: "Otros",
      },
      {
        lat: 10.551336244313553,
        lon: -85.69510411825804,
        popup: "Auto Mercado Coco",
        province: "Otros",
      },
      {
        lat: 10.029083428057458,
        lon: -84.21628801506624,
        popup: "Auto Mercado Alajuela",
        province: "Otros",
      },
      {
        lat: 9.909793822765149,
        lon: -84.00468599082403,
        popup: "Auto Mercado Tres Rios",
        province: "San José",
      },
      {
        lat: 9.940300052426466,
        lon: -84.15576198871551,
        popup: "Auto Mercado Guachipelín",
        province: "San José",
      },
      {
        lat: 9.956305957372912,
        lon: -84.26218000961369,
        popup: "Auto Mercado Guacima",
        province: "Otros",
      },
      {
        lat: 9.998634741953111,
        lon: -84.14600994823842,
        popup: "Auto Mercado San Francisco Heredia",
        province: "Heredia",
      },
      {
        lat: 9.988713383234794,
        lon: -84.11198827522291,
        popup: "Auto Mercado Plaza Bratsi",
        province: "Heredia",
      },
      {
        lat: 9.933809081930507,
        lon: -84.19032720405924,
        popup: "Auto Mercado Rio Oro",
        province: "San José",
      },
      {
        lat: 9.988370057581202,
        lon: -84.07646809635406,
        popup: "Auto Mercado Santo Domingo",
        province: "Heredia",
      },
      {
        lat: 9.951779068641539,
        lon: -84.04618600405907,
        popup: "Auto Mercado Guadalupe",
        province: "San José",
      },
      {
        lat: 9.926066196149245,
        lon: -84.0229074635827,
        popup: "Auto Mercado Guayabos",
        province: "San José",
      },
      {
        lat: 9.862221135734433,
        lon: -83.93040168690517,
        popup: "Auto Mercado Cartago",
        province: "Otros",
      },
      {
        lat: 9.983472803121384,
        lon: -84.18603137670083,
        popup: "Auto Mercado Belén",
        province: "Heredia",
      },
    ],
    []
  );

  const groupedOptions = useMemo(() => {
    const grouped = {};
    locations.forEach((loc) => {
      grouped[loc.province] = grouped[loc.province] || [];
      grouped[loc.province].push(loc);
    });
    const orderedProvinces = [
      "San José",
      ...Object.keys(grouped).filter((p) => p !== "San José"),
    ];
    return orderedProvinces.map((province) => ({
      label: province,
      options: (grouped[province] || []).map((l) => ({
        value: `${l.lat},${l.lon}`,
        label: l.popup,
      })),
    }));
  }, [locations]);

  useEffect(() => {
    let mounted = true;
    let map = null;

    (async () => {
      const mod = await import("leaflet");
      const L = mod.default || mod;
      leafletRef.current = L;
      const el = mapContainerRef.current;
      if (!mounted || !el) return;

      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      map = L.map(el).setView([9.9376, -84.1043], 9);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      const markersGroup = L.layerGroup().addTo(map);
      markersGroupRef.current = markersGroup;

      locations.forEach((loc) => {
        L.marker([loc.lat, loc.lon]).addTo(markersGroup).bindPopup(loc.popup);
      });

      setMapInstance(map);
    })();

    return () => {
      mounted = false;
      if (map) map.remove();
    };
  }, [locations]);

  const handleChange = (selected) => {
    const map = mapInstance;
    const L = leafletRef.current;
    const markersGroup = markersGroupRef.current;
    if (!selected || !map || !L || !markersGroup) return;

    markersGroup.clearLayers();

    if (selected.value === "all") {
      locations.forEach((loc) => {
        L.marker([loc.lat, loc.lon]).addTo(markersGroup).bindPopup(loc.popup);
      });
      map.setView([9.9376, -84.1043], 9);
    } else {
      const [lat, lon] = selected.value.split(",").map(Number);
      const locSelected = locations.find(
        (loc) => loc.lat === lat && loc.lon === lon
      );
      L.marker([lat, lon])
        .addTo(markersGroup)
        .bindPopup(locSelected ? locSelected.popup : "Ubicación seleccionada")
        .openPopup();
      map.setView([lat, lon], 15);
    }
  };
  const selectOptions = [
    { options: [{ value: "all", label: "Todas las ubicaciones" }] },
    ...groupedOptions,
  ];

  return (
    <section className="w-full bg-[#F8EFE3]">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1d1d1b]">
          Ubicaciones
        </h2>
        <p className="mt-3 text-[#1d1d1b]/80 text-base">
          Nos puedes encontrar en:
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 md:gap-8">
          <div className="relative z-10 rounded-xl overflow-hidden w-full h-[300px] md:h-[450px] bg-white">
            <div ref={mapContainerRef} id="map" className="w-full h-full" />
          </div>

          <div className="flex flex-col space-y-6">
            <div>
              <p className="block text-[#1d1d1b] font-semibold mb-2">
                Selecciona ubicación
              </p>
              <CustomSelect options={selectOptions} onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
