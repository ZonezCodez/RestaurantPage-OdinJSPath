export default function contact(){
    // creates the homepage and returns the div to be appended
    const insideBox = document.createElement('div');
    const formBox = document.createElement('form');
    const formTitle = document.createElement('div');
    const nameDesc = document.createElement('label');
    const nameInput = document.createElement('input');
    const emailDesc = document.createElement('label');
    const emailInput = document.createElement('input');
    const messageDesc = document.createElement('label');
    const messageInput = document.createElement('textarea');
    const submitBtn = document.createElement('input');

    // Handling setting attributes
    insideBox.setAttribute('id','insideBx');
    formBox.setAttribute('id','formBox');
    formBox.action = 'submit';
    formTitle.setAttribute('id','formTitle');
    formTitle.textContent = 'Contact Us!';
    nameDesc.setAttribute('id','nameDesc');
    nameDesc.setAttribute('for','nameInput');
    nameDesc.textContent = 'Your Name: ';
    nameInput.setAttribute('id','nameInput');
    nameInput.setAttribute('name','nameInput');
    nameInput.type = 'text';
    emailDesc.setAttribute('id','emailDesc');
    emailDesc.setAttribute('for','emailInput');
    emailDesc.textContent = 'Your Email: ';
    emailInput.setAttribute('id','emailInput');
    emailInput.setAttribute('name','emailInput');
    emailInput.type = 'email';
    messageDesc.setAttribute('id','messageDesc');
    messageDesc.setAttribute('for','messageInput');
    messageDesc.textContent = 'Message: ';
    messageInput.setAttribute('id','messageInput');
    messageInput.setAttribute('name','messageInput');
    messageInput.rows = '5';
    messageInput.cols = '10';
    submitBtn.setAttribute('id','submitBtn');
    submitBtn.value = 'Send Message';
    submitBtn.type = 'submit';
    formBox.addEventListener('submit',(e)=>{
        e.preventDefault();
    });
    // Handle the appending
    nameDesc.appendChild(nameInput);
    emailDesc.appendChild(emailInput);
    formBox.appendChild(formTitle);
    formBox.appendChild(nameDesc);   
    formBox.appendChild(emailDesc);
    formBox.appendChild(messageDesc);
    formBox.appendChild(messageInput);
    formBox.appendChild(submitBtn);
    insideBox.appendChild(formBox); 

    return insideBox;
}
