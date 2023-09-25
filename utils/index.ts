import axios from 'axios';

export async function fetchCars() {
  const headers={
      'X-RapidAPI-Key': '43e4097129msh7e165f48a2f595bp1476f9jsn484b839edf0c',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
   const response = await fetch( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
   headers:headers
   })
   const result= await response.json();

  return result;
}