import React, { useState } from "react";
import { View, StyleSheet } from 'react-native'

import Menu from "./menu";
import Buttom from "./buttom";

export default function Calculator() {
    const [valueScreen, setValueScreen] = useState('');
    const [valueResult, setValueResult] = useState(0);
    const [submit, setSubmit] = useState(false);
    const [dot, setDot] = useState(false);
    const [labelClear, setLabelClear] = useState('AC');
    const [error, setError] = useState(false);

    useState(()=> {
        if(valueScreen === '') {
            setLabelClear('AC');
        }
    }, [valueScreen]);

    function addKey(key) {
        if (key === '/' || key === '*' || key === '-' || key === '+') {
          setDot(false);
        }
    
        if (key === '.' && dot) {
          return;
        }
    
        if (key === '.' && !dot) {
          setDot(true);
        }
    
        if ((key === '/' || key === '*' || key === '-' || key === '+') && submit) {
          setValueScreen(valueResult + key);
          setValueResult(0);
          return;
        }
        setValueScreen(valueScreen + key);
        setSubmit(false);
        setLabelClear('C');
      }
    
      function calc() {
        try {
          setValueResult(eval(valueScreen));
        } catch {
          setValueResult('Error');
          setLabelClear('AC');
          setError(true);
        }
        setSubmit(true);
      }
    
      function clear() {
        if (error) {
          reset();
          alert('ff');
          return;
        }
    
        if (valueScreen !== '') {
          const tam = valueScreen.length - 1;
          setValueScreen(valueScreen.substring(0, tam));
        } else {
          reset();
        }
      }
    
      function reset() {
        setValueScreen('');
        setValueResult(0);
        setSubmit(false);
        setDot(false);
        setLabelClear('AC');
      }

    return(
        <>
            <Menu value={valueScreen} response={valueResult}/>
            <View style={styles.buttons}>
                <Buttom 
                    label={labelClear} 
                    buttonTop 
                    onClick={() => { 
                        clear();
                    }}
                />
                 <Buttom 
                    label={"("} 
                    buttonTop 
                    onClick={() => { 
                        addKey(')');
                    }}
                />
                 <Buttom 
                    label={")"} 
                    buttonTop 
                    onClick={() => { 
                        addKey(')');
                    }}
                />
                 <Buttom 
                    label="/" 
                    buttomOperations 
                    onClick={() => { 
                        addKey('/');
                    }}
                />
                 <Buttom 
                    label={"7"} 
                    onClick={() => { 
                        addKey("7");
                    }}
                />
                 <Buttom 
                    label={"8"}  
                    onClick={() => { 
                        addKey("8");
                    }}
                />
                 <Buttom 
                    label={"9"}  
                    onClick={() => { 
                        addKey("9");
                    }}
                />
                 <Buttom 
                    label={"*"}  
                    buttomOperations
                    onClick={() => { 
                        addKey("*");
                    }}
                />
                 <Buttom 
                    label={"4"}  
                    onClick={() => { 
                        addKey("4");
                    }}
                />
                 <Buttom 
                    label={"5"}  
                    onClick={() => { 
                        addKey("5");
                    }}
                />
                 <Buttom 
                    label={"6"}  
                    onClick={() => { 
                        addKey("6");
                    }}
                />
                <Buttom 
                    label={"-"}  
                    buttomOperations
                    onClick={() => { 
                        addKey("-");
                    }}
                />
                <Buttom 
                    label={"1"}  
                    onClick={() => { 
                        addKey("1");
                    }}
                />
                <Buttom 
                    label={"2"}  
                    onClick={() => { 
                        addKey("2");
                    }}
                />
                <Buttom 
                    label={"3"}  
                    onClick={() => { 
                        addKey("3");
                    }}
                />
                 <Buttom 
                    label={"+"}  
                    buttomOperations
                    onClick={() => { 
                        addKey("+");
                    }}
                />
                 <Buttom 
                    label={"0"} 
                    buttonDouble
                    onClick={() => { 
                        addKey("0");
                    }}
                />
                 <Buttom 
                    label={"."} 
                    onClick={() => { 
                        addKey(".");
                    }}
                />
                 <Buttom 
                    label={"="} 
                    buttomOperations
                    onClick={() => { 
                        calc("=");
                    }}
                />
            </View>
        </>
    )
   
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});