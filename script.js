const languageData = {
  en: {
    home: "Home",
    pages: "Pages",
    dept: "Department",
    event: "Event",
    blog: "Blog",
    contact: "Contact",
    issue: "Report an Issue",
    heroTitle: "Fastest Growing City in the India",
    heroDesc:
      "It's called as Electronic city because this is best city in Europe to start new industrial and technology related business.",
    discover: "Discover More",
    service1: "Your Government",
    service2: "Jobs and Unemployment",
    service3: "Business and Industry",
    service4: "Roads and Transport",
    service5: "Culture and Recreation",
    service6: "Justice, Safety and Law",
  },

  hi: {
    home: "होम",
    pages: "पेजेस",
    dept: "विभाग",
    event: "कार्यक्रम",
    blog: "ब्लॉग",
    contact: "संपर्क",
    issue: "समस्या रिपोर्ट करें",
    heroTitle: "भारत का सबसे तेजी से बढ़ता शहर",
    heroDesc:
      "इसे इलेक्ट्रॉनिक शहर कहा जाता है क्योंकि यह यूरोप में उद्योग और तकनीक शुरू करने के लिए सबसे अच्छा शहर है।",
    discover: "और जानें",
    service1: "आपकी सरकार",
    service2: "नौकरी और बेरोजगारी",
    service3: "व्यापार और उद्योग",
    service4: "सड़क और परिवहन",
    service5: "संस्कृति और मनोरंजन",
    service6: "न्याय, सुरक्षा और कानून",
  },

  or: {
    home: "ହୋମ୍",
    pages: "ପୃଷ୍ଠାଗୁଡିକ",
    dept: "ବିଭାଗ",
    event: "କାର୍ଯ୍ୟକ୍ରମ",
    blog: "ବ୍ଲଗ୍",
    contact: "ଯୋଗାଯୋଗ",
    issue: "ସମସ୍ୟା ରିପୋର୍ଟ କରନ୍ତୁ",
    heroTitle: "ଭାରତ ସବୁଠାରୁ ଦ୍ରୁତ ବୃଦ୍ଧିଶୀଳ ସହର",
    heroDesc:
      "ଏହାକୁ ଇଲେକ୍ଟ୍ରୋନିକ୍ ସିଟି କୁହାଯାଏ କାରଣ ଏହା ଶିଳ୍ପ ଓ ପ୍ରଯୁକ୍ତି ଆରମ୍ଭ ପାଇଁ ସର୍ବଶ୍ରେଷ୍ଠ ସହର।",
    discover: "ଅଧିକ ଜାଣନ୍ତୁ",
    service1: "ଆପଣଙ୍କ ସରକାର",
    service2: "ଚାକିରି ଓ ବେକାରି",
    service3: "ବ୍ୟବସାୟ ଓ ଶିଳ୍ପ",
    service4: "ରାସ୍ତା ଓ ପରିବହନ",
    service5: "ସଂସ୍କୃତି ଓ ବିନୋଦନ",
    service6: "ନ୍ୟାୟ, ସୁରକ୍ଷା ଓ ଆଇନ",
  },
};

/* ✅ Change Language Function */
document.getElementById("languageSelect").addEventListener("change", function () {
  let lang = this.value;

  document.getElementById("homeText").innerText = languageData[lang].home;
  document.getElementById("pagesText").innerText = languageData[lang].pages;
  document.getElementById("deptText").innerText = languageData[lang].dept;
  document.getElementById("eventText").innerText = languageData[lang].event;
  document.getElementById("blogText").innerText = languageData[lang].blog;
  document.getElementById("contactText").innerText = languageData[lang].contact;

  document.getElementById("issueText").innerText = languageData[lang].issue;

  document.getElementById("heroTitle").innerText = languageData[lang].heroTitle;
  document.getElementById("heroDesc").innerText = languageData[lang].heroDesc;
  document.getElementById("discoverText").innerText =
    languageData[lang].discover;

  document.getElementById("service1").innerText = languageData[lang].service1;
  document.getElementById("service2").innerText = languageData[lang].service2;
  document.getElementById("service3").innerText = languageData[lang].service3;
  document.getElementById("service4").innerText = languageData[lang].service4;
  document.getElementById("service5").innerText = languageData[lang].service5;
  document.getElementById("service6").innerText = languageData[lang].service6;
});