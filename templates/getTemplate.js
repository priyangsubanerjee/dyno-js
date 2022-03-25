function getTemplate(dyno, theme) {
  const lightTemplate = `
    
    var modalOpen = false;
    
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;500&family=Open+Sans:wght@300;400;500;600;700;800&display=swap');";
    document.body.appendChild(style);

    var div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.bottom = '50px';
    div.style.right = '0px';
    div.style.display = 'flex';
    div.style.zIndex = '9999';
    div.style.transition = 'all 0.5s ease-in-out';


    var modalContainer = document.createElement('div');
    modalContainer.style.position = 'relative';
    modalContainer.style.backgroundColor = '#fff';

    var flag = document.createElement('img');
    flag.src = '${dyno.icon}';
    flag.style.height = '50px';
    flag.style.maxWidth = '60px';
    flag.style.cursor = 'pointer';
    flag.style.borderRadius = '4px 0 0 4px';
    flag.style.transition = 'all 0.3s ease-in-out';
    flag.title = '${dyno.heading}';

    flag.addEventListener('mouseover', function() {
        flag.style.transform = 'scale(1.05)';
    })

    flag.addEventListener('mouseout', function() {
        flag.style.transform = 'scale(1)';
    })


    var modal = document.createElement('div');
    modal.style.position = 'absolute';
    modal.style.bottom = '0px';
    modal.style.right = '-600px';
    modal.style.minHeight = '350px';
    modal.style.maxHeight = '450px';
    modal.style.height = 'auto';
    modal.style.width = '300px';
    modal.style.backgroundColor = 'white';
    modal.style.fontFamily = '"Open Sans", sans-serif';
    modal.style.borderRadius = '7px';
    modal.style.overflow = 'auto';
    modal.style.transition = 'all 0.5s ease-in-out';
    modal.style.boxShadow = '0 0 20px 10px rgba(0, 0, 0, 0.1)';


    var companyName = document.createElement('div');
    companyName.style.display = 'flex';
    companyName.style.alignItems = 'center';
    companyName.style.padding = '10px';
    companyName.style.backgroundColor = 'rgba(0, 0, 0, 0)';

    var closeIcon = document.createElement('img');
    closeIcon.src = 'https://media.graphcms.com/2tf1LZD3SYigpOpeBEMX'
    closeIcon.style.width = '10px';
    closeIcon.style.height = '10px';
    closeIcon.style.cursor = 'pointer';


    var companyNameText = document.createElement('p');
    companyNameText.style.margin = '0';
    companyNameText.style.marginLeft = 'auto';
    companyNameText.style.fontSize = '11px';
    companyNameText.style.textAlign = 'center';
    companyNameText.style.textDecoration = 'none';
    companyNameText.style.fontFamily = 'inherit';
    companyNameText.style.color = 'rgba(0, 0, 0, 0.5)';
    companyNameText.innerHTML = '<a style="text-decoration:none; color:inherit" href="https://github.com/priyangsubanerjee/dyno">powered by <img src="https://media.graphcms.com/hx3S4MSQuyhd7GWDNq9a" style="height:15px; width:15px; margin:0px 2px 0px 4px; display:inline-block;"/> Dyno Js</a>';

    companyName.appendChild(closeIcon);
    companyName.appendChild(companyNameText);
    modal.appendChild(companyName);

    var modalContent = document.createElement('div');
    modalContent.style.width = '100%';
    modalContent.style.display = 'flex';
    modalContent.style.flexDirection = 'column';
    
    var modalImage = document.createElement('img');
    modalImage.src = '${dyno.coverImage}';
    modalImage.style.height = '150px';
    modalImage.style.objectFit = 'cover';
    modalContent.appendChild(modalImage);

    var modalText = document.createElement('h3');
    modalText.style.margin = '0';
    modalText.style.textDecoration = 'none';
    modalText.style.fontFamily = 'inherit';
    modalText.style.fontSize = '18px';
    modalText.style.padding = '10px 15px';
    modalText.style.fontWeight = '600';
    modalText.style.color = '#000';
    modalText.innerHTML = '${dyno.heading}';


    var paragraph = document.createElement('p');
    paragraph.style.margin = '0';
    paragraph.style.textDecoration = 'none';
    paragraph.style.fontFamily = 'inherit';
    paragraph.style.fontSize = '12px';
    paragraph.style.padding = '0px 15px';
    paragraph.style.lineHeight = '1.5';
    paragraph.style.color = 'rgba(0, 0, 0, 0.5)';
    paragraph.innerHTML = '${dyno.description}';


    var donateButton = document.createElement('a');
    donateButton.style.display = 'flex';
    donateButton.style.alignItems = 'center';
    donateButton.style.justifyContent = 'center';
    donateButton.style.width = 'auto';
    donateButton.style.height = '40px';
    donateButton.style.margin = '15px';
    donateButton.style.backgroundColor = 'rgb(34, 197, 94)';
    donateButton.style.borderRadius = '4px';
    donateButton.style.color = 'white';
    donateButton.style.fontFamily = 'inherit';
    donateButton.style.fontSize = '15px';
    donateButton.style.fontWeight = '500';
    donateButton.style.textDecoration = 'none';
    donateButton.style.textAlign = 'center';
    donateButton.style.lineHeight = '1.6';
    donateButton.style.cursor = 'pointer';
    donateButton.innerHTML = '${dyno.buttonText}';
    donateButton.href = '${dyno.buttonLink}';
    donateButton.target = '_blank';
    donateButton.rel = 'noopener noreferrer';
    donateButton.style.transition = 'all 0.5s ease-in-out';


    donateButton.onmouseover = function() {
        donateButton.style.backgroundColor = 'rgb(22, 163, 74)';
    }

    donateButton.onmouseout = function() {
        donateButton.style.backgroundColor = 'rgb(34, 197, 94)';
    }


    companyNameText.onmouseover = function() {
        companyNameText.style.color = 'black';
    }

    companyNameText.onmouseout = function() {
        companyNameText.style.color = 'rgba(0, 0, 0, 0.5)';
    }


    modalContent.appendChild(modalText);
    modalContent.appendChild(paragraph);
    modalContent.appendChild(donateButton);

    modal.appendChild(modalContent);

    modalContainer.appendChild(modal);
    div.appendChild(modalContainer);
    div.appendChild(flag);

    document.body.appendChild(div);


    flag.addEventListener('click', function() {

        if(modalOpen) {
            modal.style.right = '-600px';
            div.style.right = '0px';
            modalOpen = false;
        }else{
            modal.style.right = '70px';
            div.style.right = '-100px';
            modalOpen = true;
        }
    })

    closeIcon.addEventListener('click', function() {
        modal.style.right = '-600px';   
        div.style.right = '0px';
        modalOpen = false;
    })

    document.addEventListener('keydown', function(e) {
        if(e.keyCode == 27) {
            modal.style.right = '-600px';
            div.style.right = '0px';
            modalOpen = false;
        }
    })
    
    `;

  const darkTemplate = `
    
    var modalOpen = false;
    
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;500&family=Open+Sans:wght@300;400;500;600;700;800&display=swap');";
    document.body.appendChild(style);

    var div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.bottom = '50px';
    div.style.right = '0px';
    div.style.display = 'flex';
    div.style.zIndex = '9999';
    div.style.transition = 'all 0.5s ease-in-out';


    var modalContainer = document.createElement('div');
    modalContainer.style.position = 'relative';
    modalContainer.style.backgroundColor = '#fff';

    var flag = document.createElement('img');
    flag.src = '${dyno.icon}';
    flag.style.height = '50px';
    flag.style.maxWidth = '60px';
    flag.style.cursor = 'pointer';
    flag.style.borderRadius = '4px 0 0 4px';
    flag.style.transition = 'all 0.3s ease-in-out';
    flag.title = '${dyno.heading}';

    flag.addEventListener('mouseover', function() {
        flag.style.transform = 'scale(1.05)';
    })

    flag.addEventListener('mouseout', function() {
        flag.style.transform = 'scale(1)';
    })


    var modal = document.createElement('div');
    modal.style.position = 'absolute';
    modal.style.bottom = '0px';
    modal.style.right = '-600px';
    modal.style.minHeight = '350px';
    modal.style.maxHeight = '450px';
    modal.style.height = 'auto';
    modal.style.width = '300px';
    modal.style.backgroundColor = '#1f1f1f';
    modal.style.fontFamily = '"Open Sans", sans-serif';
    modal.style.borderRadius = '7px';
    modal.style.overflow = 'auto';
    modal.style.transition = 'all 0.5s ease-in-out';
    modal.style.boxShadow = '0 0 20px 10px rgba(0, 0, 0, 0.1)';


    var companyName = document.createElement('div');
    companyName.style.display = 'flex';
        companyName.style.alignItems = 'center';
    companyName.style.padding = '10px';
    companyName.style.backgroundColor = '#1b1b1b';

    var closeIcon = document.createElement('img');
    closeIcon.src = 'https://media.graphcms.com/JKvHuLeoTF6iLVT5F7Th';
    closeIcon.style.width = '10px';
    closeIcon.style.height = '10px';
    closeIcon.style.cursor = 'pointer';


    var companyNameText = document.createElement('p');
    companyNameText.style.margin = '0';
    companyNameText.style.width = 'auto';
    companyNameText.style.marginLeft = 'auto';
    companyNameText.style.fontSize = '11px';
    companyNameText.style.textAlign = 'center';
    companyNameText.style.textDecoration = 'none';
    companyNameText.style.fontFamily = 'inherit';
    companyNameText.style.color = 'rgba(255, 255, 255, 0.5)';
    companyNameText.innerHTML = '<a style="text-decoration:none; color:inherit" href="https://github.com/priyangsubanerjee/dyno">powered by <img src="https://media.graphcms.com/hx3S4MSQuyhd7GWDNq9a" style="height:15px; width:15px; margin:0px 2px 0px 4px; display:inline-block;"/> Dyno Js</a>';

    companyName.appendChild(closeIcon);
    companyName.appendChild(companyNameText);
    modal.appendChild(companyName);

    var modalContent = document.createElement('div');
    modalContent.style.width = '100%';
    modalContent.style.display = 'flex';
    modalContent.style.flexDirection = 'column';
    
    var modalImage = document.createElement('img');
    modalImage.src = '${dyno.coverImage}';
    modalImage.style.height = '150px';
    modalImage.style.objectFit = 'cover';
    modalContent.appendChild(modalImage);

    var dynoHeading = document.createElement('h3');
    dynoHeading.style.margin = '0';
    dynoHeading.style.textDecoration = 'none';
    dynoHeading.style.fontFamily = 'inherit';
    dynoHeading.style.fontSize = '18px';
    dynoHeading.style.padding = '10px 15px';
    dynoHeading.style.fontWeight = '600';
    dynoHeading.style.color = '#fff';
    dynoHeading.innerHTML = '${dyno.heading}';


    var paragraph = document.createElement('p');
    paragraph.style.margin = '0';
    paragraph.style.textDecoration = 'none';
    paragraph.style.fontFamily = 'inherit';
    paragraph.style.fontSize = '12px';
    paragraph.style.padding = '0px 15px';
    paragraph.style.lineHeight = '1.5';
    paragraph.style.color = 'rgba(255, 255, 255, 0.5)';
    paragraph.innerHTML = '${dyno.description}';


    var donateButton = document.createElement('a');
    donateButton.style.display = 'flex';
    donateButton.style.alignItems = 'center';
    donateButton.style.justifyContent = 'center';
    donateButton.style.width = 'auto';
    donateButton.style.height = '40px';
    donateButton.style.margin = '15px';
    donateButton.style.backgroundColor = 'rgb(34, 197, 94)';
    donateButton.style.borderRadius = '4px';
    donateButton.style.color = 'white';
    donateButton.style.fontFamily = 'inherit';
    donateButton.style.fontSize = '15px';
    donateButton.style.fontWeight = '500';
    donateButton.style.textDecoration = 'none';
    donateButton.style.textAlign = 'center';
    donateButton.style.lineHeight = '1.6';
    donateButton.style.cursor = 'pointer';
    donateButton.innerHTML = '${dyno.buttonText}';
    donateButton.href = '${dyno.buttonLink}';
    donateButton.target = '_blank';
    donateButton.rel = 'noopener noreferrer';
    donateButton.style.transition = 'all 0.5s ease-in-out';


    donateButton.onmouseover = function() {
        donateButton.style.backgroundColor = 'rgb(22, 163, 74)';
    }

    donateButton.onmouseout = function() {
        donateButton.style.backgroundColor = 'rgb(34, 197, 94)';
    }


    companyNameText.onmouseover = function() {
        companyNameText.style.color = 'white';
    }

    companyNameText.onmouseout = function() {
        companyNameText.style.color = 'rgba(255, 255, 255, 0.5)';
    }


    modalContent.appendChild(dynoHeading);
    modalContent.appendChild(paragraph);
    modalContent.appendChild(donateButton);

    modal.appendChild(modalContent);

    modalContainer.appendChild(modal);
    div.appendChild(modalContainer);
    div.appendChild(flag);

    document.body.appendChild(div);


    flag.addEventListener('click', function() {

        if(modalOpen) {
            modal.style.right = '-600px';
            div.style.right = '0px';
            modalOpen = false;
        }else{
            modal.style.right = '70px';
            div.style.right = '-100px';
            modalOpen = true;
        }
    })

    closeIcon.addEventListener('click', function() {
        modal.style.right = '-600px';   
        div.style.right = '0px';
        modalOpen = false;
    })

    document.addEventListener('keydown', function(e) {
        if(e.keyCode == 27) {
            modal.style.right = '-600px';
            div.style.right = '0px';
            modalOpen = false;
        }
    })
    
    `;

  return theme !== undefined
    ? theme == "dark"
      ? darkTemplate
      : lightTemplate
    : lightTemplate;
}

module.exports = getTemplate;
