import React , {useState} from 'react'
import Link from 'next/link'
import styled, {css} from 'styled-components'
import Button from '../components/Button'
//import styles from '../styles/Home.module.css'
import { GiWaterDrop, GiSolarPower, GiHumanPyramid } from "react-icons/gi";
import { FcElectricalSensor} from "react-icons/fc";
import {FaGlobeAfrica, FaMap} from "react-icons/fa"
import Footer from '../components/Footer';

//import NavBar from '../components/NavBar'
//import Dropdown from '../components/Dropdown'
//import Hero from '../components/Hero';
//import css from 'styled-jsx/css'
//import {Animated} from "react-animated-css";
//import {Animated} from "react-animated-css";
//import {Navbar, Nav, NavDropdown, Form, FormControl, 
//} from 'react-bootstrap';
const WorksIcon1 = styled(GiWaterDrop)`
color: #282861;
font-size: 8rem;
`;
const WorksIcon2 = styled(FaGlobeAfrica)`
color: #282861;
font-size: 8rem;
`;
const WorksIcon3 = styled(FaMap)`
color: #282861;
font-size: 8rem;
`;
const WorksIcon4 = styled(FcElectricalSensor)`
color: #fff;
font-size: 8rem;
`;
const WorksIcon5 = styled(GiSolarPower)`
color: yellow;
font-size: 8rem;
border-color:#282861;
`;
const WorksIcon6 = styled(GiHumanPyramid)`
color: #000;
font-size: 8rem;
border-color:#282861;
`;


export default function Home() {
 
  return (
    <div >
   <div className='container-fluid my-5'>
          <h2 className="titre text-white text-center">SERVICES</h2>
          <div className='underline'></div>
        </div> 

        <div id="service" className="three_box">
         <div className="container">
            <div className="row">
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="Soft-box">
                     <i><WorksIcon1 /></i>
                     <h5 className=" text-uppercase my-3"> Forage d'eau</h5>
                     <span className= "my-2"> paragraphe forage d'eau </span>
                     <p className= "my-2"><Link href="/emarketing"  ><a className="btn btn-dark btn-lg" role="button" >View details »</a></Link></p>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="Soft-box">
                     <i><WorksIcon2 /></i>
                     <h5 className=" text-uppercase my-3">Etude géophysique</h5>
                     <span >paragraphe</span>
                     <p className= "my-2" ><Link href="/gestion-des-points-de-vente" ><a className="btn btn-dark btn-lg" role="button" >View details »</a></Link></p>

                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div className="Soft-box">
                     <i><WorksIcon3 /></i>
                     <h5 className=" text-uppercase my-3">Conception des plans </h5>
                     <span className="my-2">paragraphe</span>
                     
                     <p className="my-2"><Link href="/gestion-des-points-de-vente" ><a className="btn btn-dark btn-lg" role="button" >View details »</a></Link></p>
                       
                  </div>
               </div>
            </div>


         </div>
      </div>

      
      <Footer /> 
        <style jsx>{
          
          `

          
          .container-fluid {
            
  
  background: #282861;
          }
          
          .underline {
            height: 0.25rem;
            width: 5rem;
            background: #0096FF;
            margin-left: auto;
            margin-right: auto;
          }
          
          
          .three_box .Soft-box i {
            background: #fff;
            width: 120px;
            height: 120px;
            border-radius: 77px;
            border: #282861 solid 4px;
            align-items: center;
            display: flex;
            justify-content: center;
            margin: 0 auto;
            flex-wrap: wrap;
            transition: ease-in all 0.5s;
       }
       
       .three_box .Soft-box i:hover {
            background: white-smoke;
            transition: ease-in all 0.5s;
       }
       
       .three_box .Soft-box h3 {
            padding: 20px 0px 20px 0px;
            font-size: 30px;
            line-height: 1.6em;
            color: #000;
            display: block;
            font-weight: 500;
       }
       
       .three_box .Soft-box {
            text-align: center;
            background-color: transparent;
            padding: 20px 15px;
       }
       
       .three_box .Soft-box p {
            font-size: 19px;
            line-height: 1.6em;
            color: #000;
       }
          `
        }
      
      </style>
    </div>
    
      
       )
}
