import React from 'react';

import { Cards, CountryPicker, Chart } from './Components';
import { fetchData } from './api/';
import styles from './App.module.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }


  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  
    
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Header/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Footer/>
      </div>
    );
  }
}

export default App;