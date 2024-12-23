import burgerOne from '../images/Burger.jpg';
import burgerTwo from '../images/Flameburger.jpg';
import burgerThree from '../images/Breakfast.jpg';

export default function menu(){
    // creates the homepage and returns the div to be appended
    const insideBox = document.createElement('div');
    const title = document.createElement('div');
    const menuBox = document.createElement('div');
    const notice = document.createElement('div');
    const imageOne = document.createElement('img');
    const menuOne = document.createElement('div');
    const descriptionOne = document.createElement('id','descriptionOne');
    const imageTwo = document.createElement('img');
    const menuTwo = document.createElement('div');
    const descriptionTwo = document.createElement('div');
    const imageThree = document.createElement('img');
    const menuThree = document.createElement('div');
    const descriptionThree = document.createElement('div');

    // Handling setting attributes
    insideBox.setAttribute('id','insideBox');
    title.setAttribute('id','menuTitle');
    title.textContent = 'Menu Options';
    menuBox.setAttribute('id','menuBox');
    notice.setAttribute('id','notice');
    notice.textContent = '!!All Meals Are Served With Fries!!';
    imageOne.src = burgerOne;
    imageOne.setAttribute('id','imgOne');
    imageOne.classList.add('images');
    menuOne.setAttribute('id','menuOne');
    menuOne.textContent = 'The Yummy with Fries!'
    descriptionOne.setAttribute('id','descriptionOne');
    descriptionOne.textContent = 'This burger is quite yummy to the tummy with its massive patty! Get it today for just $15.99';
    imageTwo.src = burgerTwo;
    imageTwo.setAttribute('id','imageTwo');
    imageTwo.classList.add('images');
    menuTwo.setAttribute('id','menuTwo');
    menuTwo.textContent = 'The Mighty FlameBurger!';
    descriptionTwo.setAttribute('id','descriptionTwo');
    descriptionTwo.textContent = 'This burger will burn you inside and out! Through the burn you will savor some amazing Burger flavors! WARNING: VERY HOT! Get it today for just $17.99!';
    imageThree.src = burgerThree;
    imageThree.setAttribute('id','imageThree');
    imageThree.classList.add('images');
    menuThree.setAttribute('id','menuThree');
    menuThree.textContent = 'The Breakfast Yum Burger!'
    descriptionThree.setAttribute('id','descriptionThree');
    descriptionThree.textContent = 'This burger is the breakfast lovers dream a burger with eggs and bacon and more! get it for the low price of $11.99!';
    
    // Handle the appending
    menuBox.appendChild(notice);
    menuBox.appendChild(imageOne);
    menuBox.appendChild(menuOne);
    menuBox.appendChild(descriptionOne);
    menuBox.appendChild(imageTwo);
    menuBox.appendChild(menuTwo);
    menuBox.appendChild(descriptionTwo);
    menuBox.appendChild(imageThree);
    menuBox.appendChild(menuThree);
    menuBox.appendChild(descriptionThree);
    insideBox.appendChild(title);
    insideBox.appendChild(menuBox);
    
    return insideBox;
}