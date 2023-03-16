// Public routes
const HOME = '/';
const ABOUT = '/about';
const SIGN_UP = '/signup';
const LOG_IN = '/login';
const RETURNS = '/returns';
const BROWSE = '/browse';
const ADMIN = '/admin';
const ADDBOOK = '/admin/addbook';
const DETAILS = '/details';
const BOOKUPDATE = '/update/:id'


// Post routes
const ITEMS = '/items';
const ITEM = '/item/:id';
const ITEM_INSERT = '/item/create';
const ITEM_UPDATE = '/item/update/:id';

export const routes = {
    HOME,
    ABOUT,
    SIGN_UP,
    LOG_IN,
    ITEMS,
    ITEM,
    ITEM_INSERT,
    ITEM_UPDATE,
    RETURNS,
    BROWSE,
    ADMIN,
    DETAILS,
    ADDBOOK,
    BOOKUPDATE
};
