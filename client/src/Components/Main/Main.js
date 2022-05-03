import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Doctor from './Doctor.jpg';
import './Main.css';


const Main = () => {
    return (
        <>
            <Container style={{ marginTop: "100px", display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "center" }}>
                
                <div style={{margin: "auto"}}>
                    <p className="main__para">Medicines cure diseases, but only doctors can cure patients</p>
                    
                </div>
                <img src={Doctor} alt="doctor-img" style={{width:"100%" , height:"100%"}} />
            </Container>
        </>
    )
}

export default Main
