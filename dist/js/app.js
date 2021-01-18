const quantityDOM = document.querySelectorAll('.quantity-amount');
const incrementDOM = document.querySelectorAll('.positive');
const decrementDOM = document.querySelectorAll('.negative');
const priceDOM = document.querySelectorAll('.price .orange');
let totalPriceDOM = document.querySelector('.total-price').textContent;
let formDOM = document.querySelector('form');
let btnDOM = document.querySelector('.submit-btn');

const app = () => {
    const formClick = () => {
        btnDOM.addEventListener('click', (e) => {
            if (formDOM.checkValidity()) {
                // console.log('form is not valid')
                alert('Success!');
            }
            e.preventDefault();
        });
    };

    const totalAmount = () => {
        for (let i = 0; i < incrementDOM.length; i++) {
            let amount = quantityDOM[i].textContent;
            let price = parseFloat(priceDOM[i].textContent.split('$').join(''));
            let originalPrice = price;
            let totalPrice = parseFloat(totalPriceDOM.split('$').join(''))

            incrementDOM[i].addEventListener('click', () => {
                amount++;
                price += originalPrice;
                priceDOM[i].textContent = `$${price.toFixed(2)}`;
                quantityDOM[i].textContent = amount;
            });

            decrementDOM[i].addEventListener('click', () => {
                if (amount > 0) {
                    amount--;
                    price -= originalPrice;
                    priceDOM[i].textContent = `$${price.toFixed(2)}`;
                    quantityDOM[i].textContent = amount;
                }
            });
        }
    };

    formClick();
    totalAmount();
};

app();
