$(document).ready(function () {
  var companyNames = ['Thumbtack', 'BrainVire Infotech', 'Atomic Object', 'Adobe', 'Mailchimp',
                      'Shopify', 'Dropbox', 'SalesForce']
  //append the company cards to user page so they can click on them to see if they want to connect
  for (var i = 0; i < 8; i += 2) {
    var j = i + 1;
    $('#idMainContainer').append('<div class="parent-container"> \
          <div class="container-fluid companyCards col-md-5 offset-md-1"> \
            <div id="accordion companyButtons"> \
              <div class="card companyButtons"> \
                <div class="card-header companyButtons" id="headingCard' + i + '"> \
                  <button style="width:100%" class="btn companyButtons" data-toggle="collapse" data-target="#collapseCard' + i + '" aria-expanded="true" aria-controls="collapseCard' + i + '"> \
                    <div class="row align-items-center"> \
                      <div class="col-md-5 offset-md-1"> \
                        <label> '+ companyNames[i] +' </label> \
                      </div> \
                      <div class="col-md-2 offset-md-1"> \
                        <img style="width:0.8in;height:0.8in" src="img/imgLogo' + i + '.png">\
                      </div> \
                    </div>\
                  </button> \
                </div> \
                \
                <div id="collapseCard' + i + '" class="collapse" aria-labelledby="headingCard' + i + '" data-parent="#accordion"> \
                  <div class="card-body"> \
                    <div class="row"> \
                      <div class="col-md-12"> \
                        '+ companyNames[i] + ' is an online service that matches customers with local professionals. \
                      </div> \
                    </div> \
                    <br /> \
                    <div class="row"> \
                      <div class="col-md-1"> <i style="color:red" class="fas fa-times fa-2x"></i> </div> \
                      <div class="col-md-1 offset-md-9"> <i style="color:green" class="fas fa-check fa-2x"></i> </div> \
                    </div> \
                  </div> \
                </div> \
              </div> \
            </div> \
          </div> \
          \
          <div class="container-fluid companyCards col-md-5"> \
            <div id="accordion companyButtons"> \
              <div class="card companyButtons"> \
                <div class="card-header companyButtons" id="headingCard' + i + '"> \
                  <button style="width:100%" class="btn companyButtons" data-toggle="collapse" data-target="#collapseCard' + j + '" aria-expanded="true" aria-controls="collapseCard' + j + '"> \
                    <div class="row align-items-center"> \
                      <div class="col-md-5 offset-md-1"> \
                        <label> '+ companyNames[j] +' </label> \
                      </div> \
                      <div class="col-md-2 offset-md-1"> \
                        <img style="width:0.8in;height:0.8in" src="img/imgLogo' + j + '.png">\
                      </div> \
                    </div>\
                  </button> \
                </div> \
                \
                <div id="collapseCard' + j + '" class="collapse" aria-labelledby="headingCard' + j + '" data-parent="#accordion"> \
                  <div class="card-body"> \
                    <div class="row"> \
                      <div class="col-md-12"> \
                        '+ companyNames[j] + ' is an online service that matches customers with local professionals. \
                      </div> \
                    </div> \
                    <br /> \
                    <div class="row"> \
                      <div class="col-md-1"> <i style="color:red" class="fas fa-times fa-2x"></i> </div> \
                      <div class="col-md-1 offset-md-9"> <i style="color:green" class="fas fa-check fa-2x"></i> </div> \
                    </div> \
                  </div> \
                </div> \
              </div> \
            </div> \
          </div> \
          \
        </div>')
  }

});
