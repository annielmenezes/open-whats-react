import { useEffect, useState } from "react";

function useGeoIp() {
  const [country, setCountry] = useState("");

  useEffect(() => {
    (async function getContryCode() {
      try {
        const response = await fetch("https://freegeoip.app/json/");

        const { country_code } = await response.json();

        setCountry(country_code);
      } catch (error) {
        setCountry("BR");
      }
    })();
  }, []);

  return country;
}

export { useGeoIp };
