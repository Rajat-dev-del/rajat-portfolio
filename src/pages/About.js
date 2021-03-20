import React , {useEffect , useState } from 'react'
import Header from "../include/Header";
import Footer from "../include/Footer";
import { FaTrash , FaEdit , } from "react-icons/fa";
import {Card,Button, Modal} from "react-bootstrap";

export default function About() {
   

    return (
        <div className="wrapper">
            <Header/>
                <main>
                    <div className="container">
                       <h1 className="text-center display-1">Contact us</h1>
                    </div>
                </main>
            <Footer/>
        </div>
    )
}
