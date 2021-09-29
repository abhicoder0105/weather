import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { selecedtWeather } from '../../redux/actions/weatherActions'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading'

export default function AlignItemsList() {

  const [isLoading, setIsLoading] = useState(true);

  const data = useSelector((state) => state.weather)
  const { woeid } = useParams();
  console.log(data);
  const dispatch = useDispatch();

  const fetchWeatherDetails = async () => {
    const response = await axios.get(`https://www.metaweather.com/api/location/${woeid}`).catch((err) => {
      console.log("Err", err);
    })
    console.log(response);
    dispatch(selecedtWeather(response.data));
    console.log(response.data)
    setIsLoading(false)
  }
  useEffect(() =>fetchWeatherDetails(), [woeid]);  


  return (
    <div>{isLoading ? <Loading/> : data.consolidated_weather.map(item =>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} key={item.id}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={`https://www.metaweather.com/api/location/static/img/weather/${item.weather_state_abbr}.svg`} />
          </ListItemAvatar>
          <ListItemText
            primary={data.title}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  max temp: {item.max_temp}
                </Typography>
                min temp: {item.min_temp}
                date: {item.applicable_date}
              </React.Fragment>
            }
          />
        </ListItem>
  
      </List>
    )
    }</div>
  )
}
