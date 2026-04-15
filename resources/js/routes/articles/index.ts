import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
 * @see routes/web.php:33
 * @route '/articles'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/articles',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:33
 * @route '/articles'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:33
 * @route '/articles'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:33
 * @route '/articles'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:33
 * @route '/articles'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:33
 * @route '/articles'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:33
 * @route '/articles'
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
 * @see routes/web.php:38
 * @route '/articles/{article}'
 */
export const show = (args: { article: string | number } | [article: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/articles/{article}',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:38
 * @route '/articles/{article}'
 */
show.url = (args: { article: string | number } | [article: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { article: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    article: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        article: args.article,
                }

    return show.definition.url
            .replace('{article}', parsedArgs.article.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see routes/web.php:38
 * @route '/articles/{article}'
 */
show.get = (args: { article: string | number } | [article: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
 * @see routes/web.php:38
 * @route '/articles/{article}'
 */
show.head = (args: { article: string | number } | [article: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
 * @see routes/web.php:38
 * @route '/articles/{article}'
 */
    const showForm = (args: { article: string | number } | [article: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
 * @see routes/web.php:38
 * @route '/articles/{article}'
 */
        showForm.get = (args: { article: string | number } | [article: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
 * @see routes/web.php:38
 * @route '/articles/{article}'
 */
        showForm.head = (args: { article: string | number } | [article: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const articles = {
    index: Object.assign(index, index),
show: Object.assign(show, show),
}

export default articles