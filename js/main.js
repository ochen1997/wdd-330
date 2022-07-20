const links = [
    {
      label: "Week1 notes",
      url: "Week1/index.html",
      week2label: "Week2 notes",
      week2url: "Week2/index.html",
      week3label: "Week3 notes",
      week3url: "Week3/index.html",
      week4label: "Week4 notes",
      week4url: "Week4/index.html",
      week5lable: "Week5 notes",
      week5url: "Week5/index.html",
      week7lable: "Week7 notes",
      week7url: "Week7/index.html",
      week8label: "Week8 notes",
      week8url: "Week8/index.html"
    

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

    })
}

