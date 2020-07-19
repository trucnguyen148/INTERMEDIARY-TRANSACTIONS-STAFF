import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faEnvelope, faBell, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const NavBarLink = props => {
    return (
      <NavLink
        {...props}
        activeClassName="active"
        className="linkButton"
        style={{ textAlign: 'center' }}
      />
    );
  };

  const Links = props => {
    return (
      <>
        <div className='ui inverted vertical left fixed menu'>
            <div className="test">
              <NavBarLink 
                  onClick={() => {
                    props.closeDrawer();
                  }}
                  to="/transactions"
              >
                  <FontAwesomeIcon icon={faList} className="space"/>
                  Giao dịch
              </NavBarLink>
            </div>
            
          
          
          <div className="test">
            <NavBarLink 
              onClick={() => {
                props.closeDrawer();
              }}
              to="/pointrequests"
            >
              <FontAwesomeIcon icon={faBell} className="space"/>
              Yêu cầu nạp điểm
            </NavBarLink>
          </div>
          <div className="test">
            <NavBarLink 
                onClick={() => {
                props.closeDrawer();
              }}
              to="/takemoneyrequests"
            >
              <FontAwesomeIcon icon={faCheckCircle} className="space"/>
              Yêu cầu rút tiền
            </NavBarLink>
          </div> 
        </div>
      </>
    );
  };

  export default Links;
