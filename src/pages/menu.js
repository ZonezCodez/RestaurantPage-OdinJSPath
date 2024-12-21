export default function menu(){
    // creates the homepage and returns the div to be appended
    const insideBox = document.createElement('div');
    const title = document.createElement('div');
    const hoursBox = document.createElement('div');
    const hours = document.createElement('div');
    insideBox.setAttribute('id','insideBox');
    title.setAttribute('id','homeTitle');
    title.textContent = 'Welcome to The!';
    hoursBox.setAttribute('id','hoursBox');
    hours.setAttribute('id','hours');

    // Handle the appending
    insideBox.appendChild(title);
    hoursBox.appendChild(hours);
    insideBox.appendChild(hoursBox);

    return insideBox;
}