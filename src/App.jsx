import { useEffect, useRef, useState } from "react";
import { getCountryDetail, getSummary } from "./apis";
import "./App.scss";
import SummaryStatistic from "./components/SummaryStatistic";
import { MOCK_DATA_COVID19 } from "./const";
import _ from "lodash";
import CountryCard from "./components/CountryCard";
import CountryModal from "./components/CountryModal";
import Loading from "./components/Loading";
import up from "./assets/up.png";

function App() {
  const [summuries, setSummuries] = useState(false);
  const [isFloat, setIsFloat] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState({});
  const ref = useRef();
  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const res = await getSummary();
      setLoading(false);
      if (!!res?.data?.ID) {
        const sorted = _.sortBy(res?.data?.Countries, [
          (item) => -item.TotalConfirmed,
          (item) => -item.TotalDeaths,
          (item) => +item.TotalRecovered,
        ]);
        setSummuries({ ...res?.data, Countries: sorted });
        localStorage.setItem(MOCK_DATA_COVID19, JSON.stringify(res?.data));
      } else {
        const mockData = localStorage.getItem(MOCK_DATA_COVID19 || {});
        const sorted = _.sortBy(JSON.parse(mockData)?.Countries, [
          (item) => -item.TotalConfirmed,
          (item) => -item.TotalDeaths,
          (item) => +item.TotalRecovered,
        ]);
        setSummuries({ ...JSON.parse(mockData), Countries: sorted });
      }
    };
    init();
  }, []);
  const onNavScroll = () => {
    if (window.scrollY > 100) {
      setIsFloat(true);
    } else {
      setIsFloat(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      removeEventListener("scroll", onNavScroll);
    };
  }, []);
  const getCountry = async (countryCode) => {
    setLoading(true);
    const data = await getCountryDetail(countryCode);
    setCountry(data?.data?.pop());
    setLoading(false);
    setVisible(true);
  };
  const onScrollUp = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="App">
      <SummaryStatistic data={summuries} refer={ref} />
      <br />
      <div className="countries">
        {summuries?.Countries?.map((e, i) => (
          <CountryCard key={e?.ID} pos={i + 1} data={e} onClick={getCountry} />
        ))}
      </div>
      <div className={`float ${isFloat && "show"}`} onClick={onScrollUp}>
        <img src={up} alt="up_icon" />
      </div>
      {visible && (
        <CountryModal data={country} onCancel={() => setVisible(false)} />
      )}
      {loading && <Loading data={summuries} />}
    </div>
  );
}

export default App;

