const links = [
    {
      label: "Week1 notes",
      url: "Week1/index.html",
      week2label: "week2 notes",
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
      week8url: "Week8/index.html",
      week9label: "Week9 notes",
      week9url: "Week9/index.html",
      week10label: "Week10 notes",
      week10url: "Week10/index.html",
      challengelabel: "Challenge 1",
      challengeurl: "Challenge1/todolist.html",
      challenge2label: "Challenge 2",
      challenge2url: "challenge2/small.html"
      
    

    } 
    
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
        ol.appendChild(li9);

        const li10 = document.createElement('li');
        const href10 = document.createElement('a');
        href10.setAttribute('href',link.week10url);
        href10.innerText = link.week10label;
        li10.appendChild(href10);
        ol.appendChild(li10);

        const todoList = document.createElement('li');
        const todoListHref = document.createElement('a');
        todoListHref.setAttribute('href',link.challengeurl);
        todoListHref.innerText = link.challengelabel;
        todoList.appendChild(todoListHref);
        ol.appendChild(todoList);

        const ch2Li = document.createElement('li');
        const ch2LiHref = document.createElement('a');
        ch2LiHref.setAttribute('href',link.challenge2url);
        ch2LiHref.innerText = link.challenge2label;
        ch2Li.appendChild(ch2LiHref);
        ol.appendChild(ch2Li);

        

        

    })
}

 