export default function home(){
    // creates the homepage and returns the div to be appended
    const insideBox = document.createElement('div');

    const title = document.createElement('div');

    const hoursBox = document.createElement('div');
    const hours = document.createElement('div');
    const firstHours = document.createElement('div');
    const secondHours = document.createElement('div');
    const thirdHours = document.createElement('div');
    const fourHours = document.createElement('div');
    const fiveHours = document.createElement('div');

    const motoBox = document.createElement('div');
    const innerMoto = document.createElement('div');
    const motoTitle = document.createElement('div');
    const motoText = document.createElement('div');

    const phoneBox = document.createElement('div');
    const phoneText = document.createElement('div');

    insideBox.setAttribute('id','insideBox');
    // Title content
    title.setAttribute('id','homeTitle');
    title.textContent = 'Welcome to The Yum!';
    // Hoursbox settings
    hoursBox.setAttribute('id','hoursBox');
    hours.setAttribute('id','hours');
    firstHours.setAttribute('id','firstHours');
    firstHours.textContent = 'Mon: 9am-8pm';
    secondHours.setAttribute('id','secondHours');
    secondHours.textContent = 'Tues: 9am-10pm';
    thirdHours.setAttribute('id','thirdHours');
    thirdHours.textContent = 'Wen: 10am-9pm';
    fourHours.setAttribute('id','fourHours');
    fourHours.textContent = 'Thur: 9pm-11pm';
    fiveHours.setAttribute('id','fiveHours');
    fiveHours.textContent = 'Fri: 11pm-8pm';
    // Motobox attributes
    motoBox.setAttribute('id','motoBox');
    innerMoto.setAttribute('id','innerMoto');
    motoTitle.setAttribute('id','motoTitle');
    motoText.setAttribute('id','motoText');
    motoTitle.textContent = 'Our Moto!';
    motoText.textContent = 'We strive our best to bring a smile to the food and the people hope yall enjoy and come see us again we preciate you!';
    // phone box attributes
    phoneBox.setAttribute('id','phoneBox');
    phoneText.setAttribute('id','phoneText');
    phoneText.textContent = 'Need something more? Call us! 444-444-4444 We would love to help!'

    // Handle the appending
    hours.appendChild(firstHours);
    hours.appendChild(secondHours);
    hours.appendChild(thirdHours);
    hours.appendChild(fourHours);
    hours.appendChild(fiveHours);
    innerMoto.appendChild(motoTitle);
    innerMoto.appendChild(motoText);

    phoneBox.appendChild(phoneText);
    motoBox.appendChild(innerMoto);
    hoursBox.appendChild(hours);

    insideBox.appendChild(title);
    insideBox.appendChild(motoBox);
    insideBox.appendChild(hoursBox);
    insideBox.appendChild(phoneBox);

    return insideBox;
}