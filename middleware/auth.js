export default defineNuxtRouteMiddleware(() => {
    const auth = useAuth();
    // return auth.value.isAuth;
    if (!auth.value.isAuth) {
        // Throw a 403 forbidden error
        throw createError({
            statusCode: 403,
            statusMessage: 'Forbidden',
        });
    }
})  