import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard';
import EggIcon from '@mui/icons-material/Egg';
import CakeIcon from '@mui/icons-material/Cake';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import IcecreamIcon from '@mui/icons-material/Icecream';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import SetMealIcon from '@mui/icons-material/SetMeal';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CSVLink } from "react-csv";

function App() {
  const count = useSelector((state) => state.count)
  const logs = useSelector((state) => state.logs)
  const logHeaders = [
    { label: "Date & Time", key: "dateTime" },
    { label: "Category", key: "category" },
    { label: "Item", key: "name" },
    { label: "Request", key: "request" },
    { label: "Response", key: "response" },
    { label: "Status Code", key: "statusCode" }
  ];
  return (
    <div className="App">
      <div className='header'>
        <h2>E-commerce</h2>
        <div className='header_buttons'>
          <button className='header_button' style={{ borderRadius: "16px", backgroundColor: "white" }}
            onClick={() => { console.log("logs", logs) }}>
            <CSVLink data={logs} headers={logHeaders} style={{textDecoration:"none",color:"black"}}>
              <FileCopyIcon />
              Share logs
            </CSVLink>
          </button>
          <button className='header_button' style={{ borderRadius: "16px", backgroundColor: "white", padding: "5px" }}><ShoppingCartIcon />{count}</button>
        </div>
      </div>
      <div class="container-fluid overflow-hidden">
        <div class="row vh-100 overflow-auto">
          <div class="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-white sidebar overflow-scroll d-flex sticky-top">
            <div class="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">

              <ul class="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
                <li class="nav-item">
                  <a href="#produce" class="nav-link px-sm-0 px-2">
                    <span class="ms-1 .d-block d-sm-none d-flex flex-column small fw-bold align-items-center " style={{ color: '#737D94', fontWeight: "700" }} >
                      <RestaurantIcon color="action" />Produce</span>
                    <span class="ms-1 d-none d-sm-inline menuCategories" style={{ color: '#737D94', fontWeight: "700" }}>Produce</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#prepared" class="nav-link px-sm-0 px-2">
                    <span class="ms-1 .d-block d-sm-none d-flex flex-column small fw-bold align-items-center" style={{ color: '#737D94', fontWeight: "700" }}><LunchDiningIcon color="action" />Prepared</span>
                    <span class="ms-1 d-none d-sm-inline menuCategories" style={{ color: '#737D94', fontWeight: "700" }}>Prepared foods</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#canned" class="nav-link px-sm-0 px-2">
                    <span class="ms-1 .d-block d-sm-none d-flex flex-column small fw-bold align-items-center" style={{ color: '#737D94', fontWeight: "700" }}><SoupKitchenIcon color="action" />Soups</span>
                    <span class="ms-1 d-none d-sm-inline menuCategories" style={{ color: '#737D94', fontWeight: "700" }}>Canned foods & soups</span>
                  </a>
                </li>
                <li>
                  <a href="#bakery" class="nav-link px-sm-0 px-2">
                    <span class="ms-1 .d-block d-sm-none d-flex flex-column small fw-bold align-items-center" style={{ color: '#737D94', fontWeight: "700" }}><CakeIcon color="action" />Bakery</span>
                    <span class="ms-1 d-none d-sm-inline menuCategories" style={{ color: '#737D94', fontWeight: "700" }}>Bakery</span></a>
                </li>
                <li>
                  <a href="#diary" class="nav-link px-sm-0 px-2">
                    <span class="ms-1 .d-block d-sm-none d-flex flex-column small fw-bold align-items-center" style={{ color: '#737D94', fontWeight: "700" }}><EggIcon color="action" />Eggs</span>
                    <span class="ms-1 d-none d-sm-inline menuCategories" style={{ color: '#737D94', fontWeight: "700" }}>Diary & Eggs</span> </a>
                </li>
                <li>
                  <a href="#frozen" class="nav-link px-sm-0 px-2">
                    <span class="ms-1 .d-block d-sm-none d-flex flex-column small fw-bold align-items-center" style={{ color: '#737D94', fontWeight: "700" }}><IcecreamIcon color="action" />Frozen</span>
                    <span class="ms-1 d-none d-sm-inline menuCategories" style={{ color: '#737D94', fontWeight: "700" }}>Frozen</span></a>
                </li>
                <li>
                  <a href="#Meet" class="nav-link px-sm-0 px-2">
                    <span class="ms-1 .d-block d-sm-none d-flex flex-column small fw-bold align-items-center" style={{ color: '#737D94', fontWeight: "700" }}><SetMealIcon color="action" />Seafood</span>
                    <span class="ms-1 d-none d-sm-inline menuCategories" style={{ color: '#737D94', fontWeight: "700" }}>Meet & Seafood</span> </a>
                </li>
                <li class="nav-item">
                  <a href="#produce" class="nav-link px-sm-0 px-2">
                    <span class="ms-1 .d-block d-sm-none d-flex flex-column small fw-bold align-items-center " style={{ color: '#737D94', fontWeight: "700" }} >
                      <RestaurantIcon color="action" />Produce</span>
                    <span class="ms-1 d-none d-sm-inline menuCategories" style={{ color: '#737D94', fontWeight: "700" }}>Produce</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#prepared" class="nav-link px-sm-0 px-2">
                    <span class="ms-1 .d-block d-sm-none d-flex flex-column small fw-bold align-items-center" style={{ color: '#737D94', fontWeight: "700" }}><LunchDiningIcon color="action" />Prepared</span>
                    <span class="ms-1 d-none d-sm-inline menuCategories" style={{ color: '#737D94', fontWeight: "700" }}>Prepared foods</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#canned" class="nav-link px-sm-0 px-2">
                    <span class="ms-1 .d-block d-sm-none d-flex flex-column small fw-bold align-items-center" style={{ color: '#737D94', fontWeight: "700" }}><SoupKitchenIcon color="action" />Soups</span>
                    <span class="ms-1 d-none d-sm-inline menuCategories" style={{ color: '#737D94', fontWeight: "700" }}>Canned foods & soups</span>
                  </a>
                </li>
                <li>
                  <a href="#bakery" class="nav-link px-sm-0 px-2">
                    <span class="ms-1 .d-block d-sm-none d-flex flex-column small fw-bold align-items-center" style={{ color: '#737D94', fontWeight: "700" }}><CakeIcon color="action" />Bakery</span>
                    <span class="ms-1 d-none d-sm-inline menuCategories" style={{ color: '#737D94', fontWeight: "700" }}>Bakery</span></a>
                </li>
                <li>
                  <a href="#diary" class="nav-link px-sm-0 px-2">
                    <span class="ms-1 .d-block d-sm-none d-flex flex-column small fw-bold align-items-center" style={{ color: '#737D94', fontWeight: "700" }}><EggIcon color="action" />Eggs</span>
                    <span class="ms-1 d-none d-sm-inline menuCategories" style={{ color: '#737D94', fontWeight: "700" }}>Diary & Eggs</span> </a>
                </li>
                <li>
                  <a href="#frozen" class="nav-link px-sm-0 px-2">
                    <span class="ms-1 .d-block d-sm-none d-flex flex-column small fw-bold align-items-center" style={{ color: '#737D94', fontWeight: "700" }}><IcecreamIcon color="action" />Frozen</span>
                    <span class="ms-1 d-none d-sm-inline menuCategories" style={{ color: '#737D94', fontWeight: "700" }}>Frozen</span></a>
                </li>
                <li>
                  <a href="#Meet" class="nav-link px-sm-0 px-2">
                    <span class="ms-1 .d-block d-sm-none d-flex flex-column small fw-bold align-items-center" style={{ color: '#737D94', fontWeight: "700" }}><SetMealIcon color="action" />Seafood</span>
                    <span class="ms-1 d-none d-sm-inline menuCategories" style={{ color: '#737D94', fontWeight: "700" }}>Meet & Seafood</span> </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col d-flex flex-column h-sm-100 overflow-hidden">
            <Dashboard></Dashboard>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
