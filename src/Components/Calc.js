import React,{useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Calc = ()=>{
    const [Age, setAge] = useState(0);
    const d = new Date();
    const date = new Date(d.toISOString().slice(0,10));
    const update = () => {
        const input = new Date(document.getElementById('date').value);
        var year = date.getFullYear()-input.getFullYear();
        var month = date.getMonth()-input.getDate();
        var day = date.getDate()-input.getDate();
        const age = () => {
            console.log(year+";"+month+";"+day);
            if(month<0){
                return year;
            }
            else{
                return year-1;
            }
        }
        setAge(age);
    }
    return(
        <div className='d-flex flex-column align-items-center m-5 mx-auto pt-5 col-12'>
            <div className='card shadow d-flex flex-column align-items-center gap-3 p-5 mt-5 col-8 col-sm-8 col-md-4 mx-auto border-0 rounded-2' style={{backgroundColor:'#E2E3E5'}}>
                <h2 className='fw-bold'>Age Calculator</h2>
                <div className='d-flex flex-column justify-content-center gap-3'>
                    <h5 className='fw-light fs-5'>Enter your date of birth</h5>
                    <input type='date' className='form-control date mt-0' id='date'/>
                    <button className='btn btn-primary form-control' onClick={update}>Calculate age</button>
                    <h4>You are {Age} years old</h4>
                </div>
            </div>
        </div>
    )
}

export default Calc 