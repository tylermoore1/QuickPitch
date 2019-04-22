$(document).ready(function () {
  //append the company cards to user page so they can click on them to see if they want to connect
  $('#idMainContainer').append('<div class="parent-container"> \
        <div class="container-fluid companyCards col-md-5 offset-md-1"> \
          <div id="accordion"> \
            <div class="card"> \
              <div class="card-header" id="headingCard1"> \
                <button style="width:100%" class="btn" data-toggle="collapse" data-target="#collapseCard1" aria-expanded="true" aria-controls="collapseCard1"> \
                  <div class="row align-items-center"> \
                    <div class="col-md-12"> \
                      <label> Thumbtack </label> \
                      <img style="width:0.5in;height:0.5in" src="img/thumbtack.png">\
                    </div> \
                  </div>\
                </button> \
              </div> \
              \
              <div id="collapseCard1" class="collapse" aria-labelledby="headingCard1" data-parent="#accordion"> \
                <div class="card-body"> \
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft \ beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS. \
                </div> \
              </div> \
            </div> \
          </div> \
        </div> \
        <div class="container-fluid companyCards col-md-5"> \
        </div> \
      </div>')
})
