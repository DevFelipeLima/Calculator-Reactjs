import React from 'react'
import { useState } from 'react';
import './calculator.css'


const Calculator = () => {
    
    const[Valor, setValor]=useState(0)
    const[ValorAnt, setValorAnt]=useState(0)
    const[Operator, setOperator]=useState()


    const handleClickInput=(e)=>{
        let input = e.target.value
        if(Valor===0){
            setValor(input)
        }else{
            setValor(Valor + input)
        }
    }
    const AllClear=(e)=>{
        setValor(0)
    }
    const Percentage=(e)=>{
        setValor(Valor/100)
    }
    const ChangSign=(e)=>{
        if(Valor>0){
            setValor(-Valor)
        }else{
            setValor(Math.abs(Valor))
        }
    }
    const HandleOparation=(e)=>{
        let operatorInput = e.target.value
        setOperator(operatorInput)
        setValorAnt(Valor)
        setValor(0)
    }
    const Calculate=()=>{
        
        if(Operator==='+'){
           setValor(parseFloat(ValorAnt)+parseFloat(Valor))
        }else if(Operator==='-'){
            setValor(ValorAnt-Valor)
        }else if(Operator==='/'){
            setValor(ValorAnt/Valor)
        }else if(Operator==='X'){
            setValor(ValorAnt*Valor)
        }
    }

    
    return ( 

        <div className='wrapper'>
            
               <h1 className='Result'>{Valor}</h1>

               <li className='line'></li>

            <button className='C' onClick={AllClear}>AC</button>
            <button className='green'onClick={ChangSign}>+/-</button>
            <button className='green'onClick={Percentage}>%</button>
            <button className='green' onClick={HandleOparation} value={'/'}>/</button>
            <button onClick={handleClickInput} value={7}>7</button>
            <button onClick={handleClickInput} value={8}>8</button>
            <button onClick={handleClickInput} value={9}>9</button>
            <button className='green' onClick={HandleOparation} value={'X'}>X</button>
            <button onClick={handleClickInput} value={4}>4</button>
            <button onClick={handleClickInput} value={5}>5</button>
            <button onClick={handleClickInput} value={6}>6</button>
            <button className='green' onClick={HandleOparation} value={'-'}>-</button>
            <button onClick={handleClickInput} value={1}>1</button>
            <button onClick={handleClickInput} value={2}>2</button>
            <button onClick={handleClickInput} value={3}>3</button>
            <button className='green' onClick={HandleOparation} value={'+'}>+</button>
            
            <button className='zero'  onClick={handleClickInput} value={0}>0</button>
            <button className='green' onClick={handleClickInput} value={'.'}>,</button>
            <button className='equal'onClick={Calculate}>=</button>

            
        </div>

     );
    }
 
export default Calculator;