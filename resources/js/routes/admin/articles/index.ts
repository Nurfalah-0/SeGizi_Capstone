import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::store
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:22
 * @route '/admin/articles'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/articles',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::store
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:22
 * @route '/admin/articles'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::store
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:22
 * @route '/admin/articles'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::store
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:22
 * @route '/admin/articles'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::store
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:22
 * @route '/admin/articles'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::update
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:39
 * @route '/admin/articles/{article}'
 */
export const update = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/admin/articles/{article}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::update
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:39
 * @route '/admin/articles/{article}'
 */
update.url = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { article: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    article: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        article: typeof args.article === 'object'
                ? args.article.id
                : args.article,
                }

    return update.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::update
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:39
 * @route '/admin/articles/{article}'
 */
update.post = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::update
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:39
 * @route '/admin/articles/{article}'
 */
    const updateForm = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::update
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:39
 * @route '/admin/articles/{article}'
 */
        updateForm.post = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, options),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::destroy
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:56
 * @route '/admin/articles/{article}'
 */
export const destroy = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/articles/{article}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::destroy
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:56
 * @route '/admin/articles/{article}'
 */
destroy.url = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { article: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    article: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        article: typeof args.article === 'object'
                ? args.article.id
                : args.article,
                }

    return destroy.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::destroy
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:56
 * @route '/admin/articles/{article}'
 */
destroy.delete = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::destroy
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:56
 * @route '/admin/articles/{article}'
 */
    const destroyForm = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::destroy
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:56
 * @route '/admin/articles/{article}'
 */
        destroyForm.delete = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::togglePopular
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:62
 * @route '/admin/articles/{article}/toggle-popular'
 */
export const togglePopular = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: togglePopular.url(args, options),
    method: 'patch',
})

togglePopular.definition = {
    methods: ["patch"],
    url: '/admin/articles/{article}/toggle-popular',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::togglePopular
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:62
 * @route '/admin/articles/{article}/toggle-popular'
 */
togglePopular.url = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { article: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    article: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        article: typeof args.article === 'object'
                ? args.article.id
                : args.article,
                }

    return togglePopular.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::togglePopular
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:62
 * @route '/admin/articles/{article}/toggle-popular'
 */
togglePopular.patch = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: togglePopular.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::togglePopular
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:62
 * @route '/admin/articles/{article}/toggle-popular'
 */
    const togglePopularForm = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: togglePopular.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::togglePopular
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:62
 * @route '/admin/articles/{article}/toggle-popular'
 */
        togglePopularForm.patch = (args: { article: number | { id: number } } | [article: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: togglePopular.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    togglePopular.form = togglePopularForm
const articles = {
    store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
togglePopular: Object.assign(togglePopular, togglePopular),
}

export default articles