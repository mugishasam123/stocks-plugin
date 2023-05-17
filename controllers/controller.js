import axios from "axios";

export const fetchAllStocks = async (req, res) => {
  try {
    const APIKEY = '0977828996c3641c473b928b98aa4061';


    const response = await axios.get(`https://financialmodelingprep.com/api/v3/actives?limit=100&apikey=${APIKEY}`);
    res.status(200).json(response.data);
  } catch (err) {
    if (err.response) {
      res.status(400).json(err.response.data);
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};


export const fetchStockDetails = async (req, res) => {
  try {
    const APIKEY = '0977828996c3641c473b928b98aa4061';
    const response = await axios.get(`https://financialmodelingprep.com/api/v3/income-statement/${req.body.ticker}?limit=120&apikey=${APIKEY}`);
    res.status(200).json(response.data);
  } catch (err) {
    if (err.response) {
      res.status(400).json(err.response.data);
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};


