import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\PasswordController::settingsEdit
 * @see app/Http/Controllers/Settings/PasswordController.php:16
 * @route '/settings/password'
 */
export const settingsEdit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settingsEdit.url(options),
    method: 'get',
})

settingsEdit.definition = {
    methods: ["get","head"],
    url: '/settings/password',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\PasswordController::settingsEdit
 * @see app/Http/Controllers/Settings/PasswordController.php:16
 * @route '/settings/password'
 */
settingsEdit.url = (options?: RouteQueryOptions) => {
    return settingsEdit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\PasswordController::settingsEdit
 * @see app/Http/Controllers/Settings/PasswordController.php:16
 * @route '/settings/password'
 */
settingsEdit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: settingsEdit.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Settings\PasswordController::settingsEdit
 * @see app/Http/Controllers/Settings/PasswordController.php:16
 * @route '/settings/password'
 */
settingsEdit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: settingsEdit.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Settings\PasswordController::settingsEdit
 * @see app/Http/Controllers/Settings/PasswordController.php:16
 * @route '/settings/password'
 */
    const settingsEditForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: settingsEdit.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Settings\PasswordController::settingsEdit
 * @see app/Http/Controllers/Settings/PasswordController.php:16
 * @route '/settings/password'
 */
        settingsEditForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: settingsEdit.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Settings\PasswordController::settingsEdit
 * @see app/Http/Controllers/Settings/PasswordController.php:16
 * @route '/settings/password'
 */
        settingsEditForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: settingsEdit.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    settingsEdit.form = settingsEditForm
/**
* @see \App\Http\Controllers\Settings\PasswordController::settingsUpdate
 * @see app/Http/Controllers/Settings/PasswordController.php:24
 * @route '/settings/password'
 */
export const settingsUpdate = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: settingsUpdate.url(options),
    method: 'put',
})

settingsUpdate.definition = {
    methods: ["put"],
    url: '/settings/password',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Settings\PasswordController::settingsUpdate
 * @see app/Http/Controllers/Settings/PasswordController.php:24
 * @route '/settings/password'
 */
settingsUpdate.url = (options?: RouteQueryOptions) => {
    return settingsUpdate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\PasswordController::settingsUpdate
 * @see app/Http/Controllers/Settings/PasswordController.php:24
 * @route '/settings/password'
 */
settingsUpdate.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: settingsUpdate.url(options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Settings\PasswordController::settingsUpdate
 * @see app/Http/Controllers/Settings/PasswordController.php:24
 * @route '/settings/password'
 */
    const settingsUpdateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: settingsUpdate.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Settings\PasswordController::settingsUpdate
 * @see app/Http/Controllers/Settings/PasswordController.php:24
 * @route '/settings/password'
 */
        settingsUpdateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: settingsUpdate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    settingsUpdate.form = settingsUpdateForm
const PasswordController = { settingsEdit, settingsUpdate }

export default PasswordController