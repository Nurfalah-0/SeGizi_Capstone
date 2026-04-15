import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
 * @see routes/web.php:24
 * @route '/recipes'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/recipes',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:24
 * @route '/recipes'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:24
 * @route '/recipes'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:24
 * @route '/recipes'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:24
 * @route '/recipes'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:24
 * @route '/recipes'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:24
 * @route '/recipes'
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
 * @see routes/web.php:29
 * @route '/recipes/{recipe}'
 */
export const show = (args: { recipe: string | number } | [recipe: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/recipes/{recipe}',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:29
 * @route '/recipes/{recipe}'
 */
show.url = (args: { recipe: string | number } | [recipe: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { recipe: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    recipe: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        recipe: args.recipe,
                }

    return show.definition.url
            .replace('{recipe}', parsedArgs.recipe.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see routes/web.php:29
 * @route '/recipes/{recipe}'
 */
show.get = (args: { recipe: string | number } | [recipe: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
 * @see routes/web.php:29
 * @route '/recipes/{recipe}'
 */
show.head = (args: { recipe: string | number } | [recipe: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
 * @see routes/web.php:29
 * @route '/recipes/{recipe}'
 */
    const showForm = (args: { recipe: string | number } | [recipe: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
 * @see routes/web.php:29
 * @route '/recipes/{recipe}'
 */
        showForm.get = (args: { recipe: string | number } | [recipe: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
 * @see routes/web.php:29
 * @route '/recipes/{recipe}'
 */
        showForm.head = (args: { recipe: string | number } | [recipe: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const recipes = {
    index: Object.assign(index, index),
show: Object.assign(show, show),
}

export default recipes