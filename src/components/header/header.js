import React, {
  Component
} from 'react';
import '../../views/bootstrap.css';


class Header extends Component {
  render() {
    return ( <
      div >
      <
      nav class = "navbar navbar-inverse" >
      <
      div class = "container-fluid" >
      <
      div class = "navbar-header" >
      <
      a class = "navbar-brand"
      href = "#" > WebSiteName < /a> <
      /div> <
      ul class = "nav navbar-nav" >
      <
      li class = "active" > < a href = "#" > Home < /a></li >
      <
      li > < a href = "#" > Page 1 < /a></li >
      <
      li > < a href = "#" > Page 2 < /a></li >
      <
      li > < a href = "#" > Page 2 < /a></li >
      <
      li > < a href = "#" > Page 2 < /a></li >
      <
      /ul> <
      form class = "navbar-form navbar-left"
      action = "/action_page.php" >
      <
      div class = "form-group" >
      <
      input type = "text"
      class = "form-control"
      placeholder = "Search"
      name = "search" / >
      <
      /div> <
      button type = "submit"
      class = "btn btn-default" > Submit < /button> <
      /form> <
      /div> <
      /nav>

      <
      div class = "container" >
      <
      h3 > Navbar Forms < /h3> <
      p > Use the.navbar - form class to vertically align form elements(same padding as links) inside the navbar. < /p> <
      /div>

      <
      /div>
    );
  }
}

export default Header;