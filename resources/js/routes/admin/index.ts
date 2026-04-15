import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import articles from './articles'
import recipes from './recipes'
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::dashboard
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:13
 * @route '/dashboardadmin'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboardadmin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::dashboard
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:13
 * @route '/dashboardadmin'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::dashboard
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:13
 * @route '/dashboardadmin'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AdminDashboardController::dashboard
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:13
 * @route '/dashboardadmin'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::dashboard
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:13
 * @route '/dashboardadmin'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::dashboard
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:13
 * @route '/dashboardadmin'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\AdminDashboardController::dashboard
 * @see app/Http/Controllers/Admin/AdminDashboardController.php:13
 * @route '/dashboardadmin'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
const admin = {
    dashboard: Object.assign(dashboard, dashboard),
articles: Object.assign(articles, articles),
recipes: Object.assign(recipes, recipes),
}

export default admin