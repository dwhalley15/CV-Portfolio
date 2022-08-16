// All event listeners

document.getElementById("workBtn").addEventListener('click', getWorkExp);
document.getElementById("educationBtn").addEventListener('click', getQualifications);
document.getElementById("skillsBtn").addEventListener('click', getSkills);

//Function to retrieve work experience data from server and display on page.

function getWorkExp(){
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      let servResponse = JSON.parse(this.responseText);
      let workExp = "";
      for(let item of servResponse.workexperiances){
        workExp = workExp + "<li date='" + String(item.date) + "' role='" + String(item.role) + "' company='" + String(item.company) + "' description='" + String(item.description) + "' id='" + servResponse.workexperiances.indexOf(item) + "'>" + "<b>Date: </b>" + String(item.date) + "<b> Role: </b>" + String(item.role) + "<b> Company: </b>" + String(item.company) + "<b> Description: </b>" + String(item.description) + "</li>";
      }
      document.getElementById("workList").innerHTML = workExp;
      document.getElementById("workBtn").removeEventListener('click', getWorkExp);
      document.getElementById("workBtn").addEventListener('click', remWorkExp);
      document.getElementById("workBtn").innerText = "Click to collapse";
      document.getElementById("workBtn").id = "workCol";
      
    }
    else{
      console.log("Waiting");
    }
  }
  xhttp.open("GET", "api/workExp", true);
  xhttp.send();
}

//Function to collaspe work experience section.

function remWorkExp(){
  list = document.getElementById("workList");
  while (list.firstChild){
    list.removeChild(list.lastChild);
  }
  document.getElementById("workCol").removeEventListener('click', remWorkExp);
  document.getElementById("workCol").addEventListener('click', getWorkExp);
  document.getElementById("workCol").innerText = "Click to expand";
  document.getElementById("workCol").id = "workBtn";
}

//Function to retrieve qualifications data from server and display on page.

function getQualifications(){
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      let servResponse = JSON.parse(this.responseText);
      let qualifications = "";
      for(let item of servResponse.qualifications){
        qualifications = qualifications + "<li date='" + String(item.date) + "' role='" + String(item.location) + "' company='" + String(item.course) + "' description='" + String(item.grade) + "' id='" + servResponse.qualifications.indexOf(item) + "'>" + "<b>Date: </b>" + String(item.date) + "<b> Location: </b>" + String(item.location) + "<b> Course: </b>" + String(item.course) + "<b> Grade: </b>" + String(item.grade) + "</li>";
      }
      document.getElementById("qualificationsList").innerHTML = qualifications;
      document.getElementById("educationBtn").removeEventListener('click', getQualifications);
      document.getElementById("educationBtn").addEventListener('click', remQualifications);
      document.getElementById("educationBtn").innerText = "Click to collapse";
      document.getElementById("educationBtn").id = "educationCol";
      
    }
    else{
      console.log("Waiting");
    }
  }
  xhttp.open("GET", "api/qualifications", true);
  xhttp.send();
}

//Function to collaspe qualifications section.

function remQualifications(){
  list = document.getElementById("qualificationsList");
  while (list.firstChild){
    list.removeChild(list.lastChild);
  }
  document.getElementById("educationCol").removeEventListener('click', remQualifications);
  document.getElementById("educationCol").addEventListener('click', getQualifications);
  document.getElementById("educationCol").innerText = "Click to expand";
  document.getElementById("educationCol").id = "educationBtn";
}

//Function to retrieve skkills data from server and display on page.

function getSkills(){
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      let servResponse = JSON.parse(this.responseText);
      let skills = "";
      for(let item of servResponse.keyskills){
        skills = skills + "<li time='" + String(item.time) + "' skill='" + String(item.skill) + "' id='" + servResponse.keyskills.indexOf(item) + "'>" + String(item.time) + " - " + String(item.skill) + "</li>";
      }
      document.getElementById("skillsList").innerHTML = skills;
      document.getElementById("skillsBtn").removeEventListener('click', getSkills);
      document.getElementById("skillsBtn").addEventListener('click', remSkills);
      document.getElementById("skillsBtn").innerText = "Click to collapse";
      document.getElementById("skillsBtn").id = "skillsCol";
      
    }
    else{
      console.log("Waiting");
    }
  }
  xhttp.open("GET", "api/skills", true);
  xhttp.send();
}

//Function to collaspe skills section.

function remSkills(){
  list = document.getElementById("skillsList");
  while (list.firstChild){
    list.removeChild(list.lastChild);
  }
  document.getElementById("skillsCol").removeEventListener('click', remSkills);
  document.getElementById("skillsCol").addEventListener('click', getSkills);
  document.getElementById("skillsCol").innerText = "Click to expand";
  document.getElementById("skillsCol").id = "skillsBtn";
}