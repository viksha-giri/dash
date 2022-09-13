import React from 'react'
import "./dashboard.css";
import logo from "../assets/images/Logo2.png"
import dashboard from "../assets/images/li_layout-grid.png"
import usercheck from "../assets/images/user-check.png"
import li_users from "../assets/images/li_users.png"
import li_userss from "../assets/images/li_users.png"
import currency_cent from "../assets/images/currency-cent (1).png"
import notes from "../assets/images/8-note.png"
import file_text from "../assets/images/file-text.png"
import file_expenses from "../assets/images/file-text.png"
import logout from "../assets/images/logout.png"
import { Chart } from "chart.js";
import * as Chartjs from "chart.js";
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';

export const options1 = {
    maintainaspectratio: false,
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
            display: true,
            margin: 25,
        },
    },
    scales: {
        y: {
            grid: {
                color: 'grey'
            }
        },
    },

};

export const options2 = {
    maintainaspectratio: false,
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
            display: true,
        },
    },

};

const controllers = Object.values(Chartjs).filter(
    (chart) => chart.id !== undefined
);
Chart.register(...controllers);
// import { Line } from 'react-chartjs-2';

const Dashboard = () => {

    ChartJS.register(
        Title, Tooltip, LineElement, Legend,
        CategoryScale, LinearScale, PointElement, Filler
    )

    const labels = ['January', 'February', 'March', 'April', 'May'];

    const data = {

        labels,
        datasets: [
            {
                label: 'Website Visitor',
                data: [9, 40, 80, 120, 160,],
                barPercentage: 0.7,
                categoryPercentage: 0.2,


                borderRadius: 100,
                backgroundColor: '#85F4FA',

            },
            {
                label: 'Mobile Visitor',
                data: [25, 30, 100, 70, 140,],

                barPercentage: 0.7,
                categoryPercentage: 0.2,

                borderRadius: 100,
                backgroundColor: '#FF49A0',
                margin: 25,
            },
        ],
    };

    const data1 = {
        labels: ['Manual Wallet', "Excahnge Wallet"],

        datasets: [
            {
                label: "hello",
                data: [4, 10],
                radius: "100%",
                backgroundColor: [
                    "pink", "yellow"
                ],

                borderWidth: 0,
            },


        ],
    };

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-3 col-4'>
                        <div className="brand-logo">
                            <img src={logo} className="img-fluid" alt='logo' />
                        </div>
                        <ul className='sidebar'>
                            <li><img src={dashboard} className='img-fluid me-3' alt='li' /> <span>Dashboard</span></li>
                            <li><img src={usercheck} className='img-fluid me-3' alt='li' /> <span>Users</span> </li>
                            <li><img src={li_users} className='img-fluid me-3' alt='li' /> <span>Customers</span> </li>
                            <li><img src={li_userss} className='img-fluid me-3' alt='li' /> <span>Buysell</span> </li>
                            <li><img src={currency_cent} className='img-fluid me-3' alt='li' /> <span> Accounts </span> </li>
                            <li><img src={notes} className='img-fluid me-3' alt='li' /> <span>Funds</span> </li>
                            <li><img src={file_text} className='img-fluid me-3' alt='li' /> <span>Lending</span> </li>
                            <li><img src={file_expenses} className='img-fluid me-3' alt='li' /> <span>Expenses</span> </li>
                        </ul>
                        <button className='logout-btn text-start'><img src={logout} className='img-fluid me-3' alt='li' /> <span>Log Out</span></button>
                    </div>
                    <div className='col-xl-9 col-8'>
                        <nav className="navbar navbar-expand-sm navbar-dark bg-dark bg-transparent p-0 mb-5">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse align-items-center" id="mynavbar">
                                    <ul className="navbar-nav me-auto">
                                        <li className="nav-item">
                                            <a className="nav-link toolbar-heading" href="javascript:void(0)">Dashboard</a>
                                        </li>
                                    </ul>
                                    <div className="d-flex align-items-center">
                                        <a className='me-5'><i className="bi bi-bell text-white fs-4"></i></a>
                                        <a className='d-flex align-items-center'>
                                            <div className='profile-img me-3'></div>
                                            <div className='text-white fs-18'>Alex Senthil</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className='statics'>
                            <span className='fs-18 text-white mb-2'>Statics</span>
                            <div className='row justify-content-between'>
                                <div className='col-xl-3 col-6 my-2'>
                                    <div className='d-flex statics-cards'>
                                        <div className='profile-img me-3 d-flex align-items-center justify-content-center bg-pink'><img src={currency_cent} className='img-fluid' alt='currency' /></div>
                                        <div className='text-white'>
                                            <span className='fs-24 fw-bold'>1200</span>
                                            <p className='fs-18 text-white mb-0 fw-normal'>Total Funds</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-6 my-2'>
                                    <div className='d-flex statics-cards'>
                                        <div className='profile-img me-3 bg-blue d-flex align-items-center justify-content-center'><img src={li_users} className='img-fluid' alt='li' /></div>
                                        <div className='text-white'>
                                            <span className='fs-24 fw-bold'>550</span>
                                            <p className='fs-18 text-white mb-0 fw-normal'>Total Customers</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-6 my-2'>
                                    <div className='d-flex statics-cards'>
                                        <div className='profile-img me-3 bg-green d-flex align-items-center justify-content-center'><img src={usercheck} className='img-fluid' alt='li' /></div>
                                        <div className='text-white'>
                                            <span className='fs-24 fw-bold'>120</span>
                                            <p className='fs-18 text-white mb-0 fw-normal'>Users</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-6 my-2'>
                                    <div className='d-flex statics-cards'>
                                    <div className='profile-img me-3 bg-yellow d-flex align-items-center justify-content-center'><img src={usercheck} className='img-fluid' alt='li' /></div>
                                        <div className='text-white '>
                                            <span className='fs-24 fw-bold'>40</span>
                                            <p className='fs-18 text-white mb-0 fw-normal'>Accounts</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row mt-5'>
                            <div className='col-xl-6'>
                                <div className='bar-chart'>
                                    <Bar options={options1} data={data} width={"4rem"} height={"4rem"} />
                                </div>
                            </div>
                            <div className='col-xl-6'>
                                <div className='donut-chart'>
                                    <Doughnut options={options2} data={data1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard
