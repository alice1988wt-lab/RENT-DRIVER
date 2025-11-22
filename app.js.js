fetch('/cars.json')
  .then(response => response.json())
  .then(cars => {
    const carList = document.getElementById('car-list');
    cars.forEach(car => {
      const carDiv = document.createElement('div');
      carDiv.className = car ${car.available ? 'available' : 'rented'};
      carDiv.innerHTML = `
        <h3>${car.name}</h3>
        <p>Price: ${car.price}</p>
        <p>Status: ${car.available ? 'Available' : 'Rented'}</p>
      `;
      carList.appendChild(carDiv);
    });
  });