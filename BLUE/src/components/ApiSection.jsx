import React, { useState, useEffect } from 'react';
import './styles/API.css';
const ApiSection = () => {
  const [latitude, setLatitude] = useState(-34.0);
  const [longitude, setLongitude] = useState(152.0);
  const [depth, setDepth] = useState(30);
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []); 
  const fetchData = async () => {
    const url = "https://ocean.amentum.io/rtofs";
    const apiKey = "lopX5xtFTnFtzVVZaPXVlw8hSaYIZ5ua";
    const params = { latitude, longitude, depth };

    try {
      const queryString = new URLSearchParams(params).toString();
      const requestUrl = `${url}?${queryString}`;
      const response = await fetch(requestUrl, {
        headers: {
          "API-Key": apiKey,
        },
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, ${text}`);
      }
      const responseData = await response.json();
      const values = extractValues(responseData);
      setResponseData(values);
      setError(null);
    } catch (error) {
      setError(`Error fetching data: ${error.message}`);
      setResponseData(null);
    }
  };

  const extractValues = (data) => {
    const translatedNames = {
      current_u: "Componente Leste da velocidade da água",
      current_v: "Componente Norte da velocidade da água",
      salinity: "Salinidade",
      temperature: "Temperatura",
    };

    const values = {};

    Object.entries(data).forEach(([key, value]) => {
      const translatedName = translatedNames[key] || key; // Use translated name, or fallback to original key
      if (
        value &&
        typeof value === "object" &&
        "value" in value &&
        "units" in value
      ) {
        const formattedValue =
          value.value !== null ? value.value.toFixed(1) : "N/A";
        values[translatedName] = `${formattedValue} ${value.units}`;
      }
    });

    return values;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchData();
  };

  return (
    <section className="API">
      <div id="API-text" className="API-fetch">
        <h1>
          Veja algumas informações sobre as águas em qualquer localização!
        </h1>
        <h2>
          Latitude: -90° até 90° || Longitude: -180° até 180° || Profundidade:
          Qualquer valor inteiro
        </h2>
        <p>
          (note que quando coordenadas caem em terra, os valores retornados
          são representados por N/A)
        </p>
        <form onSubmit={handleSubmit} id="ver-info">
          <label htmlFor="lat">Latitude:</label>
          <input
            type="number"
            id="lat"
            step="any"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
          /><br />

          <label htmlFor="long">Longitude:</label>
          <input
            type="number"
            id="long"
            step="any"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
          /><br />

          <label htmlFor="prof">Profundidade:</label>
          <input
            type="number"
            id="prof"
            step="any"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            required
          /><br />

          <button type="submit" id="pegarInfo">Ver Informações</button>
        </form>

        <pre id="responseOutput">{error ? `Error: ${error}` : responseData ? formatResponseData(responseData) : 'Esperando Informações...'}</pre>
      </div>
    </section>
  );
};

const formatResponseData = (data) => {
  let formattedData = '';
  for (const [key, value] of Object.entries(data)) {
    formattedData += `${key}: ${value}\n`;
  }
  return formattedData;
};

export default ApiSection;
