import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import '../assets/css/App.css';

function App() {
  return (
    <Router>
      <div id="wrapper" className="homepage">
        <div className="wrapper-holder">
          <AppHeader />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <AppFooter />
        </div>
      </div>
    </Router>
  );
}






function Gallery() {
  return (
    <div className="container">
      <div className="dvdr"></div>
      <section id="main">
        <h1>Browse our photo gallery. You can find here our kids and photos from events, parties and meetings</h1>
        <div className="tabs" style={{ marginBottom: "10px" }}>
          <ul className="filter-controls">
            <li><a href="#" data-filter="*" data-currently-viewing="all" className="selected">Show All</a></li>
            <li><a href="#" data-filter=".kids">Kids</a></li>
            <li><a href="#" data-filter=".meeting">Meetings</a></li>
            <li><a href="#" data-filter=".parties">Parties</a></li>
            <li><a href="#" data-filter=".print">Print</a></li>
          </ul>
        </div>
        <ul className="slider sortable-grid">
          <li>
            <ul>
              <li className="grid-item parties">
                <a href="#"><img src="images/img-person01.jpg" alt="" />
                  <div className="mask"></div></a></li>
              <li className="grid-item kids">
                <a href="#"><img src="images/img-kids01.jpg" alt="" />
                  <div className="mask"></div></a></li>
              <li className="grid-item kids">
                <a href="#"><img src="images/img-kids02.jpg" alt="" />
                  <div className="mask"></div></a></li>
            </ul>
          </li>
        </ul>
      </section>
      <div className="top-blue-border"></div>
    </div>
  );
}

function Contact() {
  return <h2>Contacts</h2>;
}


