// react libraries
import * as React from 'react';

// fixtures
import { userMenuList, globalMenuList } from '../../../fixtures/menuArray';

/**
 * @desc
 */
class NavBarMenu extends React.Component {

  /**
   * @desc
   */
  public render() {
    const isLoggedIn = false;
    const renderedArray = isLoggedIn
      ? userMenuList
      : globalMenuList;

    return (
      <ul className='main-menu-list'>
        {
          renderedArray.map((menuItem, index) => (
            <li key={index}>
              <a href={`/${menuItem.toLocaleLowerCase()}`}>
                {menuItem}
              </a>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default NavBarMenu;
