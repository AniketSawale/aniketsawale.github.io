const data = {
  projects: [
	{
		name: "Detection of Congitive ageing through speech.",
		discription:
		  "A web-application where user can upload the recorded speech to get to know how likely a person have chance to go through cognitive ageing.",	
		link: "https://github.com/AniketSawale/Dementia_speech"
  	},
    {
      name: "Colour-Texture classification using Deep learning models.",
      discription:
        "Classification of Texture and Colour on various datasets using various Deep learning model to see which factor is more dominant while classifying the images.",
      link: "https://github.com/AniketSawale/Master-Project/tree/master"
    },
    {
      name: "Resume Screening using Machine learning using Python and AWS.",
      discription:
        "With the help of KNN and natural language processing, the model will predict on the bases of the qualification of the candidates the given role is suitable or not.",
      link:
        "https://github.com/AniketSawale/ResumeScrenning"
    },
    {
      name: "Real-time price predict of the object using Machine learning on R.",
      discription:
        "An application where on the input of the user the model will predict the price of the item using machine learning techniques. The application follows client-server architecture.",
      link: "https://github.com/AniketSawale/R1"
    },
    {
      name: "Detection of alpha-numeric from the license plate.",
      discription:
        "Detection of alpha-numerical using Image Processing techniques on Matlab.",
      link: "https://github.com/AniketSawale/License-Plate-Detection"
    },
	  {
      name: "Hotel Booking Website.",
      discription:
        "A webiste to see the availability of the room in a Hotel. The webiste is hosted on the Tomcat server and all the user data are stored in MySQL database.",
      link: "https://github.com/AniketSawale/HotelBooking-Website"
    }
  ]
};

function createCard(project) {
  let container = document.createElement("div");
  container.className =
    "col-lg-4 col-md-6 offset-md-0 col-sm-10 offset-sm-1 col-12 p-3 project";
  let card = document.createElement("div");
  card.className = "card shadow p-3 height100";
  let cardTitle = document.createElement("h5");
  cardTitle.textContent = project.name;
  cardTitle.className = "card-title";
  let cardBody = document.createElement("p");
  cardBody.textContent = project.discription;
  cardBody.className = "card-body";
  let viewCodeBtn = document.createElement("button");
  viewCodeBtn.innerText = "View Source Code";
  viewCodeBtn.className = "view-code-btn";
  let link = document.createElement("a");
  link.href = project.link;
  link.target = "_blank";
  link.appendChild(viewCodeBtn);
  card.appendChild(cardTitle);
  card.appendChild(cardBody);
  card.appendChild(link);
  container.appendChild(card);
  return container;
}

function createView(projects) {
  let container = document.querySelector("#project-view");
  while (container.firstChild) {
    container.firstChild.remove();
  }
  projects.map(project => container.appendChild(createCard(project)));
  return;
}

createView(data.projects);
