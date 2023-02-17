import React from "react";

function useLocalStorage(itemName,initialValue) {
    const [errorState,setError]=React.useState(false);
    const [loading,setLoading]=React.useState(true);
    const [item,setItem]=React.useState(initialValue);
    
    React.useEffect(()=>{
      setTimeout(()=>{
        try {
        //   throw'Error de prueba'
          const localStorageitem=localStorage.getItem(itemName);
          let parsedItem;
          
          if (!localStorageitem) {
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItem=initialValue;
          }else{
            parsedItem=JSON.parse(localStorageitem)
          }
          setItem(parsedItem);
          setLoading(false);
          
        } catch (error) {
          setError(error);
        }
      },1000);
    },[]);
    
    const saveItem =(newItem)=>{
      try {
        const stringifiedItem=JSON.stringify(newItem);
        localStorage.setItem(itemName,stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    }
    return{item,saveItem,loading,errorState};
}

export{useLocalStorage}