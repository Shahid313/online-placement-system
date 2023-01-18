import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateStudentModel = () => {
    return(

<div class="modal fade" id="updateStudentModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Add student</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

      <form>
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="password" placeholder="Password"/>
                                            <label for="password">Password</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm password"/>
                                            <label for="confirmpassword">Confirm password</label>
                                        </div>
                                    </div>
                                  
                                    
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="education" placeholder="Education"/>
                                            <label for="education">Education</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="degree" placeholder="Last degree"/>
                                            <label for="degree">Last degree</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea class="form-control" placeholder="About me" id="about_me"></textarea>
                                            <label for="about_me">About me</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                    <label className="btn btn-success w-100 py-3" for="cv">Upload CV</label>
                                        <input type="file" style={{display:'none'}} className="form-control" id="cv"/>
                                    </div>
                                  
                                    
                                    <div className="col-12">
                                        <button className="btn btn-success w-100 py-3" type="submit">Register</button>
                                    </div>
                                </div>
                            </form>
        
                        </div>
                      </div>
                    </div>
                  </div>

    )
}

export default UpdateStudentModel;