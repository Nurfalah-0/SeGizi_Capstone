import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::index
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:13
 * @route '/dashboardadmin'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboardadmin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::index
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:13
 * @route '/dashboardadmin'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::index
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:13
 * @route '/dashboardadmin'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::index
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:13
 * @route '/dashboardadmin'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::index
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:13
 * @route '/dashboardadmin'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::index
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:13
 * @route '/dashboardadmin'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::index
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:13
 * @route '/dashboardadmin'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::storeArticle
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:22
 * @route '/admin/articles'
 */
export const storeArticle = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeArticle.url(options),
    method: 'post',
})

storeArticle.definition = {
    methods: ["post"],
    url: '/admin/articles',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::storeArticle
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:22
 * @route '/admin/articles'
 */
storeArticle.url = (options?: RouteQueryOptions) => {
    return storeArticle.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::storeArticle
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:22
 * @route '/admin/articles'
 */
storeArticle.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeArticle.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::storeArticle
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:22
 * @route '/admin/articles'
 */
    const storeArticleForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storeArticle.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::storeArticle
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:22
 * @route '/admin/articles'
 */
        storeArticleForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storeArticle.url(options),
            method: 'post',
        })
    
    storeArticle.form = storeArticleForm
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::updateArticle
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:39
 * @route '/admin/articles/{article}'
 */
export const updateArticle = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateArticle.url(args, options),
    method: 'post',
})

updateArticle.definition = {
    methods: ["post"],
    url: '/admin/articles/{article}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::updateArticle
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:39
 * @route '/admin/articles/{article}'
 */
updateArticle.url = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return updateArticle.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::updateArticle
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:39
 * @route '/admin/articles/{article}'
 */
updateArticle.post = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateArticle.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::updateArticle
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:39
 * @route '/admin/articles/{article}'
 */
    const updateArticleForm = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateArticle.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::updateArticle
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:39
 * @route '/admin/articles/{article}'
 */
        updateArticleForm.post = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateArticle.url(args, options),
            method: 'post',
        })
    
    updateArticle.form = updateArticleForm
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::destroyArticle
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:72
 * @route '/admin/articles/{article}'
 */
export const destroyArticle = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyArticle.url(args, options),
    method: 'delete',
})

destroyArticle.definition = {
    methods: ["delete"],
    url: '/admin/articles/{article}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::destroyArticle
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:72
 * @route '/admin/articles/{article}'
 */
destroyArticle.url = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroyArticle.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::destroyArticle
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:72
 * @route '/admin/articles/{article}'
 */
destroyArticle.delete = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyArticle.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::destroyArticle
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:72
 * @route '/admin/articles/{article}'
 */
    const destroyArticleForm = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyArticle.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::destroyArticle
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:72
 * @route '/admin/articles/{article}'
 */
        destroyArticleForm.delete = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyArticle.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyArticle.form = destroyArticleForm
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::toggleArticlePopular
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:78
 * @route '/admin/articles/{article}/toggle-popular'
 */
export const toggleArticlePopular = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleArticlePopular.url(args, options),
    method: 'patch',
})

toggleArticlePopular.definition = {
    methods: ["patch"],
    url: '/admin/articles/{article}/toggle-popular',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::toggleArticlePopular
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:78
 * @route '/admin/articles/{article}/toggle-popular'
 */
toggleArticlePopular.url = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return toggleArticlePopular.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::toggleArticlePopular
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:78
 * @route '/admin/articles/{article}/toggle-popular'
 */
toggleArticlePopular.patch = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleArticlePopular.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::toggleArticlePopular
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:78
 * @route '/admin/articles/{article}/toggle-popular'
 */
    const toggleArticlePopularForm = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleArticlePopular.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::toggleArticlePopular
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:78
 * @route '/admin/articles/{article}/toggle-popular'
 */
        toggleArticlePopularForm.patch = (args: { article: string | number | { id: string | number } } | [article: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleArticlePopular.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    toggleArticlePopular.form = toggleArticlePopularForm
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::storeRecipe
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:85
 * @route '/admin/recipes'
 */
export const storeRecipe = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeRecipe.url(options),
    method: 'post',
})

storeRecipe.definition = {
    methods: ["post"],
    url: '/admin/recipes',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::storeRecipe
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:85
 * @route '/admin/recipes'
 */
storeRecipe.url = (options?: RouteQueryOptions) => {
    return storeRecipe.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::storeRecipe
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:85
 * @route '/admin/recipes'
 */
storeRecipe.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeRecipe.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::storeRecipe
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:85
 * @route '/admin/recipes'
 */
    const storeRecipeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storeRecipe.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::storeRecipe
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:85
 * @route '/admin/recipes'
 */
        storeRecipeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storeRecipe.url(options),
            method: 'post',
        })
    
    storeRecipe.form = storeRecipeForm
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::updateRecipe
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:103
 * @route '/admin/recipes/{recipe}'
 */
export const updateRecipe = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateRecipe.url(args, options),
    method: 'post',
})

