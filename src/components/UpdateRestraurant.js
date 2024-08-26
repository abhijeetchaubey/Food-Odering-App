import React, { useState } from 'react';

const UpdateRestaurant = () => {
  const [status, setStatus] = useState(null);
  const [response, setResponse] = useState(null);

  const updateRestaurant = async () => {
    const url = 'https://www.swiggy.com/dapi/restaurants/list/update';

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Replace with your actual access token if required
    };

    const data = {
      filters: {},
      lat: 26.8466937,
      lng: 80.94616599999999,
      nextOffset: "CJhlELQ4KICwhNDZ4qynJjCnEw==",
      page_type: "DESKTOP_WEB_LISTING",
      seoParams: {
        seoUrl: "https://www.swiggy.com/",
        pageType: "FOOD_HOMEPAGE",
        apiName: "FoodHomePage"
      },
      widgetOffset: {
        NewListingView_category_bar_chicletranking_TwoRows: "",
      },
      _csrf: "7oaRPDYTdlDv-z7O25li8vsTn4KvYAkjPgF0fjqE"
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setStatus(response.status);
      setResponse(result);

      if (response.ok) {
        console.log('Update successful!');
      } else {
        console.log('Failed to update.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setResponse(error);
    }
  };

  return (
    <div>
      <button onLoad={updateRestaurant}>Update Restaurant</button>
      {status && <p>Status: {status}</p>}
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default UpdateRestaurant;
