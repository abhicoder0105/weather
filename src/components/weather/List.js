import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setWeather } from "../../redux/actions/weatherActions";
import AlignItemsList from "../shared/AlignItemsList";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import BasicCard from "../shared/BasicCard";
import Loading from '../shared/Loading'


const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    marginLeft: "20px",
}));

const List = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    const [q, setQ] = useState("");
    const weather = useSelector((state) => state.allWeathers.weathers);
    console.log(weather)
    const dispatch = useDispatch();

    const fetchWeatherDetails = async () => {
        const response = await axios
            .get(`https://www.metaweather.com/api/location/search/?query=${q}`)
            .catch((err) => {
                console.log("Err", err);
            });     
        dispatch(setWeather(response.data));
        localStorage.setItem("weather", JSON.stringify(response.data));
        setIsLoading(false);
    };

    // const handleClick = (event) => {       
    //     if(typeof weather !== "undefined" && weather.length > 0){
    //       fetchWeatherDetails();
    //     }else{
    //         setError("Please Enter a City name") 
    //     }       
    // }


    return (
        <div>
            {weather.length === 0 ? (
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                        value={q}
                        onChange={(e) => {
                            setQ(e.target.value)
                        }}
                    />
                    <StyledButton
                        variant="outlined"
                        onClick={()=> fetchWeatherDetails()}>
                        Search
                    </StyledButton >
                </Search>) : (isLoading ? <Loading /> : <BasicCard data={weather} />)}
               

        </div>
    )
};

export default List;
