import { Page, Color, drawer, ScrollView, ImageView, Widget } from 'tabris';
import { color_heading } from '../config/config';
import { getActionButton, getFooter } from '../modules/widgets';

export function explorePage(username, navigationView) {
    drawer.enabled = true;
    navigationView.drawerActionVisible = true;
    navigationView.titleTextColor = color_heading;
    const page = new Page({ title: 'Welcome, '.concat(username), background: Color.white, autoDispose: true });

    getFooter().appendTo(page);

    return page;
}