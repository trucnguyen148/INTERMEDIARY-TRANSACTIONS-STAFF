import React, {Component} from 'react';

// import 'typeface-roboto';
import { Toolbar } from './Toolbar/Toolbar';
import { SideDrawer } from './SideDrawer/SideDrawer';


class Layout extends React.Component {
    state = {
      sideDrawerOpen: false,
      displayText: '',
      contentProvider: '',
    };

    componentWillMount () {
      let contentProvider = '';
  
      this.setState({
        contentProvider
      });
    }
  
    drawerToggleClickHandler = () => {
      this.setState(prevState => {
        return { sideDrawerOpen: !prevState.sideDrawerOpen };
      });
    };
  
    displayTextClickHandler = param => {
      this.setState({ displayText: param });
    };
  
    
  
    getViewPortSize = () => {
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      // We listen to the resize event
      window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        // console.log(vh);
      });
      // console.log(vh);
    };
  
    render () {
      this.getViewPortSize();
  
      return (
        <div className="mainApp">
          <Toolbar
            drawerClickHandler={this.drawerToggleClickHandler}
            displayText={this.state.displayText}
            changeTextHandler={this.displayTextClickHandler}
            closeHandler={this.drawerToggleClickHandler}
            contentProvider={this.state.contentProvider}
          />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            closeHandler={this.drawerToggleClickHandler}
            changeTextHandler={this.displayTextClickHandler}
            contentProvider={this.state.contentProvider}
          />
  
          <div style={{marginLeft: '210px'}}>
            {/* <img className="imagetest1" src={testiImage} alt="jejasdf" /> */}
  
            {this.props.children}
          </div>
        </div>
      );
    }
  }
  
  export default Layout;
  
// class Layout extends Component {
//   state = {
//     sideDrawerOpen: false,
//   }

//   drawerToggleClickHandler = () => {
//     this.setState(prevState => {
//       return { sideDrawerOpen: !prevState.sideDrawerOpen }
//     })
//   }

//   backdropClickHandler = () => {
//     this.setState({ sideDrawerOpen: false })
//   }

//   render() {
//     let backdrop
//     let sideDrawer

//     if (this.state.sideDrawerOpen) {
//       backdrop = <Backdrop click={this.backdropClickHandler} />
//       sideDrawer = <SideDrawer />
//     }
//     return (
//       <div style={{ height: '100%' }}>
//         <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
//         {sideDrawer}
//         {backdrop}
//         <main style={{ marginTop: '64px' }}>
//           <p>This is the page content!</p>
//         </main>
//       </div>
//     )
//   }
// }

// export default Layout