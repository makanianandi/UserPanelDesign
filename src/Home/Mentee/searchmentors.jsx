
import React, { Component } from 'react';
import {USER,USER_1,USER_2,USER_4,USER_5} from '../../constant/imagepath_home';
import StickyBox from "react-sticky-box";
import { Link, withRouter } from 'react-router-dom';


class Search extends Component {
  constructor(props) {
    super(props)
  }
   render() {
     const{history} = this.props;
      return ( 
        <div>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-8 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/app/index">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Events</li>
                  </ol>
                </nav>
                {/* <h2 className="breadcrumb-title">2245 matches found for : Mentors In  Florida</h2> */}
              </div>
              <div className="col-md-4 col-12 d-md-block d-none">
                <div className="sort-by">
                  <span className="sort-title">Sort by</span>
                  <span className="sortby-fliter">
                    <select className="select form-control">
                      <option>Select</option>
                      <option className="sorting">Name</option>
                      <option className="sorting">Organizer</option>
                      <option className="sorting">Ownership</option>
                    </select>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-lg-3 col-xl-2">
                {/* Search Filter */}
                <StickyBox offsetTop={20} offsetBottom={20}>
                <div className="card search-filter">
                  <div className="card-header">
                    <h4 className="card-title mb-0">Search Filter</h4>
                  </div>
                  <div className="card-body">
                    {/* <div className="filter-widget">
                      <div className="cal-icon">
                        <input type="text" className="form-control datetimepicker" placeholder="Select Date" />
                      </div>			
                    </div> */}
                    <div className="filter-widget">
                      <h4>Gender</h4>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" defaultChecked />
                          <span className="checkmark" /> Male
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Female
                        </label>
                      </div>
                    </div>
                    <div className="filter-widget">
                      <h4>Select Courses</h4>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" defaultChecked />
                          <span className="checkmark" /> Digital Marketer
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" defaultChecked />
                          <span className="checkmark" /> UNIX, Calculus, Trigonometry
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> Computer Programming
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> ASP.NET,Computer Gaming
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> HTML, Css
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_specialist" />
                          <span className="checkmark" /> VB, VB.net
                        </label>
                      </div>
                    </div>
                    <div className="btn-search">
                      <button type="button" className="btn btn-block">Search</button>
                    </div>	
                  </div>
                </div>
                </StickyBox>
                {/* /Search Filter */}
              </div>
              <div className="col-md-12 col-lg-9 col-xl-10">
                {/* Mentor Widget */}
                <div className="card">
                  <div className="card-body">
                    <div className="mentor-widget">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/mentor-profile">
                            <img src={USER} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/mentor-profile">Boost Control Horizon</Link></h4>
                          <div className="user-infos">
                            <ul>
                              <li><i className="fas fa-map-marker-alt" data-toggle="tooltip" title="Venue" /> 485 King St W</li>
                              <li><i className="far fa-money-bill-alt" data-toggle="tooltip" title="Cost" /> $25.00</li>
                              <li><i className="far fa-user" data-toggle="tooltip" title="Ownership" /> Ownership of group</li>
                              <li><i className="far fa-clock" data-toggle="tooltip" title="Date and Time" /> 25 jan 2022, 10:30PM</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="user-info-right">
                        <div className="user-infos">
                          <div className='text-right'><i class="fa fa-heart fs-25"></i><br /><br /><br /><br /></div>
                        </div>
                        <div className="mentor-booking">
                          <Link className="apt-btn" to="/app/Mentee/booking">Book Events</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Mentor Widget */}
                
                  {/* Mentor Widget */}
                  <div className="card">
                  <div className="card-body">
                    <div className="mentor-widget">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/mentor-profile">
                            <img src={USER_1} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/mentor-profile">Towne Auto Sales</Link></h4>
                          <div className="user-infos">
                            <ul>
                              <li><i className="fas fa-map-marker-alt" data-toggle="tooltip" title="Venue" /> 485 King St W</li>
                              <li><i className="far fa-money-bill-alt" data-toggle="tooltip" title="Cost" /> $25.00</li>
                              <li><i className="far fa-user" data-toggle="tooltip" title="Ownership" /> Ownership of group</li>
                              <li><i className="far fa-clock" data-toggle="tooltip" title="Date and Time" /> 25 jan 2022, 10:30PM</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="user-info-right">
                        <div className="user-infos">
                          <div className='text-right'><i class="fa fa-heart fs-25"></i><br /><br /><br /><br /></div>
                        </div>
                        <div className="mentor-booking">
                          <Link className="apt-btn" to="/app/Mentee/booking">Book Events</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Mentor Widget */}
                  {/* Mentor Widget */}
                  <div className="card">
                  <div className="card-body">
                    <div className="mentor-widget">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/mentor-profile">
                            <img src={USER_2} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/mentor-profile">Vent Bike Tech</Link></h4>
                          <div className="user-infos">
                            <ul>
                              <li><i className="fas fa-map-marker-alt" data-toggle="tooltip" title="Venue" /> 485 King St W</li>
                              <li><i className="far fa-money-bill-alt" data-toggle="tooltip" title="Cost" /> $25.00</li>
                              <li><i className="far fa-user" data-toggle="tooltip" title="Ownership" /> Ownership of group</li>
                              <li><i className="far fa-clock" data-toggle="tooltip" title="Date and Time" /> 25 jan 2022, 10:30PM</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="user-info-right">
                        <div className="user-infos">
                          <div className='text-right'><i class="fa fa-heart fs-25"></i><br /><br /><br /><br /></div>
                        </div>
                        <div className="mentor-booking">
                          <Link className="apt-btn" to="/app/Mentee/booking">Book Events</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Mentor Widget */}
                  {/* Mentor Widget */}
                  <div className="card">
                  <div className="card-body">
                    <div className="mentor-widget">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/mentor-profile">
                            <img src={USER} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/mentor-profile">Nahas Auto Center</Link></h4>
                          <div className="user-infos">
                            <ul>
                              <li><i className="fas fa-map-marker-alt" data-toggle="tooltip" title="Venue" /> 485 King St W</li>
                              <li><i className="far fa-money-bill-alt" data-toggle="tooltip" title="Cost" /> $25.00</li>
                              <li><i className="far fa-user" data-toggle="tooltip" title="Ownership" /> Ownership of group</li>
                              <li><i className="far fa-clock" data-toggle="tooltip" title="Date and Time" /> 25 jan 2022, 10:30PM</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="user-info-right">
                        <div className="user-infos">
                          <div className='text-right'><i class="fa fa-heart fs-25"></i><br /><br /><br /><br /></div>
                        </div>
                        <div className="mentor-booking">
                          <Link className="apt-btn" to="/app/Mentee/booking">Book Events</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Mentor Widget */}
                  {/* Mentor Widget */}
                  <div className="card">
                  <div className="card-body">
                    <div className="mentor-widget">
                      <div className="user-info-left">
                        <div className="mentor-img">
                          <Link to="/app/Mentee/mentor-profile">
                            <img src={USER} className="img-fluid" alt="User Image" />
                          </Link>
                        </div>
                        <div className="user-info-cont">
                          <h4 className="usr-name"><Link to="/app/Mentee/mentor-profile" ClassName='text-orange' >Brooklyn Auto Mall</Link></h4>
                          <div className="user-infos">
                            <ul>
                              <li><i className="fas fa-map-marker-alt" data-toggle="tooltip" title="Venue" /> 485 King St W</li>
                              <li><i className="far fa-money-bill-alt" data-toggle="tooltip" title="Cost" /> $25.00</li>
                              <li><i className="far fa-user" data-toggle="tooltip" title="Ownership" /> Ownership of group</li>
                              <li><i className="far fa-clock" data-toggle="tooltip" title="Date and Time" /> 25 jan 2022, 10:30PM</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="user-info-right">
                        <div className="user-infos">
                          <div className='text-right'><i class="fa fa-heart fs-25"></i><br /><br /><br /><br /></div>
                        </div>
                        <div className="mentor-booking">
                          <Link className="apt-btn" to="/app/Mentee/booking">Book Events</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Mentor Widget */}
                {/* <div className="load-more text-center">
                  <a className="btn btn-primary btn-sm" href="">Load More</a>	
                </div>	 */}
              </div>
            </div>
          </div>
        </div>		
        {/* /Page Content */}
      </div>
      );
   }
}

export default withRouter(Search);
