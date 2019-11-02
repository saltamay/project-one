let userInfo = {};

const handleFirstQuestion = (e) => {
  console.log(e)
  userInfo.numOfBeds = e.dataset.value;

  document.getElementById("mainContainer").innerHTML = `  <div class="container" id='q2'>
<div class="row" >
    <div class="col s12 m10 offset-m1 l10 offset-l1 xl12 ">
      <div class="card red darken-4 z-depth-4">
        <div id='sliderCard' class="card-content white-text  ">
          <span class="card-title ">
            <i class='material-icons left green-text ' >monetization_on</i>
            Question 2 :
          </span>
          <p>WHAT ARE YOU LOOKING TO PAY?</p>
        </div>
        <div class="container ">
          <div id='sliderDisplay' class='center-align '>
              <span id='sliderText' class='z-depth-2 green-text text-darken-2' >
                <span>UP TO: $<span id='rentValue' >2700</span> PER MONTH</span>
              </span>
          </div>
        </div>
        <div class="container">
            <form action="#">
                <p class="range-field ">
                  <input class="z-depth-2" type="range" id="sliderInput" min="400" max="5000" />
                </p>
              </form>
        </div>
        <div class='container center-align'>
          <a href="#" class='btn' onclick="handleSecondQuestion()">Submit 
            <i class='material-icons right'>send</i>
          </a>
        </div>
        
      </div>
    </div>
  </div>
</div>

<script>
    document.onload = document.getElementById('sliderInput').addEventListener('input',function(e){
      document.getElementById('rentValue').innerText =e.target.value
    })
  </script>

`;

};

const handleSecondQuestion = () => {

  userInfo.price = document.getElementById("sliderInput").value;

  const q3 = `  <div class="container " id='q3'>
<div class="row" >
    <div class="col s12 m10 offset-m1 l10 offset-l1 xl12 ">
      <div class="card red darken-4 z-depth-4">
        <div id='sliderCard' class="card-content white-text  ">
          <span class="card-title ">
            <i class='material-icons left green-text ' >my_location</i>
            Question 3 :
          </span>
          <p>WHERE ARE YOU LOOKING TO MOVE?</p>
        </div>
        <div class="container">
            <div class="row">
                <form class="col s12 center-align">
                  <div class="row">
                    <div class="input-field col s12 center-align ">
                      <i class="material-icons prefix green-text">location_on</i>
                      <input id="location" type="text" class="validate white-text">
                      <label  class='green-text' for="location">Example: Toronto</label>
                    </div>
                  </div>
                  <a href="#" class='btn' onclick="handleThirdQuestion()">Submit 
                      <i class='material-icons right'>send</i>
                  </a>
                </form>
              </div>
        </div>
    </div>
  </div>
</div>
</div>`

  document.getElementById("mainContainer").innerHTML = q3;
};

const handleThirdQuestion = () => {

  userInfo.location = document.getElementById("location").value;

  const q4 = `<div class="container " id='q4'>
<div class="row " >
    <div class="col s12 m10 offset-m1 l10 offset-l1 xl12 ">
      <div class="card red darken-4 z-depth-4">
        <div class="card-content white-text ">
          <span class="card-title ">
            <i class='material-icons left green-text ' >show_chart</i>
            Question 4 :
          </span>
          <p>I CARE THE MOST ABOUT:</p>
        </div>
        <div class="card-action center-align">
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFourthQuestion(this)" data-value="transportaion">1. convenience of transportation</a>
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFourthQuestion(this)" data-value="price">2. The cheapest price</a>
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFourthQuestion(this)" data-value="location">3. Location</a>
        </div>
      </div>
    </div>
  </div>
</div>`

  document.getElementById("mainContainer").innerHTML = q4;
};

const handleFourthQuestion = (e) => {

  userInfo.mostImportant = e.dataset.value;

  console.log(userInfo);

  saveToLocalStorage();
}

const saveToLocalStorage = () => {

  // userInfo = JSON.parse(localStorage.getItem('userInfo'));

  // if (!userInfo) {

  //   // const users = {};

  //   // users.userInfo.id = userInfo;

  //   localStorage.setItem('users', JSON.stringify('userInfo'));
  // } else {

  //   const users = JSON.parse(localStorage.getItem('users'));

  //   users.userInfo.id = userInfo;

  //   localStorage.setItem('users', JSON.stringify('users'));
  // }

  localStorage.setItem('userInfo', JSON.stringify(userInfo));

}

const displayFirstQuestion = () => {

  var q1 = `<div class="container" id='q1'>
<div class="row " >
    <div class="col s12 m10 offset-m1 l10 offset-l1 xl12 ">
      <div class="card red darken-4 z-depth-4">
        <div class="card-content white-text ">
          <span class="card-title ">
            <i class='material-icons left green-text ' >info_outline</i>
            Question 1 :
          </span>
          <p>HOW MANY BEDROOMS DO YOU WANT?</p>
        </div>
        <div class="card-action center-align">
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFirstQuestion(this)" data-value="studio">Studio</a>
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFirstQuestion(this)" data-value="oneBed">1 Bed</a>
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFirstQuestion(this)" data-value="twoBed">2 Beds</a>
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFirstQuestion(this)" data-value="threePlus"">3+ Beds</a>
        </div>
      </div>
    </div>
  </div>
</div>`

  document.getElementById("mainContainer").innerHTML = q1;

  console.log('this works');

};

const main = function () {

  localStorage.clear();

  displayFirstQuestion();

};

main();