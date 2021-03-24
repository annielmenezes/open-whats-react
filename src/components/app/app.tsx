import { SyntheticEvent, useState } from "react";
import { useGeoIp } from "../../hooks/use-geoip";
import { countries } from "../../data/countries";
import { urlBase } from "../../helpers/isMobile";
import "./app.css";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const countryCode = useGeoIp();
  const [ddi, setDdi] = useState(countries[0].code);

  const onClickLink = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(ddi, phoneNumber, urlBase());
    if (phoneNumber && ddi) {
      window.open(
        `https://${urlBase()}.whatsapp.com/send?phone="${ddi} ${phoneNumber}"`
      );
    }
  };

  return (
    <div className="app">
      <div className="form">
        <h1 className="logo">OWR</h1>
        <p className="into">
          Add a phone number below to send a WhatsApp message
        </p>
        <div className="form__group">
          <div className="country__code">
            <span className="form__select-value">{ddi}</span>
            <select
              className="form__select"
              name="country-code"
              id="country-code"
              defaultValue={
                countries.find((country) => country.isoCode === countryCode)
                  ?.code || ""
              }
              onChange={(event) => setDdi(event.target.value)}
            >
              {countries.map(({ code, isoCode, name }) => {
                return (
                  <option key={`${isoCode}-${code}`} value={code}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          <input
            className="form__input"
            type="number"
            name="number"
            id="number"
            maxLength={10}
            defaultValue={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <a
          className="form__button"
          onClick={onClickLink}
          href="#nowhere"
          rel="noopener noreferrer"
        >
          open chat
        </a>
      </div>
    </div>
  );
}

export default App;
