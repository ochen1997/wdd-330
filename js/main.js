const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html",
      week2label: "week2 notes",
      week2url: "week2/index.html",
      week3label: "week3 notes",
      week3url: "week3/index.html",
      week4label: "week4 notes",
      week4url: "week4/index.html",
      week5lable: "week5 notes",
      week5url: "week5/index.html",
      week7lable: "week7 notes",
      week7url: "week7/index.html",
      week8label: "week8 notes",
      week8url: "week8/index.html",
      week9label: "week9 notes",
      week9url: "week9/index.html"
    

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

        const li4 = document.createElement('li');
        const href4 = document.createElement('a');
        href4.setAttribute('href', link.week4url);
        href4.innerText = link.week4label;
        li4.appendChild(href4);
        ol.appendChild(li4);

        const li5 = document.createElement('li');
        const href5 = document.createElement('a');
        href5.setAttribute('href', link.week5url);
        href5.innerText = link.week5lable;
        li5.appendChild(href5);
        ol.appendChild(li5);

        const li7 = document.createElement('li');
        const href7 = document.createElement('a');
        href7.setAttribute('href', link.week7url);
        href7.innerText = link.week7lable;
        li7.appendChild(href7)
        ol.appendChild(li7)

        const li8 = document.createElement('li');
        const href8 = document .createElement('a');
        href8.setAttribute('href', link.week8url);
        href8.innerText = link.week8label;
        li8.appendChild(href8);
        ol.appendChild(li8)

        const li9 = document.createElement('li');
        const href9 = document.createElement('a');
        href9.setAttribute('href',link.week9url );
        href9.innerText = link.week9label;
        li9.appendChild(href9);
        ol.appendChild(li9)

    })
}