function AppHeader() {
  return (
    <header id="header">
      <div className="left-part"></div>
      <Link id="logo" to="/">Kid' school</Link>
      <div className="bar-holder">
        <a className="menu_trigger" href="#">menu</a>
        <nav id="nav">
          <ul>
            {/* <li><a href="about.html">About us</a></li> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function AppFooter() {
  return (
    <footer id="footer" style={{display : "block"}}>
      <div className="footer-holder">
        <div className="footer-frame">
          <div className="footer-content">
            <div className="col-holder">
              <div className="col_wrap">
                <div className="col">
                  <h3>Our address</h3>
                  <address className="map">1186 Madison Ave, NY 10173</address>
                  <address className="mail"><a href="mailto:contact@kidschool.com">contact@kidschool.com</a></address>
                  <address className="phone">(580) 845 982 431</address>
                </div>
              </div>
              <div className="col_wrap">
                <div className="col">
                  <h3>Latest posts</h3>
                  <ul className="posts">
                    <li><a href="#">Dignissimos ducimus blanditiis</a></li>
                    <li><a href="#">Praesentium voluptatum deleniti</a></li>
                    <li><a href="#">Atque corrupti quos dolores</a></li>
                    <li><a href="#">Molestias excepturi sint occaecati</a></li>
                    <li><a href="#">Cupiditate provident similique</a></li>
                  </ul>
                </div>
              </div>
              <div className="col_wrap">
                <div className="col">
                  <h3>Follow us</h3>
                  <p className="social">Accusamus iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                  <ul className="social">
                    <li><a className="facebook" href="#">Facebook</a></li>
                    <li><a className="google" href="#">Google+</a></li>
                    <li><a className="twitter" href="#">Twitter</a></li>
                    <li><a className="pinterest" href="#">Pinterest</a></li>
                  </ul>
                </div>
              </div>
              <div className="col_wrap">
                <div className="col">
                  <h3>Newsletter</h3>
                  <p className="form-newsletter">Voluptas sit aspernatur consequuntur.</p>
                  <form action="#" className="form-newsletter">
                    <fieldset>
                      <input type="email" placeholder="Your email..." />
                      <input className="btn white" type="submit" value="Subscribe" />
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="holder">
              <p>Copyright 2014 Kid’ school. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div>
      <section className="promo">
        <div className="slider-wrap">
          <ul className="slider">
            <li>
              <img className="slide" src="images/img-slide01.jpg" alt="" />
              <img className="slide-mask" src="images/bg_slider-mask.png" alt="" />
              <div className="slide-info">
                <h1><a href="#">Education for kids</a></h1>
                <p>Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.</p>
                <a className="btn red" href="#">Learn more</a>
              </div>
            </li>
            <li>
              <img className="slide" src="images/img-slide01.jpg" alt="" />
              <img className="slide-mask" src="images/bg_slider-mask.png" alt="" />
              <div className="slide-info">
                <h1><a href="#">Education for kids</a></h1>
                <p>Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.</p>
                <a className="btn red" href="#">Learn more</a>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section id="main">
        <div className="widget-boxes">
          <div className="box">
            <a href="#">
              <div className="box-info about">
                <h2>About the school</h2>
                <p>Enim ad minim veniam nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat duis aute irure dolor.</p>
              </div>
            </a>
          </div>
          <div className="box">
            <a href="#">
              <div className="box-info experience">
                <h2>Our experience</h2>
                <p>Perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium totam aperiam eaque dolor lorem.</p>
              </div>
            </a>
          </div>
          <div className="box">
            <a href="#">
              <div className="box-info fun">
                <h2>Big fun for kids!</h2>
                <p>Accusamus et iusto dignissimos ducimus blanditiis praesentium voluptatum deleniti corrupti quos dolores et quas molestias.</p>
              </div>
            </a>
          </div>
        </div>
        <div className="top-pink-border"></div>
        <div className="event-wrap">
          <div className="block-event">
            <div className="upcoming-event">
              <h2>April’s upcoming event</h2>
              <div className="event-description">
                <h3><a href="#">Libero tempore cum soluta nobis est eligendi optio cumque nihil</a></h3>
                <div className="metadata">
                  <time dateTime="2014-04-17T09:00">17.04.14
									<span>09:00 AM</span></time>
                  <span>Lorem ipsum dolor</span>
                </div>
                <p>Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                <a className="btn yellow" href="#">Learn more</a>
              </div>
            </div>
            <div className="widget-calendar">
              <table className="event-calendar">
                <thead>
                  <tr>
                    <th scope="col" className="controls"><span className="prev-mn"><a href="#">-</a></span></th>
                    <th scope="col" colSpan={5} className="month">April 2014</th>
                    <th scope="col" className="controls"><span className="next-mn"><a href="#">-</a></span></th>
                  </tr>
                  <tr>
                    <th scope="col" title="Monday">Mon</th>
                    <th scope="col" title="Tuesday">Tue</th>
                    <th scope="col" title="Wednesday">Wed</th>
                    <th scope="col" title="Thursday">Thu</th>
                    <th scope="col" title="Friday">Fri</th>
                    <th scope="col" title="Saturday">Sat</th>
                    <th scope="col" title="Sunday">Sun</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><div className="cell-wrap another-day">31</div></td><td><div className="cell-wrap">1</div></td><td><div className="cell-wrap">2</div></td><td><div className="cell-wrap">3</div></td><td><div className="cell-wrap">4</div></td><td><div className="cell-wrap">5</div></td>
                    <td><div className="cell-wrap archival sun">
                      <a href="#">6</a>
                      <div className="tooltip">
                        <div className="event-tooltip">
                          <h4>Libero tempore cum soluta nobis est eligendi optio</h4>
                          <div className="metadata">
                            <time dateTime="2014-04-06T09:00">06.04.14
														<span>09:00 AM</span></time>
                            <span className="place">Lorem ipsum dolor</span>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum dui, quis posuere urna fermentum nec. Aliquam erat volutpat.</p>
                        </div>
                      </div>
                    </div>
                    </td>
                  </tr>
                  <tr>
                    <td><div className="cell-wrap">7</div></td><td><div className="cell-wrap">8</div></td>
                    <td><div className="cell-wrap archival wed">
                      <a href="#">9</a>
                      <div className="tooltip">
                        <div className="event-tooltip">
                          <h4>Libero tempore cum soluta nobis est eligendi optio</h4>
                          <div className="metadata">
                            <time dateTime="2014-04-09T09:00">09.04.14
														<span>09:00 AM</span></time>
                            <span className="place">Lorem ipsum dolor</span>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum dui, quis posuere urna fermentum nec. Aliquam erat volutpat.</p>
                        </div>
                      </div>
                    </div>
                    </td>
                    <td><div className="cell-wrap">10</div></td><td><div className="cell-wrap">11</div></td>
                    <td><div className="cell-wrap archival sat">
                      <a href="#">12</a>
                      <div className="tooltip">
                        <div className="event-tooltip">
                          <h4>Libero tempore cum soluta nobis est eligendi optio</h4>
                          <div className="metadata">
                            <time dateTime="2014-04-12T09:00">12.04.14
														<span>09:00 AM</span></time>
                            <span className="place">Lorem ipsum dolor</span>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum dui, quis posuere urna fermentum nec. Aliquam erat volutpat.</p>
                        </div>
                      </div>
                    </div>
                    </td>
                    <td><div className="cell-wrap">13</div></td>
                  </tr>
                  <tr>
                    <td><div className="cell-wrap">14</div></td><td><div className="cell-wrap">15</div></td><td><div className="cell-wrap">16</div></td>
                    <td><div className="cell-wrap upcoming thu">
                      <a href="#">17</a>
                      <div className="tooltip">
                        <div className="event-tooltip">
                          <h4>Libero tempore cum soluta nobis est eligendi optio</h4>
                          <div className="metadata">
                            <time dateTime="2014-04-17T09:00">17.04.14
														<span>09:00 AM</span></time>
                            <span className="place">Lorem ipsum dolor</span>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum dui, quis posuere urna fermentum nec. Aliquam erat volutpat.</p>
                        </div>
                      </div>
                    </div>
                    </td>
                    <td><div className="cell-wrap">18</div></td><td><div className="cell-wrap">19</div></td><td><div className="cell-wrap">20</div></td>
                  </tr>
                  <tr>
                    <td><div className="cell-wrap">21</div></td>
                    <td><div className="cell-wrap upcoming tue">
                      <a href="#">22</a>
                      <div className="tooltip">
                        <div className="event-tooltip">
                          <h4>Libero tempore cum soluta nobis est eligendi optio</h4>
                          <div className="metadata">
                            <time dateTime="2014-04-22T09:00">22.04.14
														<span>09:00 AM</span></time>
                            <span className="place">Lorem ipsum dolor</span>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum dui, quis posuere urna fermentum nec. Aliquam erat volutpat.</p>
                        </div>
                      </div>
                    </div>
                    </td>
                    <td><div className="cell-wrap">23</div></td><td><div className="cell-wrap">24</div></td>
                    <td><div className="cell-wrap upcoming fri">
                      <a href="#">25</a>
                      <div className="tooltip">
                        <div className="event-tooltip">
                          <h4>Libero tempore cum soluta nobis est eligendi optio</h4>
                          <div className="metadata">
                            <time dateTime="2014-04-25T09:00">25.04.14
														<span>09:00 AM</span></time>
                            <span className="place">Lorem ipsum dolor</span>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum dui, quis posuere urna fermentum nec. Aliquam erat volutpat.</p>
                        </div>
                      </div>
                    </div>
                    </td>
                    <td><div className="cell-wrap">26</div></td><td><div className="cell-wrap">27</div></td>
                  </tr>
                  <tr>
                    <td><div className="cell-wrap upcoming mon">
                      <a href="#">28</a>
                      <div className="tooltip">
                        <div className="event-tooltip">
                          <h4>Libero tempore cum soluta nobis est eligendi optio</h4>
                          <div className="metadata">
                            <time dateTime="2014-04-28T09:00">28.04.14
														<span>09:00 AM</span></time>
                            <span className="place">Lorem ipsum dolor</span>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum dui, quis posuere urna fermentum nec. Aliquam erat volutpat.</p>
                        </div>
                      </div>
                    </div>
                    </td>
                    <td><div className="cell-wrap">29</div></td><td><div className="cell-wrap">30</div></td><td><div className="cell-wrap another-day">1</div></td><td><div className="cell-wrap another-day">2</div></td><td><div className="cell-wrap another-day">3</div></td><td><div className="cell-wrap another-day">4</div></td>
                  </tr>
                </tbody>
              </table>
              <div className="legend"><span className="upcoming">Upcoming event</span><span className="archival">Archival event</span> </div>
            </div>
          </div>
        </div>
        <div className="bottom-pink-border"></div>
        <div className="widget-boxes news">
          <h2>Latest news</h2>
          <div className="box">
            <a className="news-img" href="#">
              <img src="images/img-news01.jpg" alt="" />
              <div className="mask"></div>
            </a>
            <div className="box-info">
              <h3><a href="#">Nostrud exercitation ullamco laboris</a></h3>
              <div className="metadata">
                <time dateTime="2014-04-17">17.04.14</time>
                <span>Sarah James</span>
              </div>
              <p>Omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaque ipsa quae ab illo inventore (...)</p>
            </div>
          </div>
          <div className="box">
            <a className="news-img" href="#">
              <img src="images/img-news02.jpg" alt="" />
              <div className="mask"></div>
            </a>
            <div className="box-info">
              <h3><a href="#">Voluptatem accusantium doloremque</a></h3>
              <div className="metadata">
                <time dateTime="2014-04-16">16.04.14</time>
                <span>Tom Jones</span>
              </div>
              <p>Voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia (...)</p>
            </div>
          </div>
          <div className="box">
            <a className="news-img" href="#">
              <img src="images/img-news03.jpg" alt="" />
              <div className="mask"></div>
            </a>
            <div className="box-info">
              <h3><a href="#">Duis aute irure dolor in reprehenderit</a></h3>
              <div className="metadata">
                <time dateTime="2014-04-13">13.04.14</time>
                <span>Alan Smith</span>
              </div>
              <p>Adipisicing elit do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation (...)</p>
            </div>
          </div>
        </div>
      </section>

      <div className="top-blue-border"></div>
    </div>
  );
}

function About() {
  return (
    <div>
      <section id="main">
        <h1>We are an independent school for kids. Our experience help us to teach the youngest kids with awesome results. We use only the best methods and systems to improve learning.</h1>
        <div className="about-txt">
          <div className="col">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum quis posuere urna fermentum nec. Aliquam erat volutpat. Quisque pellentesque nulla dui, in <strong>rhoncus dui vestibulum cum sociis natoque penatibus et magnis dis parturient montes, nascetur</strong> ridiculus mus. Pellentesque convallis, sapien in tempus pharetra, leo lectus ultrices.</p>
          </div>
          <div className="col-dvdr">&nbsp;</div>
          <div className="col">
            <p>In vel purus ac purus porttitor condimentum vel eu tellus. Nulla euismod, risus eu fringilla luctus, tellus diam congue libero, eget porta nisl urna at ligula. <a href="#">Quisque neque orci, volutpat at massa egestas,</a> consequat sodales diam. Praesent ut felis mi. Proin et quam sed metus fringilla sodales. Mauris vel eleifend ligula. Proin a est eu nulla faucibus adipiscing.</p>
          </div>
        </div>
        <div className="person">
          <div className="person-img">
            <img src="images/img-person01.jpg" alt="" />
            <div className="mask"></div>
          </div>
          <div className="person-description">
            <h2>Dorothea Larsson</h2>
            <address>(590) 452 463 984
							<a className="email" href="mailto:dorothea@kidschool.com">dorothea@kidschool.com</a>
              <a className="facebook" href="#">Visit me at Facebook</a></address>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum dui, quis posuere urna fermentum nec. Aliquam erat volutpat. Quisque pellentesque nulla dui, in rhoncus dui vestibulum ac. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque convallis, sapien in tempus pharetra, leo lectus ultrices purus, vitae vestibulum arcu velit at leo. </p>
          </div>
        </div>
        <div className="person">
          <div className="person-img">
            <img src="images/img-person02.jpg" alt="" />
            <div className="mask"></div>
          </div>
          <div className="person-description">
            <h2>Patricia Stevenson</h2>
            <address>(590) 398 484 358
							<a className="email" href="mailto:patricia@kidschool.com">patricia@kidschool.com</a>
              <a className="facebook" href="#">Visit me at Facebook</a></address>
            <p>Pellentesque libero nulla, interdum eu lobortis et, scelerisque in enim. Vestibulum accumsan a est in rutrum. Nam molestie mauris eget lacus rutrum, in varius leo volutpat. Integer non tellus pellentesque, faucibus orci ac, interdum arcu. Nam cursus quis arcu eget pharetra. Nulla tellus nulla, rhoncus et venenatis eu, viverra non quam. Vestibulum euismod sem ac ante porta, vitae vestibulum justo semper. Ut sem arcu, porttitor et metus quis, lobortis mattis nisl.</p>
          </div>
        </div>
        <div className="person">
          <div className="person-img">
            <img src="images/img-person03.jpg" alt="" />
            <div className="mask"></div>
          </div>
          <div className="person-description">
            <h2>Jessica Smith</h2>
            <address>(590) 892 352 293
							<a className="email" href="mailto:jessica@kidschool.com">jessica@kidschool.com</a>
              <a className="facebook" href="#">Visit me at Facebook</a></address>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat ipsum dui, quis posuere urna fermentum nec. Aliquam erat volutpat. Quisque pellentesque nulla dui, in rhoncus dui vestibulum ac. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque convallis, sapien in tempus pharetra, leo lectus ultrices purus, vitae vestibulum arcu velit at leo. </p>
          </div>
        </div>
      </section>

      <div className="top-blue-border"></div>
    </div>


  );
}

export default App;
