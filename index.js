function getMenu() {
  fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
    .then(response => response.json())
    .then(data => {
      // Display menu items to the user
      console.log(data);
    })
    .catch(error => {
      // Handle any errors that occur during the fetch
      console.error('Error fetching menu:', error);
    });
}

function takeOrder() {
  return new Promise(resolve => {
    setTimeout(() => {
      const burgers = ['Cheeseburger', 'Veggie Burger', 'Chicken Burger'];
      const randomBurgers = [];
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * burgers.length);
        randomBurgers.push(burgers[randomIndex]);
      }
      const order = {
        burgers: randomBurgers
      };
      resolve(order);
    }, 2500);
  });
}

function orderPrep() {
  return new Promise(resolve => {
    setTimeout(() => {
      const orderStatus = true;
      const paid = false;
      resolve({ orderStatus, paid });
    }, 1500);
  });
}

function payOrder() {
  return new Promise(resolve => {
    setTimeout(() => {
      const orderStatus = true;
      const paid = true;
      resolve({ orderStatus, paid });
    }, 1000);
  });
}

function thankYouFunc() {
  alert('Thank you for eating with us today!');
}

async function runRestaurantTasks() {
  try {
    getMenu();
    const order = await takeOrder();
    console.log('Order:', order);
    const prepStatus = await orderPrep();
    console.log('Order Preparation:', prepStatus);
    const paymentStatus = await payOrder();
    console.log('Payment:', paymentStatus);
    thankYouFunc();
  } catch (error) {
    console.error('Error:', error);
  }
}

runRestaurantTasks();
