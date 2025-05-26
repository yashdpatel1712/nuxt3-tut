export const useCart = () => useState(() => []);

export const useAuth = () => useState('auth', () => ({ isAuth: false }));

export const useWishlist = () => useState(() => []);