updateRecipe.definition = {
    methods: ["post"],
    url: '/admin/recipes/{recipe}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::updateRecipe
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:103
 * @route '/admin/recipes/{recipe}'
 */
updateRecipe.url = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return updateRecipe.definition.url
            .replace('{recipe}', parsedArgs.recipe.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::updateRecipe
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:103
 * @route '/admin/recipes/{recipe}'
 */
updateRecipe.post = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateRecipe.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::updateRecipe
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:103
 * @route '/admin/recipes/{recipe}'
 */
    const updateRecipeForm = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateRecipe.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::updateRecipe
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:103
 * @route '/admin/recipes/{recipe}'
 */
        updateRecipeForm.post = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateRecipe.url(args, options),
            method: 'post',
        })
    
    updateRecipe.form = updateRecipeForm
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::destroyRecipe
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:120
 * @route '/admin/recipes/{recipe}'
 */
export const destroyRecipe = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyRecipe.url(args, options),
    method: 'delete',
})

destroyRecipe.definition = {
    methods: ["delete"],
    url: '/admin/recipes/{recipe}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::destroyRecipe
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:120
 * @route '/admin/recipes/{recipe}'
 */
destroyRecipe.url = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroyRecipe.definition.url
            .replace('{recipe}', parsedArgs.recipe.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::destroyRecipe
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:120
 * @route '/admin/recipes/{recipe}'
 */
destroyRecipe.delete = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyRecipe.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::destroyRecipe
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:120
 * @route '/admin/recipes/{recipe}'
 */
    const destroyRecipeForm = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroyRecipe.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::destroyRecipe
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:120
 * @route '/admin/recipes/{recipe}'
 */
        destroyRecipeForm.delete = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroyRecipe.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroyRecipe.form = destroyRecipeForm
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::toggleRecipePopular
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:126
 * @route '/admin/recipes/{recipe}/toggle-popular'
 */
export const toggleRecipePopular = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleRecipePopular.url(args, options),
    method: 'patch',
})

toggleRecipePopular.definition = {
    methods: ["patch"],
    url: '/admin/recipes/{recipe}/toggle-popular',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::toggleRecipePopular
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:126
 * @route '/admin/recipes/{recipe}/toggle-popular'
 */
toggleRecipePopular.url = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return toggleRecipePopular.definition.url
            .replace('{recipe}', parsedArgs.recipe.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::toggleRecipePopular
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:126
 * @route '/admin/recipes/{recipe}/toggle-popular'
 */
toggleRecipePopular.patch = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggleRecipePopular.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::toggleRecipePopular
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:126
 * @route '/admin/recipes/{recipe}/toggle-popular'
 */
    const toggleRecipePopularForm = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleRecipePopular.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::toggleRecipePopular
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:126
 * @route '/admin/recipes/{recipe}/toggle-popular'
 */
        toggleRecipePopularForm.patch = (args: { recipe: string | number | { id: string | number } } | [recipe: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleRecipePopular.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    toggleRecipePopular.form = toggleRecipePopularForm
const AdminDashboardController = { index, storeArticle, updateArticle, destroyArticle, toggleArticlePopular, storeRecipe, updateRecipe, destroyRecipe, toggleRecipePopular }

export default AdminDashboardController