import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::store
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:85
 * @route '/admin/recipes'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/recipes',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::store
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:85
 * @route '/admin/recipes'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::store
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:85
 * @route '/admin/recipes'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::store
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:85
 * @route '/admin/recipes'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::store
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:85
 * @route '/admin/recipes'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::update
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:103
 * @route '/admin/recipes/{recipe}'
 */
export const update = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/admin/recipes/{recipe}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::update
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:103
 * @route '/admin/recipes/{recipe}'
 */
update.url = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { recipe: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { recipe: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    recipe: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        recipe: typeof args.recipe === 'object'
                ? args.recipe.id
                : args.recipe,
                }

    return update.definition.url
            .replace('{recipe}', parsedArgs.recipe.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::update
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:103
 * @route '/admin/recipes/{recipe}'
 */
update.post = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::update
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:103
 * @route '/admin/recipes/{recipe}'
 */
    const updateForm = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::update
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:103
 * @route '/admin/recipes/{recipe}'
 */
        updateForm.post = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, options),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::destroy
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:120
 * @route '/admin/recipes/{recipe}'
 */
export const destroy = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/recipes/{recipe}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::destroy
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:120
 * @route '/admin/recipes/{recipe}'
 */
destroy.url = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { recipe: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { recipe: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    recipe: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        recipe: typeof args.recipe === 'object'
                ? args.recipe.id
                : args.recipe,
                }

    return destroy.definition.url
            .replace('{recipe}', parsedArgs.recipe.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::destroy
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:120
 * @route '/admin/recipes/{recipe}'
 */
destroy.delete = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::destroy
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:120
 * @route '/admin/recipes/{recipe}'
 */
    const destroyForm = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:120
 * @route '/admin/recipes/{recipe}'
 */
        destroyForm.delete = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:126
 * @route '/admin/recipes/{recipe}/toggle-popular'
 */
export const togglePopular = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: togglePopular.url(args, options),
    method: 'patch',
})

togglePopular.definition = {
    methods: ["patch"],
    url: '/admin/recipes/{recipe}/toggle-popular',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::togglePopular
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:126
 * @route '/admin/recipes/{recipe}/toggle-popular'
 */
togglePopular.url = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { recipe: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { recipe: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    recipe: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        recipe: typeof args.recipe === 'object'
                ? args.recipe.id
                : args.recipe,
                }

    return togglePopular.definition.url
            .replace('{recipe}', parsedArgs.recipe.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::togglePopular
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:126
 * @route '/admin/recipes/{recipe}/toggle-popular'
 */
togglePopular.patch = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: togglePopular.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::togglePopular
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:126
 * @route '/admin/recipes/{recipe}/toggle-popular'
 */
    const togglePopularForm = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:126
 * @route '/admin/recipes/{recipe}/toggle-popular'
 */
        togglePopularForm.patch = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: togglePopular.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    togglePopular.form = togglePopularForm
const recipes = {
    store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
togglePopular: Object.assign(togglePopular, togglePopular),
}

export default recipes