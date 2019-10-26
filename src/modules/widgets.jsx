import { TextView, Color, Font, Button, drawer, contentView } from 'tabris';
import { loginPage } from '../pages/loginPage';
import { editProfilePage } from '../pages/editProfilePage';
import { overviewPage } from '../pages/overviewPage';
import { color_heading, color_action, font_large, color_info, font_info } from '../config/config';
import { logout } from './helpers';


function getHeadingText(text) {
    return new TextView({
        left: 16, right: 16, top: 40,
        alignment: 'centerX',
        text: text,
        textColor: color_heading,
        font: font_large,
    });
}

function getActionButton(text) {
    return new Button({
        left: 16, right: 16, top: 'prev() 8',
        text: text,
        background: color_action,
        highlightOnTouch: false
    });
}

function getInfoText(text) {
    return new TextView({
        left: 16, right: 16, top: 'prev() 8',
        alignment: 'centerX',
        text: text,
        textColor: color_info,
        font: font_info,
        opacity: 0
    });
}

function initializeDrawer(navigationView) {
    const editProfileButton = new Button({
        layoutData: {
            top: 'prev() 8',
            height: 'auto',
            left: 16, right: 16
        },
        text: 'Edit Profile',
        background: color_action,
        highlightOnTouch: false
    }).onSelect(() => {
        navigationView.append(editProfilePage());
        drawer.close();
    });
    const exploreButton = new Button({
        layoutData: {
            top: 'prev() 8',
            left: 16, right: 16
        },
        text: 'Explore',
        background: color_action,
        highlightOnTouch: false
    }).onSelect(() => {
        navigationView.append(overviewPage());
        drawer.close();
    });
    const searchButton = new Button({
        layoutData: {
            top: 'prev() 8',
            left: 16, right: 16
        },
        text: 'Search',
        background: color_action,
        highlightOnTouch: false
    }).onSelect(() => {
        navigationView.append(overviewPage());
        drawer.close();
    });

    const favoritesButton = new Button({
        layoutData: {
            top: 'prev() 8',
            left: 16, right: 16
        },
        text: 'Favorites',
        background: color_action,
        highlightOnTouch: false
    }).onSelect(() => {
        navigationView.append(overviewPage());
        drawer.close();
    });
    const logoutButton = new Button({
        layoutData: {
            bottom: true, height: 'auto',
            left: 16, right: 16
        },
        text: 'Logout',
        background: color_action,
        highlightOnTouch: false
    }).onSelect(() => {
        new AlertDialog({
            title: 'Do you really want to log out?',
            buttons: { ok: 'Yes', cancel: "No" }
        }).open().onCloseOk(() => {
            logout();
            navigationView.pages().detach();
            navigationView.drawerActionVisible = false;
            navigationView.append(loginPage(navigationView));
        });
    });
    drawer.append(exploreButton);
    drawer.append(searchButton);
    drawer.append(favoritesButton);
    drawer.append(editProfileButton);
    drawer.append(logoutButton);
}

function getFooter() {
    const exploreButton = new Button({text:"Explore",
        layoutData: {
            bottom: true, height: 'auto',
            left: 5, right: 5
        }
    }).onSelect(_explore);

    function _explore() {
        explorePage(_username, _navigationView).appendTo(_navigationView);
        page.dispose();
    };



    return exploreButton;

};






export { getActionButton, getHeadingText, initializeDrawer, getInfoText, getFooter };
