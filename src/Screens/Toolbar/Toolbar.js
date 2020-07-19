import React from 'react';
import Links from './../Link';
import { DrawerToggleButton } from '../SideDrawer/DrawerToggleButton';
import { NavLink } from 'react-router-dom';
import './Toolbar.scss';

export const Toolbar = props => {
    return (
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__navigation__left">
            <div className="toolbar__toggle-button">
              <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            {/* <div className="toolbar__logo">
              <NavLink to="/">OmaDiabetes.fi</NavLink>
            </div> */}
          </div>
          <div className="toolbar__navigation__middle">
            <div className="toolbar_navigation-items">
              <Links
                changeTextHandler={props.changeTextHandler}
                closeDrawer={props.closeHandler}
                contentProvider={props.contentProvider}
              />
            </div>
          </div>
          <div className="toolbar__pagename">{props.displayText}</div>
        </nav>
      </header>
    );
  };

// export const Toolbar = props => {
//     return (
//       <header className="toolbar">
//         <nav className="toolbar__navigation">
          
//             <div className="toolbar__toggle-button">
//               <DrawerToggleButton click={props.drawerClickHandler} />
//             </div>
         
//           <div className="toolbar__logo">
//         <a href="/">THE LOGO</a>
//       </div>
//       <div className="spacer" />
//       <div className="toolbar_navigation-items">
//         <ul>
//           <li>
//             <a href="/transactions">Products</a>
//           </li>
//           <li>
//             <a href="/pointrequests">Users</a>
//           </li>
//         </ul>
//       </div>
         
//         </nav>
//       </header>
//     );
//   };
// const Toolbar = props => (
//   <header className="toolbar">
//     <nav className="toolbar__navigation">
//       <div className="toolbar__toggle-button">
//         <DrawerToggleButton click={props.drawerClickHandler} />
//       </div>
//       <div className="toolbar__logo">
//         <a href="/">THE LOGO</a>
//       </div>
//       <div className="spacer" />
//       <div className="toolbar_navigation-items">
//         <ul>
//           <li>
//             <a href="/">Products</a>
//           </li>
//           <li>
//             <a href="/">Users</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   </header>
// )

