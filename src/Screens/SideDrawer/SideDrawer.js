import React from 'react';

import './SideDrawer.scss';
import Links from './../Link';

export const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <Links
        closeDrawer={props.closeHandler}
      />
    </nav>
  );
};

// export const SideDrawer = props => {
//   let drawerClasses = 'side-drawer'
//   if (props.show) {
//     drawerClasses = 'side-drawer open'
//   }
//   return (
//     <nav className={drawerClasses}>
//       <ul>
//         <li>
//           <a href="/transactions">Products</a>
//         </li>
//         <li>
//           <a href="/pointrequests">Users</a>
//         </li>
//       </ul>
//     </nav>
//   )
// };

