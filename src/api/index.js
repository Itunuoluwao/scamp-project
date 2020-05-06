import axios from 'axios';

const url = 'https://api.covid19api.com/';

export const fetchData = async (country) => {
  try {

    if(country) {
      const changeableUrl = `${url}total/country/${country}`;
      const { data } = await axios.get(changeableUrl);
      const theData = data.pop();
      return {confirmed:theData.Confirmed, recovered:theData.Recovered, deaths: theData.Deaths, lastUpdate: theData.Date };
      
    } else {
        const { data: { Global, Date } } = await axios.get(`${url}summary`);

        return { confirmed: Global.TotalConfirmed, recovered:Global.TotalRecovered, deaths: Global.TotalDeaths, lastUpdate: Date };

    }
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data: { Countries } } = await axios.get(`${url}summary`);

    return Countries.map(({ TotalConfirmed, TotalDeaths, Date }) => ({ confirmed: TotalConfirmed, deaths: TotalDeaths, date:Date }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    
    const { data: city  } = await axios.get(`${url}countries`);
    return city;
  } catch (error) {
    return error;
  }
};