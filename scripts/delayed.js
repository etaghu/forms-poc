// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './scripts.js';


// Custom code start
  
function fillFormCustomerName(){
  
  const input = document.getElementById('customerName');  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);  
  const customerName = urlParams.get('customer');  
  
   input.value = customerName; 
}
  
  
  //end custom code 

// Core Web Vitals RUM collection
sampleRUM('cwv');


// add more delayed functionality here


fillFormCustomerName();
