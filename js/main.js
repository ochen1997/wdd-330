const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html",
      week2label: "week2 notes",
      week2url: "week2/index.html",
      week3label: "week3 notes",
      week3url: "week3/index.html"

    }, 
    
  ]

function loadIndex() {
    const ol = document.querySelector('#linksList');
    links.forEach(link => {
        const li = document.createElement('li');
        const href = document.createElement('a');
        href.setAttribute('href', link.url)
        href.innerText = link.label
        li.appendChild(href);
        ol.appendChild(li);
        const li2 = document.createElement('li');
        const href2 = document.createElement('a');
        href2.setAttribute('href',link.week2url);
        href2.innerText = link.week2label
        li2.appendChild(href2);
        ol.appendChild(li2)
        const li3 = document.createElement('li');
        const href3 = document.createElement('a');
        href3.setAttribute('href', link.week3url);
        href3.innerText = link.week3label;
        li3.appendChild(href3);
        ol.appendChild(li3);


    })
}

