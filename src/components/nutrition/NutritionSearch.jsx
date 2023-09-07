import React, { useState } from 'react';
import NutritionDisplay from './NutritionDisplay';
import './nutrition.css';
import axios from 'axios';

export default function NutritionSearch() {
  const [responseData, setResponseData] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    let food = event.target.food.value;

    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=3ddacc70&app_key=0517be6aba3a311e9833d08d58ab4938`
    );

    let responseData = response.data;
    console.log(responseData);
    setResponseData(responseData);
  }

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <h1 className="text-center" style={{ marginTop: '100px', marginBottom: '50px' }}>
            Nutrition
          </h1>
          <div style={{ width: '75%', margin: '0 auto' }}>
            <h3 style={{ fontSize: '18px' }}>
                Fun Fact: To me, there is nothing more vital than understanding how the food we consume can profoundly impact our lives. I firmly believe that nourishing our bodies with whole foods, rich in nutrients and devoid of artificial additives, is the key to unlocking our full potential and living a vibrant, fulfilling life. This passion drives me to constantly seek out knowledge about nutrition, advocate for mindful eating, and inspire others to make informed, health-conscious choices in their dietary habits. If you are curious as well, please enter your ingredients below and find different recipes you can use yourself!
            </h3>
        </div>

          <div className="searchbar">
            <div className="form-floating">
              <input
                type="text"
                name="food"
                className="form-control"
                placeholder="Enter your ingredients..."
              />
              <div className="text-center">
                <button className="btn btn-sm btn-dark" id="submit" type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <NutritionDisplay responseData={responseData} />
      <div id="spacer"></div>
    </>
  );
}
